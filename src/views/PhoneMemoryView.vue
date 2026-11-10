<template>
  <div class="phone-memory-app">
    <!-- Top Mobile App Bar -->
    <header class="app-bar">
      <div class="app-bar-content">
        <div class="brand-zone">
          <svg class="brand-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
          <div class="brand-text">
            <span class="app-title">Scripture Memory</span>
            <span class="active-verse-tag" @click="openVerseSheet">
              {{ currentRef || 'Select Verse' }}
              <span v-if="inputMode === 'translation' && selectedTranslationAbbr" class="translation-pill">
                {{ selectedTranslationAbbr }}
              </span>
            </span>
          </div>
        </div>
        <button
          type="button"
          class="change-verse-btn"
          @click="openVerseSheet"
          aria-label="Change verse"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span>Change</span>
        </button>
      </div>

      <!-- Mode Selector Tabs (Thumb Horizontal Scroll) -->
      <nav class="mode-nav" aria-label="Memory modes">
        <div class="mode-nav-track">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            type="button"
            class="mode-nav-btn"
            :class="{ 'is-active': currentTab === tab.id }"
            @click="switchTab(tab.id)"
          >
            {{ tab.label }}
          </button>
        </div>
      </nav>
    </header>

    <!-- Main Content Stage -->
    <main class="app-stage">
      <!-- Loading State -->
      <div v-if="isLoading" class="loading-container fade-in">
        <div class="spinner"></div>
        <p class="loading-text">Loading scripture...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="errorMessage && !hasLoadedVerse" class="error-card fade-in">
        <p class="error-msg">{{ errorMessage }}</p>
        <button type="button" class="btn-primary mt-3" @click="openVerseSheet">
          Pick Another Verse
        </button>
      </div>

      <!-- Practice Dashboard -->
      <div v-else-if="hasLoadedVerse" class="practice-card">
        <!-- Verse Reference Subhead -->
        <div class="practice-meta">
          <h2 class="practice-ref">{{ currentRef }}</h2>
          <span class="practice-trans">
            {{ inputMode === 'translation' ? selectedTranslationLabel : 'Custom Text' }}
          </span>
        </div>

        <!-- 1. Vanish Mode -->
        <section v-show="currentTab === 'vanish'" class="tab-pane fade-in" aria-label="Vanish mode">
          <div class="toolbar-phone">
            <span class="toolbar-label">Hidden:</span>
            <div class="pill-group">
              <button
                v-for="p in [0, 0.25, 0.50, 0.75, 1]"
                :key="p"
                type="button"
                class="pill-btn"
                :class="{ 'is-active': vanishPercent === p }"
                @click="initVanish(p)"
              >
                {{ Math.round(p * 100) }}%
              </button>
            </div>
          </div>
          <p class="mode-tip">Tap any hidden word to reveal it.</p>
          <div class="verse-body">
            <span
              v-for="(item, idx) in vanishWords"
              :key="idx"
              class="vanish-word"
              :class="{ 'is-hidden': !item.revealed }"
              @click="item.revealed = true"
            >
              {{ item.revealed ? item.word : item.blanked }}{{ ' ' }}
            </span>
          </div>
        </section>

        <!-- 2. Fill in the Blanks Mode -->
        <section v-show="currentTab === 'fill'" class="tab-pane fade-in" aria-label="Fill in the blanks mode">
          <div class="toolbar-phone">
            <span class="toolbar-label">Blanks:</span>
            <div class="pill-group">
              <button
                v-for="p in [0.25, 0.50, 0.75, 1]"
                :key="p"
                type="button"
                class="pill-btn"
                :class="{ 'is-active': fillPercent === p }"
                @click="initFill(p)"
              >
                {{ Math.round(p * 100) }}%
              </button>
            </div>
          </div>
          <p class="mode-tip">Fill in the blanks, then tap Check Answers.</p>
          <div class="verse-body">
            <template v-for="(item, idx) in fillWords" :key="idx">
              <template v-if="item.isBlank">
                {{ item.prefix }}<input
                  v-model="item.userVal"
                  type="text"
                  :class="['fill-input-phone', item.statusClass]"
                  :style="{ width: Math.max(3.5, item.width) + 'ch' }"
                  autocapitalize="none"
                  autocomplete="off"
                  autocorrect="off"
                  spellcheck="false"
                  @input="item.statusClass = ''"
                />{{ item.suffix }}{{ ' ' }}
              </template>
              <template v-else>
                {{ item.word }}{{ ' ' }}
              </template>
            </template>
          </div>
          <div class="action-footer">
            <button type="button" class="btn-primary" @click="checkFill">
              Check Answers
            </button>
            <p
              v-if="fillFeedback"
              :class="['feedback-note', fillIsSuccess ? 'note-success' : 'note-error']"
            >
              {{ fillFeedback }}
            </p>
          </div>
        </section>

        <!-- 3. Scramble Mode -->
        <section v-show="currentTab === 'scramble'" class="tab-pane fade-in" aria-label="Scramble mode">
          <p class="mode-tip">Tap the words in the correct sequential order.</p>
          <div class="scramble-target-box">
            <template v-for="(word, idx) in scrambleTarget" :key="idx">
              <span v-if="idx < scrambleExpectedIndex" class="scramble-solved-word fade-in">
                {{ word }}
              </span>
              <span v-else class="scramble-placeholder"></span>
            </template>
          </div>

          <div class="scramble-bank-phone">
            <button
              v-for="(item, idx) in scrambleBank"
              :key="idx"
              type="button"
              class="scramble-chip"
              :class="{
                'chip-used': item.used,
                'chip-error shake': item.error
              }"
              :disabled="item.used"
              @click="guessScramble(item)"
            >
              {{ item.word }}
            </button>
          </div>

          <div class="action-footer mt-4">
            <button type="button" class="btn-subtle" @click="initScramble">
              ↻ Reset Scramble
            </button>
          </div>
        </section>

        <!-- 4. First Letter Mode -->
        <section v-show="currentTab === 'first-letter'" class="tab-pane fade-in" aria-label="First letter mode">
          <p class="mode-tip">Read aloud with first-letter hints. Tap a word to peek!</p>
          <div class="verse-body tracking-relaxed">
            <template v-for="(item, idx) in firstLetterWords" :key="idx">
              <span
                class="first-letter-chip"
                :class="{ 'is-revealed': item.revealed }"
                @click="toggleFirstLetterReveal(idx)"
              >
                {{ item.revealed ? item.original : item.masked }}
              </span>{{ ' ' }}
            </template>
          </div>
        </section>

        <!-- 5. Type Full Verse Mode -->
        <section v-show="currentTab === 'type'" class="tab-pane fade-in" aria-label="Type full verse mode">
          <div class="type-controls-phone">
            <button type="button" class="btn-subtle-sm" @click="toggleTypeModePhone">
              {{ typeMode === 'show' ? 'Hide Verse (Memory)' : 'Show Verse (Learn)' }}
            </button>
            <button
              v-if="typedChars.length > 0"
              type="button"
              class="btn-subtle-sm"
              @click="resetTypePhone"
            >
              ↻ Reset
            </button>
          </div>
          <p class="mode-tip">Tap the box and type on your keyboard. Punctuation is skipped!</p>

          <!-- Inline Touch-Focused Typing Box -->
          <div
            ref="phoneTypeBoxRef"
            class="type-box-phone"
            tabindex="0"
            @click="focusPhoneTypeBox"
            @focus="focusPhoneTypeBox"
            @blur="handleTypeBlurPhone"
          >
            <!-- Native invisible input for mobile keyboards -->
            <input
              ref="phoneTypeInputRef"
              type="text"
              class="invisible-input"
              autocapitalize="none"
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
              inputmode="text"
              aria-label="Type verse text"
              :disabled="typeCompleted"
              @input="handleTypeInput"
              @keydown="handleTypeKeydown"
              @focus="typeBoxFocused = true"
              @blur="typeBoxFocused = false"
            />
            <span
              v-for="(charObj, idx) in typeDisplayCharacters"
              :key="idx"
              :class="charObj.cssClass"
            >{{ charObj.char }}</span>
            <span v-if="!typeCompleted && typeBoxFocused" class="cursor-blink">|</span>
            <div
              v-if="!typeBoxFocused && !typeCompleted && typedChars.length === 0"
              class="type-hint-overlay"
              @click.stop="focusPhoneTypeBox"
            >
              Tap here to open keyboard and start typing…
            </div>
          </div>

          <div v-if="typeCompleted" class="victory-banner fade-in">
            <span class="victory-icon">🎉</span>
            <p class="victory-text">Perfect! You typed the verse from memory.</p>
          </div>
        </section>

        <!-- 6. Type First Letters Mode -->
        <section v-show="currentTab === 'type-first'" class="tab-pane fade-in" aria-label="Type first letters mode">
          <div class="type-controls-phone">
            <button
              v-if="!typeFirstCompleted"
              type="button"
              class="btn-subtle-sm hint-btn"
              @click="revealNextWordPhone"
            >
              Show Next Word
            </button>
            <button
              v-if="typeFirstCurrentIndex > 0"
              type="button"
              class="btn-subtle-sm"
              @click="resetTypeFirstPhone"
            >
              ↻ Reset
            </button>
          </div>
          <p class="mode-tip">Type the first letter of each word to reveal it.</p>

          <!-- Inline Touch-Focused Type First Box -->
          <div
            ref="phoneTypeFirstBoxRef"
            class="type-box-phone"
            tabindex="0"
            @click="focusPhoneTypeFirstBox"
            @focus="focusPhoneTypeFirstBox"
            @blur="handleTypeFirstBlurPhone"
          >
            <!-- Native invisible input for mobile keyboards -->
            <input
              ref="phoneTypeFirstInputRef"
              type="text"
              class="invisible-input"
              autocapitalize="none"
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
              inputmode="text"
              aria-label="Type first letters"
              :disabled="typeFirstCompleted"
              @input="handleTypeFirstInput"
              @keydown="handleTypeFirstKeydown"
              @focus="typeFirstBoxFocused = true"
              @blur="typeFirstBoxFocused = false"
            />
            <span
              v-for="(item, idx) in typeFirstWordStates"
              :key="idx"
              :class="[
                'type-first-chip',
                {
                  'chip-correct': item.status === 'correct',
                  'chip-revealed': item.status === 'revealed',
                  'chip-error': item.status === 'error',
                  'chip-pending': item.status === 'pending'
                }
              ]"
            >
              <template v-if="item.status === 'correct' || item.status === 'revealed'">
                {{ item.word }}
              </template>
              <template v-else-if="item.status === 'error'">
                {{ item.errorChar }}
              </template>
            </span>
            <span v-if="!typeFirstCompleted && typeFirstBoxFocused" class="cursor-blink">|</span>
            <div
              v-if="!typeFirstBoxFocused && !typeFirstCompleted && typeFirstCurrentIndex === 0"
              class="type-hint-overlay"
              @click.stop="focusPhoneTypeFirstBox"
            >
              Tap here to open keyboard and start typing…
            </div>
          </div>

          <div v-if="typeFirstCompleted" class="victory-banner fade-in">
            <span class="victory-icon">🎉</span>
            <p class="victory-text">Perfect! You completed the verse!</p>
          </div>
        </section>
      </div>
    </main>

    <!-- Bottom Sheet / Drawer for Changing Verse -->
    <teleport to="body">
      <div
        v-if="isSheetOpen"
        class="sheet-backdrop fade-in"
        @click.self="closeVerseSheet"
      >
        <div class="sheet-drawer" role="dialog" aria-modal="true" aria-label="Change Verse">
          <div class="sheet-handle-bar" @click="closeVerseSheet">
            <div class="sheet-handle"></div>
          </div>

          <div class="sheet-header">
            <h3 class="sheet-title">Choose Scripture</h3>
            <button
              type="button"
              class="sheet-close-btn"
              @click="closeVerseSheet"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div class="sheet-body">
            <!-- Source Selector: Translation vs Custom -->
            <div class="sheet-segmented">
              <button
                type="button"
                class="sheet-segment-btn"
                :class="{ 'is-active': inputMode === 'translation' }"
                @click="inputMode = 'translation'"
              >
                Bible Translation
              </button>
              <button
                type="button"
                class="sheet-segment-btn"
                :class="{ 'is-active': inputMode === 'custom' }"
                @click="inputMode = 'custom'"
              >
                Paste Custom Text
              </button>
            </div>

            <!-- Quick Popular Verses Chips -->
            <div v-if="inputMode === 'translation'" class="quick-chips-section">
              <span class="quick-chips-label">Popular Verses:</span>
              <div class="quick-chips-scroll">
                <button
                  v-for="chip in popularVerses"
                  :key="chip"
                  type="button"
                  class="quick-verse-chip"
                  @click="selectQuickVerse(chip)"
                >
                  {{ chip }}
                </button>
              </div>
            </div>

            <!-- Translation Form -->
            <form v-if="inputMode === 'translation'" @submit.prevent="submitVerseSheet">
              <div class="sheet-field">
                <label for="phone-ref-input" class="field-label">Reference</label>
                <input
                  id="phone-ref-input"
                  v-model="referenceInput"
                  type="text"
                  class="sheet-input"
                  placeholder="e.g. John 3:16, Romans 8:28-30, Psalm 23"
                  autocapitalize="sentences"
                  autocomplete="off"
                />
              </div>

              <div class="sheet-field">
                <label for="phone-trans-select" class="field-label">Translation</label>
                <select
                  id="phone-trans-select"
                  v-model="selectedTranslation"
                  class="sheet-select"
                >
                  <option
                    v-for="trans in TRANSLATIONS"
                    :key="trans.id"
                    :value="trans.id"
                  >
                    {{ trans.label }}
                  </option>
                </select>
              </div>

              <div v-if="sheetError" class="sheet-error-banner">
                {{ sheetError }}
              </div>

              <button
                type="submit"
                class="btn-primary sheet-submit-btn"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="btn-spinner"></span>
                <span>{{ isLoading ? 'Loading…' : 'Load Verse' }}</span>
              </button>
            </form>

            <!-- Custom Text Form -->
            <form v-else @submit.prevent="submitVerseSheet">
              <div class="sheet-field">
                <label for="phone-custom-title" class="field-label">Reference / Title</label>
                <input
                  id="phone-custom-title"
                  v-model="referenceInput"
                  type="text"
                  class="sheet-input"
                  placeholder="e.g. My Favorite Quote, John 3:16"
                  autocomplete="off"
                />
              </div>

              <div class="sheet-field">
                <label for="phone-custom-textarea" class="field-label">Scripture Text</label>
                <textarea
                  id="phone-custom-textarea"
                  v-model="customText"
                  rows="4"
                  class="sheet-textarea"
                  placeholder="Paste or type any scripture or text here…"
                ></textarea>
              </div>

              <div v-if="sheetError" class="sheet-error-banner">
                {{ sheetError }}
              </div>

              <button
                type="submit"
                class="btn-primary sheet-submit-btn"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="btn-spinner"></span>
                <span>{{ isLoading ? 'Loading…' : 'Use Custom Text' }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { useScriptureMemory, TRANSLATIONS } from '@/composables/useScriptureMemory'

const {
  inputMode,
  referenceInput,
  selectedTranslation,
  selectedTranslationLabel,
  selectedTranslationAbbr,
  customText,
  isLoading,
  errorMessage,
  hasLoadedVerse,
  currentVerse,
  currentRef,
  currentTab,
  fetchVerse,

  // Mode 1: Vanish
  vanishPercent,
  vanishWords,
  initVanish,

  // Mode 2: Fill
  fillPercent,
  fillWords,
  fillFeedback,
  fillIsSuccess,
  initFill,
  checkFill,

  // Mode 3: Scramble
  scrambleTarget,
  scrambleBank,
  scrambleExpectedIndex,
  initScramble,
  guessScramble,

  // Mode 4: First Letter
  firstLetterWords,
  initFirstLetter,
  toggleFirstLetterReveal,

  // Mode 5: Type Full
  typeMode,
  typedChars,
  typeBoxFocused,
  typeDisplayCharacters,
  typeCompleted,
  initType,
  toggleTypeMode,
  handleTypeKeydown,
  handleTypeInput,

  // Mode 6: Type First Letters
  typeFirstBoxFocused,
  typeFirstCurrentIndex,
  typeFirstWordStates,
  typeFirstCompleted,
  initTypeFirst,
  handleTypeFirstKeydown,
  handleTypeFirstInput,
  revealCurrentWord
} = useScriptureMemory()

// Mode Navigation Tabs
const tabs = [
  { id: 'vanish', label: 'Vanish' },
  { id: 'fill', label: 'Blanks' },
  { id: 'scramble', label: 'Scramble' },
  { id: 'first-letter', label: '1st Letter' },
  { id: 'type', label: 'Type Full' },
  { id: 'type-first', label: 'Type 1st' }
]

// Quick Popular Verses for 1-Tap Loading on Phone
const popularVerses = [
  'John 3:16',
  'Philippians 4:6-7',
  'Romans 8:28',
  'Psalm 23:1-3',
  'Proverbs 3:5-6',
  'Matthew 6:33',
  'Joshua 1:9',
  '2 Timothy 1:7'
]

// Bottom Sheet State
const isSheetOpen = ref(false)
const sheetError = ref('')

const openVerseSheet = () => {
  sheetError.value = ''
  isSheetOpen.value = true
}

const closeVerseSheet = () => {
  isSheetOpen.value = false
}

const selectQuickVerse = async (refText) => {
  referenceInput.value = refText
  await submitVerseSheet()
}

const submitVerseSheet = async () => {
  sheetError.value = ''
  const success = await fetchVerse()
  if (success) {
    saveToStorage()
    closeVerseSheet()
  } else {
    sheetError.value = errorMessage.value
  }
}

// Local Storage Persistence
const STORAGE_KEY = 'biblestation_phone_memory_v1'

const saveToStorage = () => {
  try {
    const data = {
      inputMode: inputMode.value,
      referenceInput: referenceInput.value,
      selectedTranslation: selectedTranslation.value,
      customText: customText.value
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    // Ignore storage errors in private mode
  }
}

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      if (data.inputMode) inputMode.value = data.inputMode
      if (data.referenceInput) referenceInput.value = data.referenceInput
      if (data.selectedTranslation) selectedTranslation.value = data.selectedTranslation
      if (data.customText) customText.value = data.customText
    }
  } catch (e) {
    // Ignore storage errors
  }
}

// Typing References
const phoneTypeBoxRef = ref(null)
const phoneTypeInputRef = ref(null)
const phoneTypeFirstBoxRef = ref(null)
const phoneTypeFirstInputRef = ref(null)

const focusPhoneTypeBox = () => {
  typeBoxFocused.value = true
  phoneTypeInputRef.value?.focus()
}

const handleTypeBlurPhone = (e) => {
  if (e.relatedTarget !== phoneTypeInputRef.value && e.relatedTarget !== phoneTypeBoxRef.value) {
    typeBoxFocused.value = false
  }
}

const toggleTypeModePhone = () => {
  toggleTypeMode()
  nextTick(() => {
    focusPhoneTypeBox()
  })
}

const resetTypePhone = () => {
  initType()
  nextTick(() => {
    focusPhoneTypeBox()
  })
}

const focusPhoneTypeFirstBox = () => {
  typeFirstBoxFocused.value = true
  phoneTypeFirstInputRef.value?.focus()
}

const handleTypeFirstBlurPhone = (e) => {
  if (e.relatedTarget !== phoneTypeFirstInputRef.value && e.relatedTarget !== phoneTypeFirstBoxRef.value) {
    typeFirstBoxFocused.value = false
  }
}

const revealNextWordPhone = () => {
  revealCurrentWord()
  nextTick(() => {
    focusPhoneTypeFirstBox()
  })
}

const resetTypeFirstPhone = () => {
  initTypeFirst()
  nextTick(() => {
    focusPhoneTypeFirstBox()
  })
}

const switchTab = (tabId) => {
  currentTab.value = tabId
  if (tabId === 'type') {
    initType()
    nextTick(() => {
      focusPhoneTypeBox()
    })
  } else if (tabId === 'type-first') {
    initTypeFirst()
    nextTick(() => {
      focusPhoneTypeFirstBox()
    })
  }
}

// Auto-blur invisible input on completion so celebration is visible
watch(typeCompleted, (isComplete) => {
  if (isComplete) {
    phoneTypeInputRef.value?.blur()
    typeBoxFocused.value = false
  }
})

watch(typeFirstCompleted, (isComplete) => {
  if (isComplete) {
    phoneTypeFirstInputRef.value?.blur()
    typeFirstBoxFocused.value = false
  }
})

// Initialize on mount
onMounted(async () => {
  loadFromStorage()
  await fetchVerse()
})
</script>

<style scoped>
/* Mobile App Root Container */
.phone-memory-app {
  min-height: 100dvh;
  background-color: var(--bg-color, #f7f5f0);
  color: var(--text-main, #2c2c2c);
  display: flex;
  flex-direction: column;
  padding-bottom: env(safe-area-inset-bottom, 16px);
  font-family: var(--body-font, 'Inter', sans-serif);
}

/* App Bar & Sticky Header */
.app-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(247, 245, 240, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color, #e8e4de);
  padding-top: env(safe-area-inset-top, 0px);
}

.app-bar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem 0.5rem;
}

.brand-zone {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
}

.brand-icon {
  stroke: var(--accent-color, #3d6b6e);
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.app-title {
  font-family: var(--heading-font, 'Playfair Display', serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--accent-color, #3d6b6e);
  letter-spacing: -0.01em;
  line-height: 1.15;
}

.active-verse-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: var(--text-light, #6b6560);
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.translation-pill {
  background-color: var(--disclaimer-bg, #f0ece4);
  color: var(--accent-color, #3d6b6e);
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.1rem 0.35rem;
  border-radius: var(--radius-sm, 6px);
  letter-spacing: 0.02em;
}

.change-verse-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  background-color: var(--card-bg, #ffffff);
  border: 1px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-full, 9999px);
  color: var(--accent-color, #3d6b6e);
  font-size: 0.82rem;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.change-verse-btn:active {
  transform: scale(0.96);
  background-color: var(--disclaimer-bg, #f0ece4);
}

/* Thumb Mode Switcher (Horizontal Scrollable Strip) */
.mode-nav {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0.35rem 0.75rem 0.65rem;
}

.mode-nav::-webkit-scrollbar {
  display: none;
}

.mode-nav-track {
  display: flex;
  gap: 0.35rem;
  width: max-content;
}

.mode-nav-btn {
  padding: 0.5rem 0.95rem;
  border-radius: var(--radius-full, 9999px);
  border: none;
  background: transparent;
  color: var(--text-light, #6b6560);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
  min-height: 38px;
}

.mode-nav-btn.is-active {
  background-color: var(--accent-color, #3d6b6e);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(61, 107, 110, 0.25);
}

/* Stage / Viewport */
.app-stage {
  flex: 1;
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
}

/* Loading & Error States */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  gap: 1rem;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(61, 107, 110, 0.2);
  border-top-color: var(--accent-color, #3d6b6e);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: 0.92rem;
  color: var(--text-light, #6b6560);
  font-weight: 500;
}

.error-card {
  background: #fff;
  border: 1px solid #fee2e2;
  border-radius: var(--radius-lg, 16px);
  padding: 1.5rem;
  text-align: center;
}

.error-msg {
  color: var(--error-color, #991b1b);
  font-size: 0.95rem;
  line-height: 1.4;
}

/* Practice Card */
.practice-card {
  background: #ffffff;
  border: 1px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-lg, 16px);
  padding: 1.25rem 1rem;
  box-shadow: 0 4px 16px -2px rgba(60, 50, 40, 0.05);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.practice-meta {
  border-bottom: 1px solid var(--border-color, #e8e4de);
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}

.practice-ref {
  font-family: var(--heading-font, 'Playfair Display', serif);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-main, #2c2c2c);
  margin: 0;
  letter-spacing: -0.01em;
}

.practice-trans {
  font-size: 0.76rem;
  color: var(--text-light, #6b6560);
  font-weight: 500;
}

.tab-pane {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Toolbars & Pills */
.toolbar-phone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.65rem;
}

.toolbar-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-light, #6b6560);
}

.pill-group {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.pill-btn {
  padding: 0.35rem 0.65rem;
  border-radius: var(--radius-full, 9999px);
  border: 1px solid var(--border-color, #e8e4de);
  background: var(--bg-color, #f7f5f0);
  color: var(--text-main, #2c2c2c);
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.pill-btn.is-active {
  background-color: var(--accent-color, #3d6b6e);
  border-color: var(--accent-color, #3d6b6e);
  color: #ffffff;
}

.mode-tip {
  font-size: 0.8rem;
  color: var(--text-light, #6b6560);
  margin: 0 0 0.85rem;
  font-style: italic;
}

/* Scripture Display Body */
.verse-body {
  font-family: var(--scripture-font, Georgia, serif);
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-main, #2c2c2c);
  padding: 0.5rem 0;
  flex: 1;
}

.tracking-relaxed {
  letter-spacing: 0.04em;
}

/* Mode 1: Vanish */
.vanish-word {
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  border-radius: 4px;
  padding: 0 2px;
  transition: background-color 0.15s ease;
}

.vanish-word.is-hidden {
  color: var(--text-light, #6b6560);
  background-color: rgba(61, 107, 110, 0.08);
}

.vanish-word:active {
  background-color: rgba(61, 107, 110, 0.18);
}

/* Mode 2: Fill in the Blanks */
.fill-input-phone {
  display: inline-block;
  padding: 0.2rem 0.4rem;
  margin: 0 0.2rem;
  font-family: var(--scripture-font, Georgia, serif);
  font-size: 16px; /* Crucial: 16px prevents iOS browser zoom on focus */
  border: 1.5px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-sm, 6px);
  background: #ffffff;
  color: var(--text-main, #2c2c2c);
  text-align: center;
  transition: all 0.15s ease;
}

.fill-input-phone:focus {
  outline: none;
  border-color: var(--accent-color, #3d6b6e);
  box-shadow: 0 0 0 3px rgba(61, 107, 110, 0.15);
}

.fill-correct {
  border-color: var(--success-color, #166534) !important;
  background-color: var(--success-bg, #dcfce7) !important;
  color: var(--success-color, #166534) !important;
}

.fill-incorrect {
  border-color: var(--error-color, #991b1b) !important;
  background-color: var(--error-bg, #fee2e2) !important;
  color: var(--error-color, #991b1b) !important;
}

/* Mode 3: Scramble */
.scramble-target-box {
  background: var(--bg-color, #f7f5f0);
  border: 1px dashed var(--border-color, #e8e4de);
  border-radius: var(--radius-md, 12px);
  padding: 0.85rem;
  min-height: 80px;
  font-family: var(--scripture-font, Georgia, serif);
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.scramble-solved-word {
  color: var(--text-main, #2c2c2c);
  font-weight: 500;
  margin-right: 0.35rem;
}

.scramble-placeholder {
  display: inline-block;
  width: 24px;
  height: 2px;
  background: #c5bebe;
  vertical-align: middle;
  margin: 0 0.25rem;
}

.scramble-bank-phone {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.scramble-chip {
  padding: 0.55rem 0.95rem;
  background: #ffffff;
  border: 1px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-full, 9999px);
  font-family: var(--scripture-font, Georgia, serif);
  font-size: 1.05rem;
  color: var(--text-main, #2c2c2c);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.15s ease;
  min-height: 42px;
}

.scramble-chip:active {
  transform: scale(0.95);
  background-color: var(--disclaimer-bg, #f0ece4);
}

.chip-used {
  opacity: 0.25;
  pointer-events: none;
  background-color: #f3f3f3;
  border-color: #e0e0e0;
}

.chip-error {
  border-color: var(--error-color, #991b1b) !important;
  background-color: var(--error-bg, #fee2e2) !important;
  color: var(--error-color, #991b1b) !important;
}

/* Mode 4: First Letter */
.first-letter-chip {
  display: inline-block;
  cursor: pointer;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;
  background: var(--disclaimer-bg, #f0ece4);
  border-bottom: 1.5px solid var(--border-color, #e8e4de);
  margin-bottom: 0.25rem;
  user-select: none;
  -webkit-user-select: none;
  transition: all 0.15s ease;
}

.first-letter-chip.is-revealed {
  background: rgba(61, 107, 110, 0.12);
  border-bottom-color: var(--accent-color, #3d6b6e);
  color: var(--accent-color, #3d6b6e);
  font-weight: 600;
}

/* Modes 5 & 6: Type Full & Type First Letters */
.type-controls-phone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.65rem;
}

.type-box-phone {
  position: relative;
  background: var(--bg-color, #f7f5f0);
  border: 1.5px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-md, 12px);
  padding: 1.15rem 1rem;
  min-height: 150px;
  font-family: var(--scripture-font, Georgia, serif);
  font-size: 1.2rem;
  line-height: 1.8;
  cursor: text;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.type-box-phone:focus-within {
  border-color: var(--accent-color, #3d6b6e);
  box-shadow: 0 0 0 3px rgba(61, 107, 110, 0.12);
}

.invisible-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  font-size: 16px;
  z-index: 2;
}

.type-hint-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-light, #6b6560);
  font-family: var(--body-font, 'Inter', sans-serif);
  font-size: 0.9rem;
  text-align: center;
  width: 85%;
  pointer-events: none;
}

.cursor-blink {
  font-weight: bold;
  color: var(--accent-color, #3d6b6e);
  animation: cursorBlink 0.9s infinite;
  margin-left: 1px;
}

@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.type-char-correct {
  color: var(--success-color, #166534);
  font-weight: 600;
}

.type-char-error {
  color: #ffffff;
  background-color: var(--error-color, #991b1b);
  border-radius: 2px;
  padding: 0 1px;
}

.type-char-future {
  color: #a8a29e;
}

.type-char-punct {
  color: var(--text-light, #6b6560);
}

.hidden {
  opacity: 0;
}

/* Type First Chips */
.type-first-chip {
  display: inline-block;
  margin-right: 0.45rem;
  margin-bottom: 0.25rem;
}

.chip-correct {
  color: var(--success-color, #166534);
  font-weight: 600;
}

.chip-revealed {
  color: var(--accent-color, #3d6b6e);
  font-style: italic;
  font-weight: 600;
}

.chip-error {
  color: #ffffff;
  background-color: var(--error-color, #991b1b);
  border-radius: 2px;
  padding: 0 4px;
}

.chip-pending {
  width: 20px;
  height: 2px;
  background: #c5bebe;
  vertical-align: middle;
}

/* Victory Banner */
.victory-banner {
  background: var(--success-bg, #dcfce7);
  border: 1px solid rgba(22, 101, 52, 0.2);
  border-radius: var(--radius-md, 12px);
  padding: 0.85rem 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.victory-icon {
  font-size: 1.5rem;
}

.victory-text {
  margin: 0;
  color: var(--success-color, #166534);
  font-weight: 600;
  font-size: 0.95rem;
}

/* Actions & Buttons */
.action-footer {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  width: 100%;
  padding: 0.85rem 1.25rem;
  background-color: var(--accent-color, #3d6b6e);
  color: #ffffff;
  border: none;
  border-radius: var(--radius-md, 12px);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(61, 107, 110, 0.2);
  transition: all 0.15s ease;
  min-height: 48px;
}

.btn-primary:active {
  transform: scale(0.98);
  opacity: 0.9;
}

.btn-subtle {
  padding: 0.6rem 1.2rem;
  background: transparent;
  color: var(--accent-color, #3d6b6e);
  border: 1px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-full, 9999px);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-subtle-sm {
  padding: 0.35rem 0.75rem;
  background: #ffffff;
  border: 1px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-full, 9999px);
  color: var(--text-light, #6b6560);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-subtle-sm.hint-btn {
  color: var(--accent-color, #3d6b6e);
  border-color: rgba(61, 107, 110, 0.3);
}

.feedback-note {
  font-size: 0.88rem;
  font-weight: 600;
  margin: 0.35rem 0 0;
  text-align: center;
}

.note-success {
  color: var(--success-color, #166534);
}

.note-error {
  color: var(--error-color, #991b1b);
}

/* Bottom Sheet Modal Styles */
.sheet-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
}

.sheet-drawer {
  background: #ffffff;
  width: 100%;
  max-height: 85vh;
  border-radius: 20px 20px 0 0;
  padding: 0.5rem 1.25rem env(safe-area-inset-bottom, 20px);
  display: flex;
  flex-direction: column;
  animation: slideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.sheet-handle-bar {
  display: flex;
  justify-content: center;
  padding: 0.45rem 0 0.85rem;
  cursor: pointer;
}

.sheet-handle {
  width: 36px;
  height: 4px;
  background: var(--border-color, #e8e4de);
  border-radius: 2px;
}

.sheet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.sheet-title {
  margin: 0;
  font-family: var(--heading-font, 'Playfair Display', serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent-color, #3d6b6e);
}

.sheet-close-btn {
  background: transparent;
  border: none;
  font-size: 1.15rem;
  color: var(--text-light, #6b6560);
  cursor: pointer;
  padding: 0.25rem 0.5rem;
}

.sheet-segmented {
  display: flex;
  background: var(--bg-color, #f7f5f0);
  padding: 0.25rem;
  border-radius: var(--radius-md, 12px);
  margin-bottom: 1rem;
}

.sheet-segment-btn {
  flex: 1;
  padding: 0.55rem;
  border: none;
  border-radius: var(--radius-sm, 8px);
  background: transparent;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-light, #6b6560);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sheet-segment-btn.is-active {
  background: #ffffff;
  color: var(--accent-color, #3d6b6e);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.quick-chips-section {
  margin-bottom: 1rem;
}

.quick-chips-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-light, #6b6560);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35rem;
}

.quick-chips-scroll {
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 0.35rem;
}

.quick-chips-scroll::-webkit-scrollbar {
  display: none;
}

.quick-verse-chip {
  padding: 0.4rem 0.75rem;
  background: var(--bg-color, #f7f5f0);
  border: 1px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-full, 9999px);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent-color, #3d6b6e);
  white-space: nowrap;
  cursor: pointer;
}

.sheet-field {
  margin-bottom: 0.85rem;
}

.field-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main, #2c2c2c);
  margin-bottom: 0.3rem;
}

.sheet-input,
.sheet-select,
.sheet-textarea {
  width: 100%;
  padding: 0.7rem 0.85rem;
  font-size: 16px; /* 16px prevents iOS zoom */
  border: 1.5px solid var(--border-color, #e8e4de);
  border-radius: var(--radius-sm, 8px);
  background: #ffffff;
  color: var(--text-main, #2c2c2c);
  box-sizing: border-box;
}

.sheet-input:focus,
.sheet-select:focus,
.sheet-textarea:focus {
  outline: none;
  border-color: var(--accent-color, #3d6b6e);
}

.sheet-error-banner {
  background: var(--error-bg, #fee2e2);
  color: var(--error-color, #991b1b);
  padding: 0.55rem 0.75rem;
  border-radius: var(--radius-sm, 8px);
  font-size: 0.82rem;
  margin-bottom: 0.85rem;
}

.sheet-submit-btn {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Animations */
.fade-in {
  animation: fadeIn 0.25s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

.shake {
  animation: shake 0.4s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
}
</style>
