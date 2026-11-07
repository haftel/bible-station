<template>
  <div class="memory-view">
    <header class="page-header">
      <h1 class="page-title">Scripture Memorizer</h1>
      <p class="page-subtitle">Fetch a verse or paste your own to practice memorization.</p>
    </header>

    <main class="container">
      <!-- Configuration Card -->
      <div class="post">
        <form @submit.prevent="fetchVerse">
          <div class="form-row">
            <div class="form-col">
              <label for="reference-input" class="form-label">Reference (e.g., John 3:16)</label>
              <input
                id="reference-input"
                v-model="referenceInput"
                type="text"
                placeholder="Enter verse reference"
                class="form-control"
              />
            </div>
            <div class="form-col translation-dropdown-container" ref="translationDropdownRef">
              <label id="translation-select-label" class="form-label">Translation</label>
              
              <!-- Dropdown Trigger Button -->
              <button
                type="button"
                id="translation-select"
                class="form-control translation-trigger-btn"
                :class="{ 'is-active': isTranslationDropdownOpen }"
                @click="toggleTranslationDropdown"
                @keydown.down.prevent="openAndFocusSearch"
                aria-haspopup="listbox"
                :aria-expanded="isTranslationDropdownOpen"
                aria-labelledby="translation-select-label"
              >
                <span class="trigger-label">{{ selectedTranslationLabel }}</span>
                <span class="trigger-chevron" aria-hidden="true">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>

              <!-- Dropdown Popover Menu -->
              <div
                v-if="isTranslationDropdownOpen"
                class="translation-dropdown-menu fade-in"
                role="listbox"
                aria-labelledby="translation-select-label"
              >
                <!-- Search Input Field -->
                <div class="translation-search-box">
                  <span class="search-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                  <input
                    ref="translationSearchInputRef"
                    v-model="translationSearchQuery"
                    type="text"
                    class="translation-search-input"
                    placeholder="Search name or code (e.g. NASB, KJV)..."
                    autocomplete="off"
                    @keydown.esc.stop="closeTranslationDropdown"
                    @keydown.down.prevent="navigateOption(1)"
                    @keydown.up.prevent="navigateOption(-1)"
                    @keydown.enter.prevent="selectHighlightedOption"
                  />
                  <button
                    v-if="translationSearchQuery"
                    type="button"
                    class="clear-search-btn"
                    title="Clear search"
                    @click="translationSearchQuery = ''; translationSearchInputRef?.focus()"
                  >
                    ×
                  </button>
                </div>

                <!-- Scrollable Translation Options List -->
                <ul class="translation-options-list">
                  <li
                    v-for="(item, idx) in filteredTranslations"
                    :key="item.id"
                    :class="[
                      'translation-option-item',
                      {
                        'is-selected': selectedTranslation === item.id,
                        'is-highlighted': highlightedIndex === idx
                      }
                    ]"
                    role="option"
                    :aria-selected="selectedTranslation === item.id"
                    @click="selectTranslation(item.id)"
                    @mouseenter="highlightedIndex = idx"
                  >
                    <div class="option-main">
                      <span class="option-title">{{ item.label }}</span>
                    </div>
                    <span v-if="selectedTranslation === item.id" class="option-checkmark" aria-hidden="true">✓</span>
                  </li>
                  <li v-if="filteredTranslations.length === 0" class="translation-no-results">
                    No translations found matching "{{ translationSearchQuery }}"
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Custom Text Area -->
          <div v-if="selectedTranslation === 'custom'" class="fade-in mt-4">
            <label for="custom-text-input" class="form-label">Custom Verse Text</label>
            <textarea
              id="custom-text-input"
              v-model="customText"
              rows="3"
              placeholder="Paste your verse text here..."
              class="form-control"
            ></textarea>
          </div>

          <div v-if="errorMessage" class="error-banner fade-in">
            {{ errorMessage }}
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="btn btn-primary"
          >
            {{ isLoading ? 'Loading...' : 'Load Verse' }}
          </button>
        </form>
      </div>

      <!-- Game Dashboard -->
      <div v-if="hasLoadedVerse" class="post dashboard-container fade-in">
        <div class="dashboard-header">
          <h2>{{ currentRef }}</h2>
        </div>

        <!-- Navigation Tabs -->
        <div class="tabs" role="tablist">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab-btn', { 'tab-active': currentTab === tab.id }]"
            @click="switchTab(tab.id)"
            role="tab"
            :aria-selected="currentTab === tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Tab 1: Vanish (Eraser Game) -->
        <div v-show="currentTab === 'vanish'" class="tab-content">
          <div class="toolbar">
            <span>Hide:</span>
            <button
              v-for="p in [0, 0.25, 0.50, 0.75, 1]"
              :key="p"
              @click="initVanish(p)"
              :class="['toolbar-btn', { 'toolbar-btn-active': vanishPercent === p }]"
            >
              {{ Math.round(p * 100) }}%
            </button>
          </div>
          <p class="game-instructions">(Click on blank spaces to reveal them)</p>
          <div class="game-text-display">
            <span
              v-for="(item, idx) in vanishWords"
              :key="idx"
              :class="['vanish-word', { 'vanish-word-hidden': !item.revealed }]"
              :title="!item.revealed ? 'Click to reveal' : ''"
              @click="item.revealed = true"
            >
              {{ item.revealed ? item.word : item.blanked }}{{ ' ' }}
            </span>
          </div>
        </div>

        <!-- Tab 2: Fill in the Blanks -->
        <div v-show="currentTab === 'fill'" class="tab-content">
          <div class="toolbar">
            <span>Blanks:</span>
            <button
              v-for="p in [0.25, 0.50, 0.75, 1]"
              :key="p"
              @click="initFill(p)"
              :class="['toolbar-btn', { 'toolbar-btn-active': fillPercent === p }]"
            >
              {{ Math.round(p * 100) }}%
            </button>
          </div>
          <div class="game-text-display mb-2">
            <template v-for="(item, idx) in fillWords" :key="idx">
              <template v-if="item.isBlank">
                {{ item.prefix }}<input
                  v-model="item.userVal"
                  type="text"
                  :class="['fill-input', item.statusClass]"
                  :style="{ width: item.width + 'ch' }"
                  autocomplete="off"
                  @input="item.statusClass = ''"
                />{{ item.suffix }}{{ ' ' }}
              </template>
              <template v-else>
                {{ item.word }}{{ ' ' }}
              </template>
            </template>
          </div>
          <div class="text-center">
            <button @click="checkFill" class="btn btn-secondary">Check Answers</button>
            <p
              v-if="fillFeedback"
              :class="['feedback-message', fillIsSuccess ? 'text-success' : 'text-error']"
            >
              {{ fillFeedback }}
            </p>
          </div>
        </div>

        <!-- Tab 3: Scramble Game -->
        <div v-show="currentTab === 'scramble'" class="tab-content">
          <div class="game-text-display scramble-target">
            <template v-for="(word, idx) in scrambleTarget" :key="idx">
              <span v-if="idx < scrambleExpectedIndex" class="scramble-target-word fade-in">
                {{ word }}
              </span>
              <span v-else class="scramble-target-blank"></span>
            </template>
          </div>

          <div class="scramble-bank">
            <button
              v-for="(item, idx) in scrambleBank"
              :key="idx"
              :class="[
                'scramble-btn',
                { 'scramble-btn-used': item.used, 'scramble-error shake': item.error }
              ]"
              :disabled="item.used"
              @click="guessScramble(item, idx)"
            >
              {{ item.word }}
            </button>
          </div>

          <div class="text-center mt-4">
            <button @click="initScramble" class="btn btn-secondary">Reset Scramble</button>
          </div>
        </div>

        <!-- Tab 4: First Letters Game -->
        <div v-show="currentTab === 'first-letter'" class="tab-content">
          <p class="game-instructions">Read aloud using only the first letters as hints. Tap a word to peek!</p>
          <div class="game-text-display tracking-wide">
            <template v-for="(item, idx) in firstLetterWords" :key="idx">
              <span
                class="first-letter-word"
                :class="{ revealed: item.revealed }"
                @click="toggleFirstLetterReveal(idx)"
              >{{ item.revealed ? item.original : item.masked }}</span>{{ ' ' }}
            </template>
          </div>
        </div>

        <!-- Tab 5: Type Full Verse -->
        <div v-show="currentTab === 'type'" class="tab-content">
          <div class="text-center mb-2">
            <button @click="toggleTypeMode" class="btn btn-secondary">
              {{ typeMode === 'show' ? 'Hide Verse (Type from Memory)' : 'Show Verse to Learn' }}
            </button>
          </div>
          <p class="game-instructions">(Pro tip: Don't worry about punctuation or spaces—just type the letters!)</p>

          <!-- Inline Typing Display — captures keystrokes directly -->
          <div
            ref="typeBoxRef"
            class="game-text-display type-display-box"
            tabindex="0"
            @keydown="handleTypeKeydown"
            @focus="typeBoxFocused = true"
            @blur="typeBoxFocused = false"
          >
            <span
              v-for="(charObj, idx) in typeDisplayCharacters"
              :key="idx"
              :class="charObj.cssClass"
            >{{ charObj.char }}</span>
            <span v-if="!typeCompleted && typeBoxFocused" class="type-cursor">|</span>
            <div v-if="!typeBoxFocused && !typeCompleted && typedChars.length === 0" class="type-focus-hint" @click="focusTypeBox">
              Click here to start typing…
            </div>
          </div>

          <div class="text-center mt-4">
            <p v-if="typeCompleted" class="feedback-message text-success fade-in">
              🎉 Perfect! You typed the verse perfectly.
            </p>
            <button
              v-if="typedChars.length > 0"
              @click="initType(); nextTick(() => typeBoxRef?.focus())"
              class="btn btn-reset"
            >
              ↻ Reset
            </button>
          </div>
        </div>

        <!-- Tab 6: Type First Letters -->
        <div v-show="currentTab === 'type-first'" class="tab-content">
          <p class="game-instructions">Type the first letter of each word. Correct letters reveal the full word.</p>

          <div v-if="!typeFirstCompleted" class="text-center mb-2">
            <button @click="revealCurrentWord" class="btn btn-secondary type-first-hint-btn" title="Reveal the next word">
              Show Next Word
            </button>
          </div>

          <!-- Inline Word Display — captures keystrokes directly -->
          <div
            ref="typeFirstBoxRef"
            class="game-text-display type-display-box"
            tabindex="0"
            @keydown="handleTypeFirstKeydown"
            @focus="typeFirstBoxFocused = true"
            @blur="typeFirstBoxFocused = false"
          >
            <span
              v-for="(item, idx) in typeFirstWordStates"
              :key="idx"
              :class="[
                'type-first-word',
                {
                  'type-first-correct': item.status === 'correct',
                  'type-first-revealed': item.status === 'revealed',
                  'type-first-error': item.status === 'error',
                  'hidden': item.status === 'pending'
                }
              ]"
            >
              <template v-if="item.status === 'correct' || item.status === 'revealed'">{{ item.word }}</template>
              <template v-else-if="item.status === 'error'">{{ item.errorChar }}</template>
            </span>
            <span v-if="!typeFirstCompleted && typeFirstBoxFocused" class="type-cursor">|</span>
            <div v-if="!typeFirstBoxFocused && !typeFirstCompleted && typeFirstCurrentIndex === 0" class="type-focus-hint" @click="focusTypeFirstBox">
              Click here to start typing…
            </div>
          </div>

          <div class="text-center mt-4">
            <p v-if="typeFirstCompleted" class="feedback-message text-success fade-in">
              🎉 Perfect! You completed the verse!
            </p>
            <button
              v-if="typeFirstCurrentIndex > 0"
              @click="initTypeFirst(); nextTick(() => typeFirstBoxRef?.focus())"
              class="btn btn-reset"
            >
              ↻ Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'

const translations = [
  { id: 'niv2011', label: 'New International Version (NIV)', name: 'New International Version', abbr: 'NIV', year: '2011' },
  { id: 'kjv', label: 'King James Version (KJV)', name: 'King James Version', abbr: 'KJV' },
  { id: 'esv', label: 'English Standard Version (ESV)', name: 'English Standard Version', abbr: 'ESV' },
  { id: 'nlt', label: 'New Living Translation (NLT)', name: 'New Living Translation', abbr: 'NLT' },
  { id: 'nkjv', label: 'New King James Version (NKJV)', name: 'New King James Version', abbr: 'NKJV' },
  { id: 'csb', label: 'Christian Standard Bible (CSB)', name: 'Christian Standard Bible', abbr: 'CSB' },
  { id: 'nasb', label: 'New American Standard Bible (NASB - 1995)', name: 'New American Standard Bible', abbr: 'NASB', year: '1995' },
  { id: 'niv1984', label: 'New International Version (NIV - 1984)', name: 'New International Version', abbr: 'NIV', year: '1984' },
  { id: 'amp', label: 'Amplified Bible (AMP)', name: 'Amplified Bible', abbr: 'AMP' },
  { id: 'net', label: 'New English Translation (NET)', name: 'New English Translation', abbr: 'NET' },
  { id: 'web', label: 'World English Bible (WEB)', name: 'World English Bible', abbr: 'WEB' },
  { id: 'asv', label: 'American Standard Version (ASV)', name: 'American Standard Version', abbr: 'ASV' },
  { id: 'bbe', label: 'Bible in Basic English (BBE)', name: 'Bible in Basic English', abbr: 'BBE' },
  { id: 'custom', label: 'Paste Custom Text', name: 'Paste Custom Text', abbr: 'Custom' }
]

const referenceInput = ref('John 3:16')
const selectedTranslation = ref('niv2011')
const customText = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const hasLoadedVerse = ref(false)

// Translation Dropdown Search State
const isTranslationDropdownOpen = ref(false)
const translationSearchQuery = ref('')
const translationDropdownRef = ref(null)
const translationSearchInputRef = ref(null)
const highlightedIndex = ref(0)

const selectedTranslationLabel = computed(() => {
  const found = translations.find(t => t.id === selectedTranslation.value)
  return found ? found.label : selectedTranslation.value
})

const filteredTranslations = computed(() => {
  const q = translationSearchQuery.value.trim().toLowerCase()
  if (!q) return translations
  return translations.filter(t => {
    return (
      t.label.toLowerCase().includes(q) ||
      t.name.toLowerCase().includes(q) ||
      t.abbr.toLowerCase().includes(q) ||
      (t.year && t.year.includes(q)) ||
      t.id.toLowerCase().includes(q)
    )
  })
})

const toggleTranslationDropdown = () => {
  if (isTranslationDropdownOpen.value) {
    closeTranslationDropdown()
  } else {
    openTranslationDropdown()
  }
}

const openTranslationDropdown = () => {
  isTranslationDropdownOpen.value = true
  translationSearchQuery.value = ''
  highlightedIndex.value = Math.max(0, filteredTranslations.value.findIndex(t => t.id === selectedTranslation.value))
  nextTick(() => {
    translationSearchInputRef.value?.focus()
  })
}

const openAndFocusSearch = () => {
  if (!isTranslationDropdownOpen.value) {
    openTranslationDropdown()
  }
}

const closeTranslationDropdown = () => {
  isTranslationDropdownOpen.value = false
  translationSearchQuery.value = ''
}

const selectTranslation = (id) => {
  selectedTranslation.value = id
  closeTranslationDropdown()
}

const navigateOption = (delta) => {
  const total = filteredTranslations.value.length
  if (total === 0) return
  highlightedIndex.value = (highlightedIndex.value + delta + total) % total
}

const selectHighlightedOption = () => {
  if (filteredTranslations.value.length > 0 && highlightedIndex.value >= 0 && highlightedIndex.value < filteredTranslations.value.length) {
    selectTranslation(filteredTranslations.value[highlightedIndex.value].id)
  }
}

const handleClickOutside = (event) => {
  if (translationDropdownRef.value && !translationDropdownRef.value.contains(event.target)) {
    closeTranslationDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const currentVerse = ref('')
const currentRef = ref('')

const tabs = [
  { id: 'vanish', label: 'Vanish' },
  { id: 'fill', label: 'Fill in Blanks' },
  { id: 'scramble', label: 'Scramble' },
  { id: 'first-letter', label: 'First Letter' },
  { id: 'type', label: 'Type Full' },
  { id: 'type-first', label: 'Type First Letters' }
]
const currentTab = ref('vanish')

// Helper
const cleanString = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

const switchTab = (tabId) => {
  currentTab.value = tabId
  if (tabId === 'type') {
    initType()
    nextTick(() => {
      typeBoxRef.value?.focus()
    })
  }
  if (tabId === 'type-first') {
    initTypeFirst()
    nextTick(() => {
      typeFirstBoxRef.value?.focus()
    })
  }
}

// In-memory cache for loaded NIV books
const nivCache = {}

// ==================== FETCH VERSE ====================
const fetchVerse = async () => {
  errorMessage.value = ''
  const refQuery = referenceInput.value.trim()

  if (!refQuery) {
    errorMessage.value = 'Please enter a Bible reference.'
    return
  }

  isLoading.value = true

  if (selectedTranslation.value === 'custom') {
    const rawCustom = customText.value.trim()
    if (!rawCustom) {
      errorMessage.value = 'Please paste your text in the custom field.'
      isLoading.value = false
      return
    }
    currentVerse.value = rawCustom.replace(/\s+/g, ' ')
    currentRef.value = refQuery
    hasLoadedVerse.value = true
    isLoading.value = false
    initializeDashboard()
    return
  }

  try {
    if (selectedTranslation.value === 'niv2011' || selectedTranslation.value === 'niv1984') {
      const nivFolder = selectedTranslation.value === 'niv2011' ? 'niv2011' : 'niv1984'
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(refQuery)}?translation=web`)
      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      if (data.verses && data.verses.length > 0) {
        const baseUrl = import.meta.env.BASE_URL || '/'
        const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
        const booksNeeded = [...new Set(data.verses.map(v => v.book_id))]
        const bookDataMap = {}

        for (const bookId of booksNeeded) {
          const cacheKey = `${nivFolder}_${bookId}`
          if (nivCache[cacheKey]) {
            bookDataMap[bookId] = nivCache[cacheKey]
          } else {
            const res = await fetch(`${cleanBase}data/translations/${nivFolder}/${bookId}.json`)
            if (!res.ok) {
              throw new Error(`Could not load ${nivFolder.toUpperCase()} text for book ${bookId}`)
            }
            const bookJson = await res.json()
            nivCache[cacheKey] = bookJson
            bookDataMap[bookId] = bookJson
          }
        }

        const textParts = []
        for (const v of data.verses) {
          const bookData = bookDataMap[v.book_id]
          const verseText = bookData?.[String(v.chapter)]?.[String(v.verse)]
          if (verseText) {
            textParts.push(verseText)
          } else {
            throw new Error(`Verse not found in ${nivFolder === 'niv2011' ? 'NIV (2011)' : 'NIV (1984)'}: ${v.book_name} ${v.chapter}:${v.verse}`)
          }
        }

        currentVerse.value = textParts.join(' ').trim().replace(/\s+/g, ' ')
        currentRef.value = data.reference
        hasLoadedVerse.value = true
        initializeDashboard()
        return
      } else {
        throw new Error('No verses returned for this reference.')
      }
    }

    let apiTranslation = selectedTranslation.value
    let isFallback = false
    let fallbackTranslation = ''

    const bollsTranslations = ['esv', 'csb', 'nasb', 'nkjv', 'nlt', 'net', 'amp']
    if (bollsTranslations.includes(apiTranslation)) {
      if (apiTranslation === 'csb') {
        fallbackTranslation = 'CSB17'
      } else {
        fallbackTranslation = apiTranslation.toUpperCase()
      }
      apiTranslation = 'web' // Use WEB to parse the reference and verses
      isFallback = true
    }

    const response = await fetch(`https://bible-api.com/${encodeURIComponent(refQuery)}?translation=${apiTranslation}`)
    const data = await response.json()

    if (data.error) {
      throw new Error(data.error)
    }

    if (isFallback && data.verses && data.verses.length > 0) {
      // Map bible-api book_id to bolls.life numeric index
      const bookMap = {
        "GEN": 1, "EXO": 2, "LEV": 3, "NUM": 4, "DEU": 5, "JOS": 6, "JDG": 7, "RUT": 8, "1SA": 9, "2SA": 10,
        "1KI": 11, "2KI": 12, "1CH": 13, "2CH": 14, "EZR": 15, "NEH": 16, "EST": 17, "JOB": 18, "PSA": 19, "PRO": 20,
        "ECC": 21, "SNG": 22, "ISA": 23, "JER": 24, "LAM": 25, "EZK": 26, "DAN": 27, "HOS": 28, "JOL": 29, "AMO": 30,
        "OBA": 31, "JON": 32, "MIC": 33, "NAM": 34, "HAB": 35, "ZEP": 36, "HAG": 37, "ZEC": 38, "MAL": 39,
        "MAT": 40, "MRK": 41, "LUK": 42, "JHN": 43, "ACT": 44, "ROM": 45, "1CO": 46, "2CO": 47, "GAL": 48, "EPH": 49,
        "PHP": 50, "COL": 51, "1TH": 52, "2TH": 53, "1TI": 54, "2TI": 55, "TIT": 56, "PHM": 57, "HEB": 58, "JAS": 59,
        "1PE": 60, "2PE": 61, "1JN": 62, "2JN": 63, "3JN": 64, "JUD": 65, "REV": 66
      }
      
      const bookIdStr = data.verses[0].book_id
      const bookIndex = bookMap[bookIdStr]

      if (bookIndex) {
        const chaptersNeeded = [...new Set(data.verses.map(v => v.chapter))]
        let fallbackTextParts = []

        for (let chapter of chaptersNeeded) {
          const bollsResp = await fetch(`https://bolls.life/get-chapter/${fallbackTranslation}/${bookIndex}/${chapter}/`)
          if (!bollsResp.ok) continue
          
          const bollsData = await bollsResp.json()
          if (Array.isArray(bollsData)) {
            const requiredVersesForChapter = new Set(data.verses.filter(v => v.chapter === chapter).map(v => v.verse))
            
            const chapterText = bollsData
              .filter(v => requiredVersesForChapter.has(v.verse))
              .map(v => {
                // Strip headings (often prepended before a <br/> with no punctuation)
                const parts = v.text.split(/<br\s*\/?>/i)
                let i = 0
                while (i < parts.length - 1) {
                  const current = parts[i].trim()
                  const next = parts[i + 1].trim()
                  const endsWithPunct = /[.,;:'"!?”)\]]$/.test(current)
                  const nextStartsUpper = /^[A-Z“"‘'0-9]/.test(next)
                  
                  if (!endsWithPunct && nextStartsUpper) {
                    i++ // Skip heading
                  } else {
                    break
                  }
                }
                // Rejoin the actual verse lines and strip remaining HTML tags
                let rawText = parts.slice(i).join(' ')
                // Remove <sup> tags and their contents (footnotes/cross-refs)
                rawText = rawText.replace(/<sup[^>]*>.*?<\/sup>/gi, '')
                // Remove bold headings/superscriptions at start of verse
                rawText = rawText.replace(/^<b>.*?<\/b>\s*/i, '')
                // Remove remaining HTML tags
                return rawText.replace(/<[^>]*>?/gm, '').trim()
              })
              .join(' ')
              
            if (chapterText) {
              fallbackTextParts.push(chapterText)
            }
          }
        }
        
        if (fallbackTextParts.length > 0) {
          data.text = fallbackTextParts.join(' ')
        } else {
          throw new Error(`Could not fetch ${fallbackTranslation} text from secondary API.`)
        }
      }
    } else if (data.verses && data.verses.length > 0) {
      // Re-assemble standard API verses explicitly to prevent missing spaces
      data.text = data.verses.map(v => v.text.trim()).join(' ')
    }

    currentVerse.value = data.text.trim().replace(/\s+/g, ' ')
    currentRef.value = data.reference
    hasLoadedVerse.value = true
    initializeDashboard()
  } catch (err) {
    errorMessage.value = "Could not fetch that verse automatically. Ensure the reference is valid, or use 'Paste Custom Text' for other versions."
  } finally {
    isLoading.value = false
  }
}

const initializeDashboard = () => {
  currentTab.value = 'vanish'
  initVanish(0)
  initFill(0.25)
  initScramble()
  initFirstLetter()
  initType()
  initTypeFirst()
}

// ==================== 1. VANISH MODE ====================
const vanishPercent = ref(0)
const vanishWords = ref([])

const initVanish = (percent) => {
  vanishPercent.value = percent
  const rawWords = currentVerse.value.split(/\s+/)
  const totalWords = rawWords.length
  const numHide = Math.floor(totalWords * percent)

  const hideIndices = new Set()
  while (hideIndices.size < numHide && hideIndices.size < totalWords) {
    hideIndices.add(Math.floor(Math.random() * totalWords))
  }

  vanishWords.value = rawWords.map((word, i) => {
    const isHidden = hideIndices.has(i)
    return {
      word,
      blanked: word.replace(/[a-zA-Z0-9]/g, '_'),
      revealed: !isHidden
    }
  })
}

// ==================== 2. FILL MODE ====================
const fillPercent = ref(0.25)
const fillWords = ref([])
const fillFeedback = ref('')
const fillIsSuccess = ref(false)

const initFill = (percent) => {
  fillPercent.value = percent
  fillFeedback.value = ''
  fillIsSuccess.value = false

  const rawWords = currentVerse.value.split(/\s+/)
  const totalWords = rawWords.length
  const numHide = Math.floor(totalWords * percent)

  const hideIndices = new Set()
  while (hideIndices.size < numHide && hideIndices.size < totalWords) {
    hideIndices.add(Math.floor(Math.random() * totalWords))
  }

  fillWords.value = rawWords.map((word, i) => {
    const isBlank = hideIndices.has(i)
    if (isBlank) {
      const match = word.match(/^([^a-zA-Z0-9]*)([a-zA-Z0-9]+.*[a-zA-Z0-9]+|[a-zA-Z0-9]+)([^a-zA-Z0-9]*)$/)
      let prefix = ''
      let coreWord = word
      let suffix = ''

      if (match) {
        prefix = match[1]
        coreWord = match[2]
        suffix = match[3]
      }

      return {
        isBlank: true,
        word,
        prefix,
        suffix,
        coreWord,
        targetClean: cleanString(coreWord),
        width: Math.max(3, coreWord.length) + 1,
        userVal: '',
        statusClass: ''
      }
    }
    return {
      isBlank: false,
      word
    }
  })
}

const checkFill = () => {
  let allCorrect = true

  fillWords.value.forEach((item) => {
    if (item.isBlank) {
      const userValClean = cleanString(item.userVal || '')
      if (userValClean === item.targetClean) {
        item.statusClass = 'fill-correct'
      } else {
        item.statusClass = 'fill-incorrect shake'
        allCorrect = false
        setTimeout(() => {
          if (item.statusClass.includes('shake')) {
            item.statusClass = 'fill-incorrect'
          }
        }, 400)
      }
    }
  })

  if (allCorrect) {
    fillFeedback.value = 'Perfect! You got all the blanks right.'
    fillIsSuccess.value = true
  } else {
    fillFeedback.value = 'Some words need fixing. Check the red boxes and try again!'
    fillIsSuccess.value = false
  }
}

// ==================== 3. SCRAMBLE MODE ====================
const scrambleTarget = ref([])
const scrambleBank = ref([])
const scrambleExpectedIndex = ref(0)

const initScramble = () => {
  const words = currentVerse.value.split(/\s+/)
  scrambleTarget.value = words
  scrambleBank.value = words
    .map((word, idx) => ({ word, originalIndex: idx, used: false, error: false }))
    .sort(() => Math.random() - 0.5)
  scrambleExpectedIndex.value = 0
}

const guessScramble = (item, idx) => {
  if (item.used) return

  if (item.word === scrambleTarget.value[scrambleExpectedIndex.value]) {
    item.used = true
    scrambleExpectedIndex.value++
    if (scrambleExpectedIndex.value === scrambleTarget.value.length) {
      // Completed scramble
    }
  } else {
    item.error = true
    setTimeout(() => {
      item.error = false
    }, 400)
  }
}

// ==================== 4. FIRST LETTER MODE ====================
const firstLetterWords = ref([])

const initFirstLetter = () => {
  const rawWords = currentVerse.value.split(/\s+/)
  firstLetterWords.value = rawWords.map((word) => {
    let firstFound = false
    let masked = ''
    for (const char of word) {
      if (/[a-zA-Z0-9]/.test(char)) {
        if (!firstFound) {
          masked += char
          firstFound = true
        } else {
          masked += '_'
        }
      } else {
        masked += char
      }
    }
    return {
      original: word,
      masked,
      revealed: false
    }
  })
}

const toggleFirstLetterReveal = (idx) => {
  firstLetterWords.value[idx].revealed = !firstLetterWords.value[idx].revealed
}

// ==================== 5. TYPE FULL MODE ====================
const typeMode = ref('show')
const typedChars = ref([])     // Array of typed characters (letters only)
const typeBoxRef = ref(null)
const typeBoxFocused = ref(false)

const initType = () => {
  typeMode.value = 'show'
  typedChars.value = []
}

const toggleTypeMode = () => {
  typeMode.value = typeMode.value === 'show' ? 'hide' : 'show'
  nextTick(() => {
    typeBoxRef.value?.focus()
  })
}

const focusTypeBox = () => {
  typeBoxRef.value?.focus()
}

// Build a map of alphanumeric positions in the verse for efficient lookup
const verseAlphaMap = computed(() => {
  const verse = currentVerse.value || ''
  const positions = [] // array of { verseIndex, char (lowercase) }
  for (let i = 0; i < verse.length; i++) {
    if (/[a-zA-Z0-9]/.test(verse[i])) {
      positions.push({ verseIndex: i, char: verse[i].toLowerCase() })
    }
  }
  return positions
})

const handleTypeKeydown = (event) => {
  // Ignore modifier combos (Ctrl+C, Cmd+A, etc.)
  if (event.ctrlKey || event.metaKey || event.altKey) return

  const key = event.key

  if (key === 'Backspace') {
    event.preventDefault()
    if (typedChars.value.length > 0) {
      typedChars.value.pop()
    }
    return
  }

  // Ignore non-printable keys
  if (key.length !== 1) return
  event.preventDefault()

  // Only accept alphanumeric input
  if (!/[a-zA-Z0-9]/.test(key)) return

  const alphaMap = verseAlphaMap.value
  const typedChar = key.toLowerCase()
  const currentLen = typedChars.value.length

  // If the last typed character was wrong, replace it instead of appending
  if (currentLen > 0 && currentLen <= alphaMap.length) {
    const lastIdx = currentLen - 1
    const lastExpected = alphaMap[lastIdx].char
    const lastTyped = typedChars.value[lastIdx]
    if (lastTyped !== lastExpected) {
      // Replace the wrong character
      typedChars.value[lastIdx] = typedChar
      return
    }
  }

  // If already completed, don't accept more input
  if (currentLen >= alphaMap.length) return

  typedChars.value.push(typedChar)
}

const typeDisplayCharacters = computed(() => {
  if (!currentVerse.value) return []

  const verse = currentVerse.value
  const typed = typedChars.value
  const alphaMap = verseAlphaMap.value

  // Determine activeIndex in the verse string (the position of the next untyped alphanumeric char)
  let activeIndex = verse.length
  if (typed.length < alphaMap.length) {
    activeIndex = alphaMap[typed.length].verseIndex
  }

  const result = []
  let typedIdx = 0

  for (let i = 0; i < verse.length; i++) {
    const char = verse[i]
    const isAlphanum = /[a-zA-Z0-9]/.test(char)
    let cssClass = ''

    if (isAlphanum) {
      if (typedIdx < typed.length) {
        const expectedChar = char.toLowerCase()
        const userChar = typed[typedIdx]
        cssClass = userChar === expectedChar ? 'type-char-correct' : 'type-char-error'
        typedIdx++
      } else {
        cssClass = typeMode.value === 'show' ? 'type-char-future' : 'hidden'
      }
    } else {
      if (i <= activeIndex) {
        cssClass = 'type-char-punct'
      } else {
        cssClass = typeMode.value === 'show' ? 'type-char-future' : 'hidden'
      }
    }

    result.push({ char, cssClass })
  }

  return result
})

const typeCompleted = computed(() => {
  if (!currentVerse.value) return false
  const alphaMap = verseAlphaMap.value
  if (typedChars.value.length === alphaMap.length && alphaMap.length > 0) {
    return !typeDisplayCharacters.value.some((c) => c.cssClass === 'type-char-error')
  }
  return false
})

// ==================== 6. TYPE FIRST LETTERS MODE ====================
const typeFirstBoxRef = ref(null)
const typeFirstBoxFocused = ref(false)
const typeFirstCurrentIndex = ref(0)
const typeFirstWordStates = ref([])

const getFirstAlpha = (word) => {
  for (const char of word) {
    if (/[a-zA-Z0-9]/.test(char)) return char.toLowerCase()
  }
  return ''
}

const initTypeFirst = () => {
  typeFirstCurrentIndex.value = 0
  const rawWords = currentVerse.value.split(/\s+/).filter((w) => w.length > 0)
  typeFirstWordStates.value = rawWords.map((word) => ({
    word,
    status: 'pending',
    errorChar: ''
  }))
}

const typeFirstCompleted = computed(() => {
  if (typeFirstWordStates.value.length === 0) return false
  return typeFirstWordStates.value.every((w) => w.status === 'correct' || w.status === 'revealed')
})

const focusTypeFirstBox = () => {
  typeFirstBoxRef.value?.focus()
}

const handleTypeFirstKeydown = (event) => {
  // Ignore modifier combos
  if (event.ctrlKey || event.metaKey || event.altKey) return

  // Ignore non-printable keys
  if (event.key.length !== 1) return
  event.preventDefault()

  const char = event.key.toLowerCase()
  if (!/[a-zA-Z0-9]/.test(char)) return
  if (typeFirstCompleted.value) return

  const idx = typeFirstCurrentIndex.value
  if (idx >= typeFirstWordStates.value.length) return

  const wordObj = typeFirstWordStates.value[idx]
  const expectedChar = getFirstAlpha(wordObj.word)

  if (char === expectedChar) {
    wordObj.status = 'correct'
    typeFirstCurrentIndex.value++
  } else {
    wordObj.status = 'error'
    wordObj.errorChar = char
    setTimeout(() => {
      if (wordObj.status === 'error') {
        wordObj.status = 'pending'
        wordObj.errorChar = ''
      }
    }, 400)
  }
}

const revealCurrentWord = () => {
  if (typeFirstCompleted.value) return
  const idx = typeFirstCurrentIndex.value
  if (idx >= typeFirstWordStates.value.length) return

  typeFirstWordStates.value[idx].status = 'revealed'
  typeFirstCurrentIndex.value++
  nextTick(() => {
    typeFirstBoxRef.value?.focus()
  })
}
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 4rem 1.5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.75rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.page-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background-color: var(--accent-color);
  margin: 1rem auto 0;
  border-radius: 1px;
  opacity: 0.6;
}

.error-banner {
  background-color: var(--error-bg);
  color: var(--error-color);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  margin-top: 1rem;
  font-weight: 500;
  font-size: 0.95rem;
}

.dashboard-container {
  padding: 0;
  overflow: hidden;
}

.dashboard-header {
  background: linear-gradient(135deg, #2c2c2c 0%, #3d3a36 50%, #2c2c2c 100%);
  color: #ffffff;
  padding: 2.25rem 1.5rem;
  text-align: center;
}

.dashboard-header h2 {
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.tabs {
  display: flex;
  overflow-x: auto;
  background: var(--disclaimer-bg);
  padding: 0.35rem;
  border-bottom: none;
  border-radius: var(--radius-md);
  margin: 1.25rem 1.5rem 0;
  gap: 0.25rem;
}

.tab-btn {
  flex: 1;
  padding: 0.65rem 1rem;
  background: transparent;
  border: none;
  border-bottom: none;
  border-radius: var(--radius-sm);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  color: var(--text-light);
  transition: all var(--transition-base);
}

.tab-btn:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.5);
}

.tab-active {
  color: var(--accent-color);
  border-bottom-color: transparent;
  background-color: #ffffff;
  box-shadow: var(--shadow-sm);
}

.tab-content {
  padding: 2.25rem;
}

.game-text-display {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.4rem;
  line-height: 2.2;
  color: var(--text-main);
  padding: 0.5rem 0;
}

.game-instructions {
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.toolbar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.toolbar span {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-right: 0.5rem;
}

.toolbar-btn {
  background: var(--disclaimer-bg);
  border: 1px solid var(--border-color);
  padding: 0.45rem 1rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all var(--transition-base);
}

.toolbar-btn:hover,
.toolbar-btn-active {
  background: #e6e1d8;
  border-color: var(--accent-color);
  color: var(--accent-color);
  font-weight: 600;
  box-shadow: var(--shadow-xs);
}

/* Vanish Game */
.vanish-word {
  display: inline-block;
  white-space: pre;
}

.vanish-word-hidden {
  color: #cdc7be;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.vanish-word-hidden:hover {
  color: #a09890;
}

/* Fill Game */
.fill-input {
  display: inline-block;
  border: none;
  border-bottom: 2px solid #a09890;
  background-color: var(--bg-subtle);
  margin: 0 4px;
  text-align: center;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: inherit;
  color: var(--accent-color);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  padding: 2px 4px;
  transition: all var(--transition-base);
}

.fill-input:focus {
  outline: none;
  border-bottom-color: var(--accent-color);
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(60, 50, 40, 0.06);
}

.fill-correct {
  background-color: var(--success-bg) !important;
  color: var(--success-color) !important;
  border-bottom-color: var(--success-color) !important;
}

.fill-incorrect {
  background-color: var(--error-bg) !important;
  color: var(--error-color) !important;
  border-bottom-color: var(--error-color) !important;
}

/* Scramble Game */
.scramble-bank {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.scramble-btn {
  background: #ffffff;
  border: 1px solid var(--border-color);
  padding: 0.5rem 1.1rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  font-size: 1.1rem;
  font-family: Georgia, 'Times New Roman', serif;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-xs);
}

.scramble-btn:hover:not(:disabled) {
  border-color: var(--accent-color);
  background: #faf8f4;
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.scramble-btn-used {
  background: var(--bg-subtle);
  color: transparent;
  border-color: var(--border-color);
  cursor: default;
  box-shadow: inset 0 2px 4px rgba(60, 50, 40, 0.05);
  transform: none;
}

.scramble-error {
  background-color: var(--error-bg) !important;
  border-color: #f87171 !important;
  color: var(--error-color) !important;
}

.scramble-target {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  row-gap: 1rem;
  min-height: 80px;
}

.scramble-target-word {
  color: var(--accent-color);
  font-weight: bold;
  margin-right: 0.4rem;
}

.scramble-target-blank {
  display: inline-block;
  width: 2.5rem;
  border-bottom: 2px solid var(--border-color);
  margin: 0 0.2rem;
}

/* First Letter Game */
.first-letter-word {
  cursor: pointer;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  border-radius: var(--radius-sm);
  padding: 0.05em 0.15em;
  margin: 0 -0.15em;
}

.first-letter-word:hover {
  background-color: var(--disclaimer-bg);
}

.first-letter-word.revealed {
  color: var(--accent-color);
  background-color: var(--disclaimer-bg);
}

/* Type Full Game */
.type-display-box {
  background-color: var(--disclaimer-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.75rem 2rem;
  min-height: 140px;
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  word-break: break-word;
  box-shadow: var(--shadow-xs);
}

.type-char-correct {
  color: var(--success-color);
  font-weight: bold;
}

.type-char-error {
  color: var(--error-color);
  background-color: var(--error-bg);
  border-radius: 3px;
  padding: 0 2px;
}

.type-char-future {
  color: #cdc7be;
}

.type-char-punct {
  color: #a09890;
}

.type-display-box:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(61, 107, 110, 0.12);
}

.type-display-box {
  position: relative;
  cursor: text;
}

.type-cursor {
  display: inline;
  color: var(--accent-color);
  font-weight: 300;
  animation: blink-cursor 1s step-end infinite;
}

@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.type-focus-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(247, 245, 240, 0.85);
  border-radius: var(--radius-md);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--text-light);
  cursor: text;
  transition: opacity var(--transition-base);
}

.type-focus-hint:hover {
  background: rgba(247, 245, 240, 0.7);
  color: var(--accent-color);
}

.feedback-message {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
}

/* Type First Letters Game */
.type-first-word {
  display: inline-block;
  margin-right: 0.45rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.15rem;
  line-height: 2;
  letter-spacing: 0.03em;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.type-first-correct {
  color: var(--success-color);
  font-weight: bold;
}

.type-first-revealed {
  color: var(--accent-color);
  font-weight: bold;
  font-style: italic;
}

.type-first-error {
  color: var(--error-color);
  background-color: var(--error-bg);
  border-radius: 3px;
  padding: 0 3px;
  font-weight: bold;
  text-transform: uppercase;
}

.type-first-controls {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.type-first-input {
  flex: 1;
  max-width: 300px;
  font-size: 1.15rem;
  text-align: center;
  letter-spacing: 0.1em;
}

.type-first-hint-btn {
  white-space: nowrap;
  font-size: 0.9rem;
}

/* Translation Searchable Dropdown */
.translation-dropdown-container {
  position: relative;
}

.translation-trigger-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  cursor: pointer;
  background-color: #fff;
  user-select: none;
}

.translation-trigger-btn.is-active {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(61, 107, 110, 0.12);
}

.trigger-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.trigger-chevron {
  display: inline-flex;
  align-items: center;
  color: var(--text-light);
  margin-left: 0.5rem;
  flex-shrink: 0;
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.translation-trigger-btn.is-active .trigger-chevron {
  transform: rotate(180deg);
  color: var(--accent-color);
}

.translation-dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 50;
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  max-height: 330px;
  display: flex;
  flex-direction: column;
}

.translation-search-box {
  display: flex;
  align-items: center;
  padding: 0.6rem 0.85rem;
  background: var(--disclaimer-bg);
  border-bottom: 1px solid var(--border-color);
  gap: 0.5rem;
  flex-shrink: 0;
}

.search-icon {
  color: var(--text-light);
  display: inline-flex;
  flex-shrink: 0;
}

.translation-search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.9rem;
  color: var(--text-main);
  outline: none;
  min-width: 0;
}

.translation-search-input::placeholder {
  color: var(--text-light);
  opacity: 0.8;
}

.clear-search-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  line-height: 1;
  color: var(--text-light);
  cursor: pointer;
  padding: 0 0.25rem;
  border-radius: var(--radius-full);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.clear-search-btn:hover {
  color: var(--text-main);
}

.translation-options-list {
  list-style: none;
  margin: 0;
  padding: 0.35rem 0;
  overflow-y: auto;
  flex: 1;
}

.translation-option-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1rem;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.92rem;
  color: var(--text-main);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.translation-option-item:hover,
.translation-option-item.is-highlighted {
  background-color: #f3efe6;
  color: var(--accent-color);
}

.translation-option-item.is-selected {
  font-weight: 600;
  color: var(--accent-color);
  background-color: rgba(61, 107, 110, 0.08);
}

.option-main {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.option-checkmark {
  color: var(--accent-color);
  font-weight: bold;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.translation-no-results {
  padding: 1.25rem 1rem;
  text-align: center;
  color: var(--text-light);
  font-size: 0.9rem;
  font-style: italic;
}
</style>
