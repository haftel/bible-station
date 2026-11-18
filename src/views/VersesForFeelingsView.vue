<template>
  <div class="feelings-view">
    <header class="page-header">
      <div class="header-badge">
        <span class="badge-dot"></span>
        Biblical Encouragement & Empathy
      </div>
      <h1 class="page-title">Scripture for Every Season</h1>
      <p class="page-subtitle">
        Explore our interactive Feelings Wheel. Hover over or tap any emotion to expand deeper feelings,
        and receive a comforting, verified scripture (NIV 2011) spoken directly to your heart.
      </p>

      <!-- View Controls & Search Bar -->
      <div class="wheel-controls-bar">
        <div class="mode-toggle-group">
          <button
            :class="['toggle-btn', { active: viewMode === 'focus' }]"
            @click="setMode('focus')"
            title="Interactive expansion on hover/tap"
          >
            ✦ Interactive Focus
          </button>
          <button
            :class="['toggle-btn', { active: viewMode === 'full' }]"
            @click="setMode('full')"
            title="Display all 3 tiers of feelings simultaneously"
          >
            ◉ Full Wheel View
          </button>
        </div>

        <div class="search-box-wrapper">
          <div class="search-input-container">
            <span class="search-icon">🔍</span>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search 130+ feelings (e.g. tired, hopeful, lonely)..."
              class="feeling-search-input"
              @focus="searchFocused = true"
              @blur="handleSearchBlur"
            />
            <button
              v-if="searchQuery"
              class="search-clear-btn"
              @click="searchQuery = ''"
            >
              ✕
            </button>
          </div>

          <!-- Search Results Dropdown -->
          <div v-if="searchFocused && filteredFeelings.length > 0" class="search-dropdown">
            <div
              v-for="item in filteredFeelings.slice(0, 8)"
              :key="item.id"
              class="search-dropdown-item"
              @mousedown.prevent="selectFeeling(item.id)"
            >
              <span class="item-color-dot" :style="{ backgroundColor: item.color }"></span>
              <div class="item-info">
                <span class="item-name">{{ item.label }}</span>
                <span class="item-path">{{ item.path.join(' › ') }}</span>
              </div>
              <span class="item-tier-badge">Tier {{ item.tier }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="container wheel-main-container">
      <!-- Active Emotion Breadcrumb -->
      <nav class="breadcrumb-container" aria-label="Feeling navigation" v-if="activeCore">
        <span class="breadcrumb-label">Current Branch:</span>
        <div class="breadcrumb-trail">
          <button
            class="breadcrumb-chip core-chip"
            v-if="activeCore"
            :style="{ borderColor: activeCore.color, color: activeCore.darkColor, backgroundColor: activeCore.lightColor }"
            @click="selectFeeling(activeCore.id)"
          >
            {{ activeCore.label }}
          </button>
          <span v-if="activeSecondary" class="breadcrumb-separator">›</span>
          <button
            class="breadcrumb-chip secondary-chip"
            v-if="activeSecondary"
            :style="{ borderColor: activeSecondary.color, color: activeSecondary.darkColor, backgroundColor: activeSecondary.lightColor }"
            @click="selectFeeling(activeSecondary.id)"
          >
            {{ activeSecondary.label }}
          </button>
          <span v-if="activeTertiary" class="breadcrumb-separator">›</span>
          <button
            class="breadcrumb-chip tertiary-chip"
            v-if="activeTertiary"
            :style="{ borderColor: activeTertiary.color, color: activeTertiary.darkColor, backgroundColor: activeTertiary.lightColor }"
            @click="selectFeeling(activeTertiary.id)"
          >
            {{ activeTertiary.label }}
          </button>
          <button
            class="reset-selection-btn"
            @click="resetSelection"
            title="Reset wheel to center"
          >
            ↺ Reset
          </button>
        </div>
      </nav>

      <!-- SVG Feelings Wheel Stage -->
      <div class="wheel-stage">
        <div
          class="wheel-svg-wrapper"
          @mouseenter="onWheelMouseEnter"
          @mouseleave="onWheelMouseLeave"
        >
          <svg
            viewBox="-380 -380 760 760"
            class="feelings-wheel-svg"
            role="img"
            aria-label="Interactive Feelings Wheel"
          >
            <defs>
              <filter id="hub-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0,0,0,0.12)" />
              </filter>
              <filter id="slice-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.18)" />
              </filter>
            </defs>

            <!-- Guide Rings -->
            <circle cx="0" cy="0" r="155" fill="none" stroke="#e5e5e5" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
            <circle cx="0" cy="0" r="242" fill="none" stroke="#e5e5e5" stroke-width="1" stroke-dasharray="3,3" opacity="0.4" />
            <circle cx="0" cy="0" r="336" fill="none" stroke="#e5e5e5" stroke-width="1" stroke-dasharray="3,3" opacity="0.3" />

            <!-- ================= RING 3: TERTIARY SLICES ================= -->
            <g class="ring-tertiary">
              <template v-for="tert in visibleTertiarySlices" :key="tert.id">
                <g
                  class="wheel-slice slice-tertiary"
                  :class="{
                    'slice-active': selectedFeelingId === tert.id,
                    'slice-hovered': hoveredFeelingId === tert.id
                  }"
                  @mouseenter="onSliceEnter(tert.id)"
                  @touchstart.passive="onSliceTouchStart($event, tert.id)"
                  @touchend="onSliceTouchEnd($event, tert.id)"
                  @click="handleSliceClick(tert.id)"
                >
                  <path
                    :d="describeArc(248, 336, tert.startAngle, tert.endAngle, 0.6)"
                    :fill="tert.color"
                    class="slice-path"
                  />
                  <!-- Radial Label -->
                  <text
                    :x="getRadialCoords(tert.startAngle, tert.endAngle, 248, 336).x"
                    :y="getRadialCoords(tert.startAngle, tert.endAngle, 248, 336).y"
                    :transform="`rotate(${getRadialCoords(tert.startAngle, tert.endAngle, 248, 336).rot}, ${getRadialCoords(tert.startAngle, tert.endAngle, 248, 336).x}, ${getRadialCoords(tert.startAngle, tert.endAngle, 248, 336).y})`"
                    text-anchor="middle"
                    dominant-baseline="central"
                    class="slice-label label-tertiary"
                  >
                    {{ tert.label }}
                  </text>
                </g>
              </template>
            </g>

            <!-- ================= RING 2: SECONDARY SLICES ================= -->
            <g class="ring-secondary">
              <template v-for="sec in visibleSecondarySlices" :key="sec.id">
                <g
                  class="wheel-slice slice-secondary"
                  :class="{
                    'slice-active': selectedFeelingId === sec.id,
                    'slice-hovered': hoveredFeelingId === sec.id,
                    'branch-highlight': activeSecondary?.id === sec.id
                  }"
                  @mouseenter="onSliceEnter(sec.id)"
                  @touchstart.passive="onSliceTouchStart($event, sec.id)"
                  @touchend="onSliceTouchEnd($event, sec.id)"
                  @click="handleSliceClick(sec.id)"
                >
                  <path
                    :d="describeArc(162, 242, sec.startAngle, sec.endAngle, 0.8)"
                    :fill="sec.color"
                    class="slice-path"
                  />
                  <!-- Radial Label -->
                  <text
                    :x="getRadialCoords(sec.startAngle, sec.endAngle, 162, 242).x"
                    :y="getRadialCoords(sec.startAngle, sec.endAngle, 162, 242).y"
                    :transform="`rotate(${getRadialCoords(sec.startAngle, sec.endAngle, 162, 242).rot}, ${getRadialCoords(sec.startAngle, sec.endAngle, 162, 242).x}, ${getRadialCoords(sec.startAngle, sec.endAngle, 162, 242).y})`"
                    text-anchor="middle"
                    dominant-baseline="central"
                    class="slice-label label-secondary"
                  >
                    {{ sec.label }}
                  </text>
                </g>
              </template>
            </g>

            <!-- ================= RING 1: CORE SLICES ================= -->
            <g class="ring-core">
              <g
                v-for="core in FEELINGS_HIERARCHY"
                :key="core.id"
                class="wheel-slice slice-core"
                :class="{
                  'slice-active': selectedFeelingId === core.id,
                  'slice-hovered': hoveredFeelingId === core.id,
                  'branch-highlight': activeCore?.id === core.id
                }"
                @mouseenter="onSliceEnter(core.id)"
                @touchstart.passive="onSliceTouchStart($event, core.id)"
                @touchend="onSliceTouchEnd($event, core.id)"
                @click="handleSliceClick(core.id)"
              >
                <path
                  :d="describeArc(80, 155, core.startAngle, core.endAngle, 1.2)"
                  :fill="core.color"
                  class="slice-path"
                />
                <!-- Tangential Arc Label -->
                <text
                  :transform="getTangentialTransform(core.startAngle, core.endAngle, 80, 155)"
                  text-anchor="middle"
                  dominant-baseline="central"
                  class="slice-label label-core"
                >
                  {{ core.label }}
                </text>
              </g>
            </g>

            <!-- ================= CENTER HUB ================= -->
            <g
              class="wheel-center-hub"
              @click="resetSelection"
              @touchend.prevent="resetSelection"
              cursor="pointer"
            >
              <!-- Center Circle Backdrop -->
              <circle cx="0" cy="0" r="74" class="hub-circle" filter="url(#hub-shadow)" />

              <!-- Content in Center -->
              <template v-if="displayFeeling">
                <text y="-22" class="hub-eyebrow">
                  {{ displayFeeling.tier === 1 ? 'CORE EMOTION' : (displayFeeling.tier === 2 ? 'SUB-FEELING' : 'DEEPER FEELING') }}
                </text>
                <text
                  y="6"
                  class="hub-feeling-name"
                  :fill="displayFeeling.darkColor"
                >
                  {{ displayFeeling.label }}
                </text>
                <text y="28" class="hub-action-hint">
                  Click to view verse
                </text>
              </template>
              <template v-else>
                <text y="-18" class="hub-peace-icon">🕊️</text>
                <text y="4" class="hub-default-title">How are you</text>
                <text y="22" class="hub-default-subtitle">feeling?</text>
                <text y="40" class="hub-default-hint">Hover or tap to expand</text>
              </template>
            </g>
          </svg>
        </div>

        <!-- Wheel Hint / Instructions -->
        <p class="wheel-hint-text">
          <span class="hint-bullet">💡</span>
          <strong>How it works:</strong> Hover or tap a core emotion to expand its sub-feelings, then choose any feeling to load encouraging scripture.
        </p>
      </div>

      <!-- ================= DYNAMIC SCRIPTURE DISPLAY BOX ================= -->
      <section
        ref="verseCardRef"
        v-if="selectedVerse && selectedFeeling"
        class="verse-display-card fade-in"
        :style="{
          borderLeftColor: selectedFeeling.color,
          boxShadow: `0 8px 30px -4px ${selectedFeeling.lightColor}`
        }"
      >
        <!-- Card Header with Breadcrumb Badge -->
        <div class="verse-card-header">
          <div
            class="feeling-badge-chip"
            :style="{
              backgroundColor: selectedFeeling.lightColor,
              color: selectedFeeling.darkColor,
              borderColor: selectedFeeling.color
            }"
          >
            <span class="badge-dot" :style="{ backgroundColor: selectedFeeling.color }"></span>
            {{ selectedFeeling.path.join(' › ') }}
          </div>
          <span class="verse-counter">
            Verse {{ currentVerseIndex + 1 }} of {{ availableVerses.length }}
          </span>
        </div>

        <!-- Comforting Headline -->
        <h2 class="verse-card-headline" :style="{ color: selectedFeeling.darkColor }">
          God’s Word When You’re Feeling {{ selectedFeeling.label }}
        </h2>

        <!-- Scripture Quote -->
        <blockquote class="verse-quote">
          “{{ selectedVerse.text }}”
        </blockquote>

        <!-- Citation Reference -->
        <div class="verse-citation" :style="{ color: selectedFeeling.color }">
          — {{ selectedVerse.ref }}
        </div>

        <!-- Actions Toolbar -->
        <div class="verse-actions-bar">
          <button
            class="action-btn next-verse-btn"
            :style="{ backgroundColor: selectedFeeling.color }"
            @click="cycleNextVerse"
            title="Cycle to the next encouraging verse for this feeling"
          >
            ↻ Get Another Verse for '{{ selectedFeeling.label }}'
          </button>

          <button
            class="action-btn copy-verse-btn"
            @click="copyVerseToClipboard"
            title="Copy verse and reference to clipboard"
          >
            {{ copiedRecently ? '✓ Copied!' : '📋 Copy Verse' }}
          </button>

          <router-link
            :to="{
              path: '/memory',
              query: {
                ref: getCleanVerseRef(selectedVerse.ref),
                translation: 'niv2011'
              }
            }"
            class="action-btn practice-verse-link"
            title="Practice this passage in the Scripture Memorizer tool"
          >
            🧠 Practice in Memorizer →
          </router-link>
        </div>
      </section>

      <!-- Welcome Invitation Card (when no verse is yet selected) -->
      <section v-else class="verse-welcome-card fade-in">
        <div class="welcome-card-content">
          <span class="welcome-icon">📖</span>
          <h3 class="welcome-title">Find Peace & Encouragement for Your Soul</h3>
          <p class="welcome-text">
            Every season of life brings a multitude of emotions. Select or hover over any feeling on the wheel above
            to see God's promises from the NIV Bible tailored for what you're experiencing today.
          </p>
        </div>
      </section>

      <!-- ================= CATEGORY BROWSE LIST (ACCESSIBILITY & QUICK ACCESS) ================= -->
      <section class="browse-categories-section">
        <div class="browse-header" @click="showBrowseList = !showBrowseList">
          <div class="browse-header-left">
            <h3 class="browse-title">Explore All Feelings by Core Group</h3>
            <span class="browse-subtitle">Browse all 130 emotions categorized in their 7 families</span>
          </div>
          <button class="browse-toggle-btn">
            {{ showBrowseList ? '▲ Hide Category List' : '▼ View Category List' }}
          </button>
        </div>

        <div v-show="showBrowseList" class="category-cards-grid fade-in">
          <div
            v-for="core in FEELINGS_HIERARCHY"
            :key="core.id"
            class="core-category-card"
            :style="{ borderTopColor: core.color }"
          >
            <div class="core-card-header">
              <span class="core-indicator-badge" :style="{ backgroundColor: core.color }"></span>
              <h4 class="core-card-title">{{ core.label }}</h4>
              <button
                class="core-select-chip"
                :style="{ backgroundColor: core.lightColor, color: core.darkColor }"
                @click="selectFeeling(core.id)"
              >
                Select Core
              </button>
            </div>

            <!-- Secondaries & Tertiaries Accordion / List -->
            <div class="secondaries-list">
              <div
                v-for="sec in core.secondaries"
                :key="sec.id"
                class="secondary-group-item"
              >
                <button
                  class="secondary-name-btn"
                  :class="{ 'btn-selected': selectedFeelingId === sec.id }"
                  @click="selectFeeling(sec.id)"
                >
                  {{ sec.label }}
                </button>
                <div class="tertiary-tags-row">
                  <button
                    v-for="tert in sec.tertiaries"
                    :key="tert.id"
                    class="tertiary-tag-btn"
                    :class="{ 'btn-selected': selectedFeelingId === tert.id }"
                    @click="selectFeeling(tert.id)"
                  >
                    {{ tert.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import {
  FEELINGS_HIERARCHY,
  FEELINGS_INDEX,
  FEELINGS_VERSES
} from '@/data/feelingsWheelData.js'

// ==================== STATE ====================
const viewMode = ref('focus') // 'focus' | 'full'
const searchQuery = ref('')
const searchFocused = ref(false)
const copiedRecently = ref(false)
const showBrowseList = ref(false)

// Active and selected states (INITIALIZED TO NULL - Wheel starts unexpanded!)
const hoveredFeelingId = ref(null)
const selectedFeelingId = ref(null)
const activeCoreId = ref(null)
const activeSecondaryId = ref(null)

const currentVerseIndex = ref(0)
const verseCardRef = ref(null)

let collapseTimer = null

// ==================== COMPUTED HIERARCHY ====================
const selectedFeeling = computed(() => {
  if (!selectedFeelingId.value) return null
  return FEELINGS_INDEX[selectedFeelingId.value] || null
})

const hoveredFeeling = computed(() => {
  if (!hoveredFeelingId.value) return null
  return FEELINGS_INDEX[hoveredFeelingId.value] || null
})

// Current feeling displayed in central hub (hovered takes precedence, then selected)
const displayFeeling = computed(() => {
  return hoveredFeeling.value || selectedFeeling.value || null
})

const activeCore = computed(() => {
  if (activeCoreId.value) {
    return FEELINGS_INDEX[activeCoreId.value] || null
  }
  return null
})

const activeSecondary = computed(() => {
  if (activeSecondaryId.value) {
    return FEELINGS_INDEX[activeSecondaryId.value] || null
  }
  return null
})

const activeTertiary = computed(() => {
  const current = hoveredFeeling.value || selectedFeeling.value
  if (!current || current.tier !== 3) return null
  return current
})

// Visible Ring 2 (Secondary) Slices
const visibleSecondarySlices = computed(() => {
  if (viewMode.value === 'full') {
    const list = []
    FEELINGS_HIERARCHY.forEach(c => list.push(...c.secondaries))
    return list
  }
  // Focus Mode: only show secondaries if a core is active!
  if (!activeCoreId.value) return []
  const coreNode = FEELINGS_HIERARCHY.find(c => c.id === activeCoreId.value)
  return coreNode?.secondaries || []
})

// Visible Ring 3 (Tertiary) Slices
const visibleTertiarySlices = computed(() => {
  if (viewMode.value === 'full') {
    const list = []
    FEELINGS_HIERARCHY.forEach(c => {
      c.secondaries.forEach(s => list.push(...s.tertiaries))
    })
    return list
  }
  // Focus Mode: only show tertiaries if activeSecondaryId is active!
  if (activeSecondaryId.value) {
    const sec = FEELINGS_INDEX[activeSecondaryId.value]
    if (!sec) return []
    const coreNode = FEELINGS_HIERARCHY.find(c => c.id === sec.coreId)
    const secNode = coreNode?.secondaries.find(s => s.id === activeSecondaryId.value)
    return secNode?.tertiaries || []
  }
  return []
})

// Verses for selected feeling
const availableVerses = computed(() => {
  if (!selectedFeelingId.value) return []
  return FEELINGS_VERSES[selectedFeelingId.value] || []
})

const selectedVerse = computed(() => {
  if (availableVerses.value.length === 0) return null
  const idx = currentVerseIndex.value % availableVerses.value.length
  return availableVerses.value[idx]
})

// Search filtering
const filteredFeelings = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  const all = Object.values(FEELINGS_INDEX)
  return all.filter(f => f.label.toLowerCase().includes(q) || f.path.some(p => p.toLowerCase().includes(q)))
})

// ==================== HOVER & NAVIGATION HANDLERS ====================
const onWheelMouseEnter = () => {
  if (collapseTimer) {
    clearTimeout(collapseTimer)
    collapseTimer = null
  }
}

const onWheelMouseLeave = () => {
  // Grace period when moving out of the wheel entirely
  collapseTimer = setTimeout(() => {
    hoveredFeelingId.value = null
    if (!selectedFeelingId.value) {
      // Revert to initial clean unexpanded state
      activeCoreId.value = null
      activeSecondaryId.value = null
    } else {
      // Keep selected feeling's branch open
      const sel = FEELINGS_INDEX[selectedFeelingId.value]
      if (sel) {
        activeCoreId.value = sel.coreId
        activeSecondaryId.value = sel.tier >= 2 ? (sel.tier === 2 ? sel.id : sel.parentId) : null
      }
    }
  }, 250)
}

// Touch event state tracking
let touchStartX = 0
let touchStartY = 0
let touchStartTime = 0
let touchStartCoreId = null
let touchStartSecondaryId = null

const onSliceTouchStart = (event, id) => {
  if (event.touches && event.touches[0]) {
    touchStartX = event.touches[0].clientX
    touchStartY = event.touches[0].clientY
    touchStartTime = Date.now()
    // Snapshot the exact active branch state BEFORE this tap!
    touchStartCoreId = activeCoreId.value
    touchStartSecondaryId = activeSecondaryId.value
  }
}

const onSliceTouchEnd = (event, id) => {
  if (!event.changedTouches || !event.changedTouches[0]) return
  const dx = Math.abs(event.changedTouches[0].clientX - touchStartX)
  const dy = Math.abs(event.changedTouches[0].clientY - touchStartY)
  const dt = Date.now() - touchStartTime

  // Check for clean stationary tap gesture (movement < 15px, duration < 500ms)
  if (dx < 15 && dy < 15 && dt < 500) {
    event.preventDefault() // Prevents delayed synthetic click and hover events on iOS/Android
    handleTouchTap(id)
  }
}

const onSliceEnter = (id) => {
  // Ignore synthetic mouseenter events fired by mobile browsers during/after touch taps
  if (Date.now() - touchStartTime < 700) return

  if (collapseTimer) {
    clearTimeout(collapseTimer)
    collapseTimer = null
  }
  hoveredFeelingId.value = id
  const node = FEELINGS_INDEX[id]
  if (!node) return

  if (node.tier === 1) {
    activeCoreId.value = node.id
    // Don't clear secondary if it already belongs to this core
    if (activeSecondaryId.value && FEELINGS_INDEX[activeSecondaryId.value]?.coreId !== node.id) {
      activeSecondaryId.value = null
    }
  } else if (node.tier === 2) {
    activeCoreId.value = node.coreId
    activeSecondaryId.value = node.id
  } else if (node.tier === 3) {
    activeCoreId.value = node.coreId
    activeSecondaryId.value = node.parentId
  }
}

// Mobile touch tap handler
const handleTouchTap = (id) => {
  if (!id || !FEELINGS_INDEX[id]) return
  const node = FEELINGS_INDEX[id]

  // Full Wheel Mode: everything is already visible, select directly
  if (viewMode.value === 'full') {
    selectFeeling(id)
    return
  }

  // Tier 3 (Outer Layer): 1 touch always immediately selects and displays verse!
  if (node.tier === 3) {
    activeCoreId.value = node.coreId
    activeSecondaryId.value = node.parentId
    selectFeeling(id)
    return
  }

  // Tier 2 (Middle Layer / Secondary):
  // 2nd tap: If this secondary was ALREADY the active secondary at touch touchdown, select it!
  if (node.tier === 2) {
    if (touchStartSecondaryId === node.id) {
      selectFeeling(id)
    } else {
      // 1st touch: strictly expand its tertiaries
      activeCoreId.value = node.coreId
      activeSecondaryId.value = node.id
      hoveredFeelingId.value = node.id
    }
    return
  }

  // Tier 1 (Inner Layer / Core):
  // 2nd tap: If this core was ALREADY the active core with NO secondary active, select it!
  if (node.tier === 1) {
    if (touchStartCoreId === node.id && !touchStartSecondaryId) {
      selectFeeling(id)
    } else {
      // 1st touch (or switching from another core / drill-down):
      // Strictly expand this core's secondaries, NEVER select it!
      activeCoreId.value = node.id
      activeSecondaryId.value = null
      hoveredFeelingId.value = node.id
    }
    return
  }
}

// Desktop mouse click handler for slices
const handleSliceClick = (id) => {
  // If a touch interaction just occurred, touch handler already processed it
  if (Date.now() - touchStartTime < 700) return
  if (!id || !FEELINGS_INDEX[id]) return

  const node = FEELINGS_INDEX[id]
  if (viewMode.value === 'full' || node.tier === 3) {
    selectFeeling(id)
    return
  }

  // On desktop, mouse hover already expanded the slice, so click selects it
  selectFeeling(id)
}

const selectFeeling = (id) => {
  if (!id || !FEELINGS_INDEX[id]) return
  const node = FEELINGS_INDEX[id]
  selectedFeelingId.value = id
  currentVerseIndex.value = 0

  activeCoreId.value = node.coreId
  if (node.tier === 2) {
    activeSecondaryId.value = node.id
  } else if (node.tier === 3) {
    activeSecondaryId.value = node.parentId
  }

  searchQuery.value = ''
  searchFocused.value = false

  nextTick(() => {
    if (verseCardRef.value) {
      verseCardRef.value.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  })
}

const resetSelection = () => {
  hoveredFeelingId.value = null
  selectedFeelingId.value = null
  activeCoreId.value = null
  activeSecondaryId.value = null
  currentVerseIndex.value = 0
}

const setMode = (mode) => {
  viewMode.value = mode
  if (mode === 'focus' && !selectedFeelingId.value) {
    activeCoreId.value = null
    activeSecondaryId.value = null
  }
}

const cycleNextVerse = () => {
  if (availableVerses.value.length > 1) {
    currentVerseIndex.value = (currentVerseIndex.value + 1) % availableVerses.value.length
  }
}

const getCleanVerseRef = (refStr) => {
  if (!refStr) return ''
  return refStr.replace(/\s*\(?(?:NIV|KJV|ESV|NLT|NKJV|CSB|NASB|AMP|NET|WEB|ASV|BBE|NIV2011|NIV1984)\)?\s*$/i, '').trim()
}

const copyVerseToClipboard = async () => {
  if (!selectedVerse.value) return
  const textToCopy = `"${selectedVerse.value.text}" — ${selectedVerse.value.ref}`
  try {
    await navigator.clipboard.writeText(textToCopy)
    copiedRecently.value = true
    setTimeout(() => {
      copiedRecently.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy verse:', err)
  }
}

const handleSearchBlur = () => {
  setTimeout(() => {
    searchFocused.value = false
  }, 250)
}

// ==================== SVG ARC & TEXT HELPERS ====================
const describeArc = (innerR, outerR, startAngle, endAngle, gap = 0.8) => {
  const s = startAngle + gap / 2
  const e = endAngle - gap / 2
  if (e <= s) return ''
  const toRad = deg => ((deg - 90) * Math.PI) / 180
  const sRad = toRad(s)
  const eRad = toRad(e)

  const x1 = (outerR * Math.cos(sRad)).toFixed(2)
  const y1 = (outerR * Math.sin(sRad)).toFixed(2)
  const x2 = (outerR * Math.cos(eRad)).toFixed(2)
  const y2 = (outerR * Math.sin(eRad)).toFixed(2)

  const x3 = (innerR * Math.cos(eRad)).toFixed(2)
  const y3 = (innerR * Math.sin(eRad)).toFixed(2)
  const x4 = (innerR * Math.cos(sRad)).toFixed(2)
  const y4 = (innerR * Math.sin(sRad)).toFixed(2)

  const largeArc = (e - s) > 180 ? 1 : 0
  return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`
}

const getRadialCoords = (startAngle, endAngle, innerR, outerR) => {
  const midAngle = (startAngle + endAngle) / 2
  const midR = (innerR + outerR) / 2
  const toRad = deg => ((deg - 90) * Math.PI) / 180
  const rad = toRad(midAngle)
  const x = Number((midR * Math.cos(rad)).toFixed(2))
  const y = Number((midR * Math.sin(rad)).toFixed(2))

  // Rotate text to follow spoke, flipping when on left half so text is upright
  let rot = midAngle - 90
  if (midAngle >= 180) {
    rot = midAngle + 90
  }
  return { x, y, rot: rot.toFixed(1) }
}

const getTangentialTransform = (startAngle, endAngle, innerR, outerR) => {
  const midAngle = (startAngle + endAngle) / 2
  const midR = (innerR + outerR) / 2
  const shouldFlip = midAngle > 90 && midAngle < 270
  return `rotate(${midAngle.toFixed(1)}) translate(0, -${midR.toFixed(1)}) rotate(${shouldFlip ? 180 : 0})`
}
</script>

<style scoped>
/* ==================== PAGE LAYOUT ==================== */
.feelings-view {
  min-height: 100vh;
  padding-bottom: 5rem;
}

.page-header {
  text-align: center;
  padding: 3.5rem 1.5rem 1.75rem;
  max-width: 840px;
  margin: 0 auto;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 1.25rem;
  box-shadow: var(--shadow-xs);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-color);
}

.page-title {
  font-family: var(--heading-font);
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.75rem;
  letter-spacing: -0.6px;
  line-height: 1.2;
}

.page-subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 auto 2rem;
  max-width: 680px;
}

/* ==================== CONTROLS BAR ==================== */
.wheel-controls-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1rem;
}

.mode-toggle-group {
  display: inline-flex;
  background: #f0f0f0;
  padding: 3px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-color);
}

.toggle-btn {
  background: transparent;
  border: none;
  padding: 0.5rem 1.1rem;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-light);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.toggle-btn.active {
  background: var(--card-bg);
  color: var(--text-main);
  box-shadow: var(--shadow-sm);
}

.toggle-btn:hover:not(.active) {
  color: var(--text-main);
}

/* ==================== SEARCH BAR ==================== */
.search-box-wrapper {
  position: relative;
  width: 100%;
  max-width: 380px;
}

.search-input-container {
  display: flex;
  align-items: center;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  padding: 0.45rem 1rem;
  box-shadow: var(--shadow-xs);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.search-input-container:focus-within {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.search-icon {
  font-size: 0.9rem;
  margin-right: 0.5rem;
  opacity: 0.6;
}

.feeling-search-input {
  border: none;
  background: transparent;
  font-family: var(--body-font);
  font-size: 0.9rem;
  color: var(--text-main);
  outline: none;
  width: 100%;
}

.feeling-search-input::placeholder {
  color: var(--text-light);
  opacity: 0.8;
}

.search-clear-btn {
  background: none;
  border: none;
  font-size: 0.85rem;
  color: var(--text-light);
  cursor: pointer;
  padding: 0 0.25rem;
}

.search-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  max-height: 320px;
  overflow-y: auto;
  z-index: 100;
  text-align: left;
}

.search-dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.search-dropdown-item:last-child {
  border-bottom: none;
}

.search-dropdown-item:hover {
  background: var(--bg-subtle);
}

.item-color-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.item-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.item-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-main);
}

.item-path {
  font-size: 0.78rem;
  color: var(--text-light);
}

.item-tier-badge {
  font-size: 0.72rem;
  background: #f0f0f0;
  color: var(--text-light);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-full);
}

/* ==================== BREADCRUMB BAR ==================== */
.breadcrumb-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.5rem auto 1.25rem;
  padding: 0.6rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  max-width: fit-content;
  box-shadow: var(--shadow-xs);
}

.breadcrumb-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-light);
}

.breadcrumb-trail {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.breadcrumb-chip {
  border: 1px solid transparent;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.breadcrumb-chip:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-xs);
}

.breadcrumb-separator {
  color: var(--text-light);
  font-weight: bold;
  font-size: 0.85rem;
}

.reset-selection-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-light);
  border-radius: var(--radius-full);
  padding: 0.25rem 0.65rem;
  font-size: 0.8rem;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: all var(--transition-fast);
}

.reset-selection-btn:hover {
  color: var(--text-main);
  border-color: var(--text-main);
}

/* ==================== WHEEL STAGE ==================== */
.wheel-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto 2.5rem;
  position: relative;
  width: 100%;
}

.wheel-svg-wrapper {
  width: 100%;
  max-width: 620px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  touch-action: manipulation;
}

.feelings-wheel-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* Slice Animations & Styles */
.wheel-slice {
  cursor: pointer;
  transition: opacity 0.25s ease, filter 0.25s ease;
}

.slice-path {
  stroke: #ffffff;
  stroke-width: 1.5;
  transition: fill 0.2s ease, filter 0.2s ease, transform 0.2s ease;
}

.slice-hovered .slice-path,
.slice-active .slice-path {
  filter: brightness(1.1) drop-shadow(0 2px 6px rgba(0,0,0,0.2));
  stroke: #ffffff;
  stroke-width: 2.5;
}

.slice-label {
  font-family: var(--heading-font);
  pointer-events: none;
  font-weight: 600;
  fill: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  transition: font-size 0.2s ease;
}

.label-core {
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.label-secondary {
  font-size: 11px;
  font-weight: 600;
}

.label-tertiary {
  font-size: 9.2px;
  font-weight: 500;
}

/* Center Hub Styling */
.wheel-center-hub {
  transition: transform var(--transition-fast);
}

.wheel-center-hub:hover {
  transform: scale(1.02);
}

.hub-circle {
  fill: #ffffff;
  stroke: #e5e5e5;
  stroke-width: 2;
}

.hub-peace-icon {
  font-size: 20px;
  text-anchor: middle;
}

.hub-default-title {
  font-family: var(--heading-font);
  font-size: 12.5px;
  font-weight: 700;
  fill: var(--text-main);
  text-anchor: middle;
}

.hub-default-subtitle {
  font-family: var(--heading-font);
  font-size: 12.5px;
  font-weight: 700;
  fill: var(--text-main);
  text-anchor: middle;
}

.hub-default-hint {
  font-family: var(--body-font);
  font-size: 9.5px;
  font-weight: 500;
  fill: var(--text-light);
  text-anchor: middle;
}

.hub-eyebrow {
  font-family: var(--body-font);
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
  fill: var(--text-light);
  text-anchor: middle;
}

.hub-feeling-name {
  font-family: var(--heading-font);
  font-size: 15px;
  font-weight: 800;
  text-anchor: middle;
  letter-spacing: -0.3px;
}

.hub-action-hint {
  font-family: var(--body-font);
  font-size: 9px;
  font-weight: 600;
  fill: var(--text-light);
  text-anchor: middle;
}

.wheel-hint-text {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: 1.5rem;
  text-align: center;
  max-width: 500px;
  line-height: 1.5;
}

.hint-bullet {
  margin-right: 0.35rem;
}

/* ==================== DYNAMIC VERSE DISPLAY BOX ==================== */
.verse-display-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-left-width: 6px;
  border-radius: var(--radius-lg);
  padding: 3rem 2.5rem;
  margin: 2.5rem auto 3.5rem;
  max-width: 800px;
  text-align: center;
  scroll-margin-top: 4rem;
  transition: all var(--transition-base);
}

.verse-welcome-card {
  background: var(--card-bg);
  border: 1px dashed var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2.75rem 2rem;
  margin: 2.5rem auto 3.5rem;
  max-width: 800px;
  text-align: center;
}

.welcome-icon {
  font-size: 2.25rem;
  display: block;
  margin-bottom: 0.75rem;
}

.welcome-title {
  font-family: var(--heading-font);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.5rem;
}

.welcome-text {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 580px;
  margin: 0 auto;
}

.verse-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.feeling-badge-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: -0.2px;
}

.verse-counter {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-light);
}

.verse-card-headline {
  font-family: var(--heading-font);
  font-size: 1.45rem;
  font-weight: 700;
  margin: 0 0 1.75rem;
  letter-spacing: -0.3px;
  line-height: 1.3;
}

.verse-quote {
  font-family: var(--scripture-font);
  font-size: 1.5rem;
  font-style: italic;
  color: var(--text-main);
  line-height: 1.85;
  max-width: 680px;
  margin: 0 auto 1.5rem;
  padding: 0;
  border-left: none;
}

.verse-citation {
  font-family: var(--heading-font);
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 2.25rem;
  letter-spacing: -0.2px;
}

.verse-actions-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.35rem;
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-fast);
  border: 1px solid transparent;
}

.next-verse-btn {
  color: #ffffff;
  border: none;
  box-shadow: var(--shadow-sm);
}

.next-verse-btn:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.copy-verse-btn {
  background: var(--bg-subtle);
  border-color: var(--border-color);
  color: var(--text-main);
}

.copy-verse-btn:hover {
  background: #eaeaea;
  transform: translateY(-1px);
}

.practice-verse-link {
  background: #ffffff;
  border-color: var(--border-color);
  color: var(--accent-color);
}

.practice-verse-link:hover {
  border-color: var(--accent-color);
  background: #f8fafc;
  transform: translateY(-1px);
}

/* ==================== BROWSE CATEGORIES SECTION ==================== */
.browse-categories-section {
  max-width: 800px;
  margin: 3.5rem auto 1rem;
}

.browse-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.75rem;
  cursor: pointer;
  transition: background var(--transition-fast);
  margin-bottom: 1.5rem;
}

.browse-header:hover {
  background: var(--bg-subtle);
}

.browse-title {
  font-family: var(--heading-font);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: var(--text-main);
}

.browse-subtitle {
  font-size: 0.85rem;
  color: var(--text-light);
}

.browse-toggle-btn {
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  padding: 0.4rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-main);
  cursor: pointer;
}

.category-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .category-cards-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.core-category-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-top: 4px solid;
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-xs);
}

.core-card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
}

.core-indicator-badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.core-card-title {
  font-family: var(--heading-font);
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
  color: var(--text-main);
}

.core-select-chip {
  border: none;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: opacity var(--transition-fast);
}

.core-select-chip:hover {
  opacity: 0.85;
}

.secondaries-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.secondary-group-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.secondary-name-btn {
  background: none;
  border: none;
  text-align: left;
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--text-main);
  cursor: pointer;
  padding: 0.2rem 0;
  display: inline-block;
  transition: color var(--transition-fast);
}

.secondary-name-btn:hover,
.secondary-name-btn.btn-selected {
  color: var(--accent-color);
  text-decoration: underline;
}

.tertiary-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tertiary-tag-btn {
  background: #f4f4f5;
  border: 1px solid #e4e4e7;
  color: var(--text-main);
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tertiary-tag-btn:hover {
  background: var(--text-main);
  color: #ffffff;
  border-color: var(--text-main);
}

.tertiary-tag-btn.btn-selected {
  background: var(--accent-color);
  color: #ffffff;
  border-color: var(--accent-color);
}

/* ==================== MOBILE RESPONSIVE ==================== */
@media (max-width: 640px) {
  .page-header {
    padding: 2.5rem 1rem 1.25rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .wheel-controls-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  .mode-toggle-group {
    width: 100%;
    justify-content: center;
  }

  .toggle-btn {
    flex: 1;
    text-align: center;
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
  }

  .search-box-wrapper {
    max-width: 100%;
  }

  .wheel-stage {
    margin: 0.5rem auto 1.5rem;
  }

  .wheel-svg-wrapper {
    max-width: 100%;
  }

  .breadcrumb-container {
    width: 100%;
    max-width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }

  .verse-display-card {
    padding: 2rem 1.25rem;
    margin: 1.5rem auto 2.5rem;
  }

  .verse-card-headline {
    font-size: 1.2rem;
  }

  .verse-quote {
    font-size: 1.25rem;
    line-height: 1.7;
  }

  .verse-actions-bar {
    flex-direction: column;
    width: 100%;
  }

  .action-btn {
    width: 100%;
    min-height: 44px; /* Accessible touch target */
  }

  .browse-header {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .browse-toggle-btn {
    width: 100%;
    text-align: center;
    min-height: 40px;
  }
}
</style>
