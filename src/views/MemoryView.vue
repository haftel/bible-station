<template>
  <div class="memory-view">
    <header class="page-header">
      <h1 class="page-title">Scripture Memorizer</h1>
      <p class="page-subtitle">Fetch a verse or paste your own to practice memorization.</p>
      <p class="mobile-cta">
        <router-link to="/memory/mobile" class="mobile-cta-link">
          📱 Using a mobile device? Switch to our mobile-friendly page!
        </router-link>
      </p>
    </header>

    <main class="container">
      <!-- Configuration Card -->
      <div class="post">
        <!-- Input Mode Selector -->
        <div class="input-mode-segmented-control" role="tablist" aria-label="Scripture source">
          <button
            type="button"
            class="mode-pill-btn"
            :class="{ 'is-active': inputMode === 'translation' }"
            role="tab"
            :aria-selected="inputMode === 'translation'"
            @click="setInputMode('translation')"
          >
            <svg class="mode-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <span>Bible Translation</span>
          </button>
          <button
            type="button"
            class="mode-pill-btn"
            :class="{ 'is-active': inputMode === 'custom' }"
            role="tab"
            :aria-selected="inputMode === 'custom'"
            @click="setInputMode('custom')"
          >
            <svg class="mode-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
            </svg>
            <span>Paste Custom Text</span>
          </button>
        </div>

        <form @submit.prevent="fetchVerse">
          <!-- Translation Mode Form Fields -->
          <div v-if="inputMode === 'translation'" class="fade-in">
            <div class="form-row">
              <div class="form-col">
                <label for="reference-input" class="form-label">Reference (e.g., John 3:16 or 1 John 1)</label>
                <input
                  id="reference-input"
                  v-model="referenceInput"
                  type="text"
                  placeholder="Enter verse(s) or full chapter (e.g., John 3:16, 1 John 1)"
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
                      <p class="no-results-msg">No translations found matching "{{ translationSearchQuery }}"</p>
                      <button
                        type="button"
                        class="btn-switch-custom-inline"
                        @click="switchToCustomFromDropdown"
                      >
                        Paste custom text instead &rarr;
                      </button>
                    </li>
                  </ul>

                  <!-- Pinned Translation Dropdown Footer -->
                  <div class="translation-dropdown-footer">
                    <button
                      type="button"
                      class="dropdown-footer-custom-btn"
                      @click="switchToCustomFromDropdown"
                    >
                      <span class="footer-btn-lead">Can't find your translation?</span>
                      <span class="footer-btn-cta">Paste custom text &rarr;</span>
                    </button>
                  </div>
                </div>

                <!-- Helper text under translation dropdown -->
                <div class="translation-helper-line">
                  <span>Can't find your translation?</span>
                  <button
                    type="button"
                    class="inline-text-action"
                    @click="setInputMode('custom')"
                  >
                    Paste custom text instead
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Custom Text Mode Form Fields -->
          <div v-else class="custom-input-section fade-in">
            <div class="form-row">
              <div class="form-col">
                <label for="reference-input-custom" class="form-label">
                  Reference or Passage Title (e.g., John 3:16 or My Memory Verse)
                </label>
                <input
                  id="reference-input-custom"
                  v-model="referenceInput"
                  type="text"
                  placeholder="Enter verse reference or passage title..."
                  class="form-control"
                />
              </div>
            </div>

            <div class="custom-text-field">
              <div class="field-label-group">
                <label for="custom-text-input" class="form-label">Custom Verse Text</label>
                <span class="field-subtitle">Paste from any Bible translation, study notes, or language</span>
              </div>
              <textarea
                id="custom-text-input"
                ref="customTextareaRef"
                v-model="customText"
                rows="4"
                placeholder="Paste or type your scripture text here..."
                class="form-control custom-textarea"
              ></textarea>
            </div>
          </div>

          <div v-if="errorMessage" class="error-banner fade-in">
            {{ errorMessage }}
          </div>

          <div class="form-actions mt-4">
            <button
              type="submit"
              :disabled="isLoading"
              class="btn btn-primary"
            >
              {{ isLoading ? 'Loading...' : (inputMode === 'custom' ? 'Load Custom Verse' : 'Load Verse') }}
            </button>
            <button
              v-if="inputMode === 'custom'"
              type="button"
              class="btn btn-secondary switch-back-btn"
              @click="setInputMode('translation')"
            >
              &larr; Switch to Bible Translations
            </button>
          </div>
        </form>
      </div>

      <!-- Game Dashboard -->
      <div v-if="hasLoadedVerse" class="post dashboard-container fade-in">
        <div class="dashboard-header">
          <h2>{{ currentRef }}</h2>
        </div>

        <!-- Navigation Tabs (Desktop) -->
        <div class="tabs desktop-tabs" role="tablist">
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

        <!-- Navigation Dropdown (Mobile) -->
        <div class="mobile-tabs-dropdown">
          <label for="mobile-mode-select" class="mobile-mode-label">Practice Mode</label>
          <div class="mobile-select-wrapper">
            <select
              id="mobile-mode-select"
              class="mobile-mode-select"
              :value="currentTab"
              @change="switchTab($event.target.value)"
            >
              <option v-for="tab in tabs" :key="tab.id" :value="tab.id">
                {{ tab.label }}
              </option>
            </select>
            <span class="mobile-select-chevron" aria-hidden="true">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
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

        <!-- Tab 3: Word Choice Game -->
        <div v-show="currentTab === 'word-choice'" class="tab-content">
          <p class="game-instructions">Choose the correct word for each position to rebuild the verse.</p>

          <!-- Verse progress display -->
          <div class="game-text-display wc-progress-desktop">
            <span
              v-for="(slot, idx) in wordChoiceSlots"
              :key="idx"
              class="wc-word-slot"
              :class="{
                'wc-slot-solved': slot.status === 'correct',
                'wc-slot-active': idx === wordChoiceCurrentIndex && slot.status !== 'correct',
                'wc-slot-pending': slot.status === 'pending' && idx !== wordChoiceCurrentIndex
              }"
              @click="setWordChoiceIndex(idx)"
            >
              <template v-if="slot.status === 'correct'">{{ slot.word }}</template>
              <template v-else>
                <span class="wc-blank">{{ idx === wordChoiceCurrentIndex ? '?' : '—' }}</span>
              </template>
            </span>{{ ' ' }}
          </div>

          <!-- Options for current word -->
          <div v-if="!wordChoiceCompleted && wordChoiceSlots[wordChoiceCurrentIndex]" class="wc-options-section">
            <p class="wc-options-label">Choose word {{ wordChoiceCurrentIndex + 1 }} of {{ wordChoiceSlots.length }}:</p>
            <div class="wc-options-bank">
              <button
                v-for="(option, optIdx) in wordChoiceSlots[wordChoiceCurrentIndex].options"
                :key="optIdx"
                :class="[
                  'wc-option-btn',
                  { 'wc-option-error shake': wordChoiceSlots[wordChoiceCurrentIndex].status === 'error' && wordChoiceSlots[wordChoiceCurrentIndex].errorOption === option }
                ]"
                @click="guessWordChoice(wordChoiceCurrentIndex, option)"
              >
                {{ option }}
              </button>
            </div>
          </div>

          <!-- Completion -->
          <p v-if="wordChoiceCompleted" class="feedback-message text-success fade-in">
            Perfect! You chose every word correctly.
          </p>

          <div class="text-center mt-4">
            <button @click="initWordChoice" class="btn btn-secondary">Reset Word Choice</button>
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
            @click="focusTypeBox"
            @keydown="handleTypeKeydown"
            @focus="focusTypeBox"
            @blur="handleTypeBlur"
          >
            <!-- Invisible input for mobile keyboard invocation & text capture -->
            <input
              ref="typeInputRef"
              type="text"
              class="invisible-typing-input"
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
            <span v-if="!typeCompleted && typeBoxFocused" class="type-cursor">|</span>
            <div v-if="!typeBoxFocused && !typeCompleted && typedChars.length === 0" class="type-focus-hint" @click.stop="focusTypeBox">
              Click or tap here to start typing…
            </div>
          </div>

          <div class="text-center mt-4">
            <p v-if="typeCompleted" class="feedback-message text-success fade-in">
              Perfect! You typed the verse perfectly.
            </p>
            <button
              v-if="typedChars.length > 0"
              @click="initType(); nextTick(() => focusTypeBox())"
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
            @click="focusTypeFirstBox"
            @keydown="handleTypeFirstKeydown"
            @focus="focusTypeFirstBox"
            @blur="handleTypeFirstBlur"
          >
            <!-- Invisible input for mobile keyboard invocation & text capture -->
            <input
              ref="typeFirstInputRef"
              type="text"
              class="invisible-typing-input"
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
            <div v-if="!typeFirstBoxFocused && !typeFirstCompleted && typeFirstCurrentIndex === 0" class="type-focus-hint" @click.stop="focusTypeFirstBox">
              Click or tap here to start typing…
            </div>
          </div>

          <div class="text-center mt-4">
            <p v-if="typeFirstCompleted" class="feedback-message text-success fade-in">
              Perfect! You completed the verse!
            </p>
            <button
              v-if="typeFirstCurrentIndex > 0"
              @click="initTypeFirst(); nextTick(() => focusTypeFirstBox())"
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
import { generateWordOptions } from '@/composables/useScriptureMemory'

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
  { id: 'bbe', label: 'Bible in Basic English (BBE)', name: 'Bible in Basic English', abbr: 'BBE' }
]

const inputMode = ref('translation') // 'translation' | 'custom'
const customTextareaRef = ref(null)

const referenceInput = ref('John 3:16')
const selectedTranslation = ref('niv2011')
const customText = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const hasLoadedVerse = ref(false)

const setInputMode = (mode) => {
  inputMode.value = mode
  errorMessage.value = ''
  if (mode === 'custom') {
    nextTick(() => {
      customTextareaRef.value?.focus()
    })
  }
}

const switchToCustomFromDropdown = () => {
  closeTranslationDropdown()
  setInputMode('custom')
}

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
  { id: 'word-choice', label: 'Word Choice' },
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
      focusTypeBox()
    })
  }
  if (tabId === 'type-first') {
    initTypeFirst()
    nextTick(() => {
      focusTypeFirstBox()
    })
  }
}

// Bible Books Metadata & Client-Side Parser
const ALL_BOOKS = [
  { id: 'GEN', num: 1, name: 'Genesis', aliases: ['gen', 'genesis', 'ge', 'gn'] },
  { id: 'EXO', num: 2, name: 'Exodus', aliases: ['ex', 'exo', 'exod', 'exodus'] },
  { id: 'LEV', num: 3, name: 'Leviticus', aliases: ['lev', 'leviticus', 'le', 'lv'] },
  { id: 'NUM', num: 4, name: 'Numbers', aliases: ['num', 'numbers', 'nu', 'nm', 'nb'] },
  { id: 'DEU', num: 5, name: 'Deuteronomy', aliases: ['deut', 'deu', 'deuteronomy', 'dt'] },
  { id: 'JOS', num: 6, name: 'Joshua', aliases: ['josh', 'jos', 'joshua'] },
  { id: 'JDG', num: 7, name: 'Judges', aliases: ['judg', 'jdg', 'judges', 'jgs'] },
  { id: 'RUT', num: 8, name: 'Ruth', aliases: ['ruth', 'rut', 'rth'] },
  { id: '1SA', num: 9, name: '1 Samuel', aliases: ['1sam', '1 sam', '1 samuel', '1sa', '1 s', '1s'] },
  { id: '2SA', num: 10, name: '2 Samuel', aliases: ['2sam', '2 sam', '2 samuel', '2sa', '2 s', '2s'] },
  { id: '1KI', num: 11, name: '1 Kings', aliases: ['1ki', '1 ki', '1 kings', '1k', '1 k'] },
  { id: '2KI', num: 12, name: '2 Kings', aliases: ['2ki', '2 ki', '2 kings', '2k', '2 k'] },
  { id: '1CH', num: 13, name: '1 Chronicles', aliases: ['1ch', '1 ch', '1 chron', '1 chronicles', '1chr'] },
  { id: '2CH', num: 14, name: '2 Chronicles', aliases: ['2ch', '2 ch', '2 chron', '2 chronicles', '2chr'] },
  { id: 'EZR', num: 15, name: 'Ezra', aliases: ['ezr', 'ezra'] },
  { id: 'NEH', num: 16, name: 'Nehemiah', aliases: ['neh', 'nehemiah'] },
  { id: 'EST', num: 17, name: 'Esther', aliases: ['est', 'esth', 'esther'] },
  { id: 'JOB', num: 18, name: 'Job', aliases: ['job', 'jb'] },
  { id: 'PSA', num: 19, name: 'Psalms', aliases: ['ps', 'psa', 'psalm', 'psalms', 'psm', 'pss'] },
  { id: 'PRO', num: 20, name: 'Proverbs', aliases: ['pro', 'prov', 'proverbs', 'prv'] },
  { id: 'ECC', num: 21, name: 'Ecclesiastes', aliases: ['ecc', 'eccl', 'ecclesiastes', 'qoh'] },
  { id: 'SNG', num: 22, name: 'Song of Solomon', aliases: ['song', 'sng', 'song of solomon', 'song of songs', 'sos', 'canticle'] },
  { id: 'ISA', num: 23, name: 'Isaiah', aliases: ['isa', 'is', 'isaiah'] },
  { id: 'JER', num: 24, name: 'Jeremiah', aliases: ['jer', 'jeremiah', 'jr'] },
  { id: 'LAM', num: 25, name: 'Lamentations', aliases: ['lam', 'lamentations'] },
  { id: 'EZK', num: 26, name: 'Ezekiel', aliases: ['ezk', 'ezek', 'ezekiel'] },
  { id: 'DAN', num: 27, name: 'Daniel', aliases: ['dan', 'daniel', 'dn'] },
  { id: 'HOS', num: 28, name: 'Hosea', aliases: ['hos', 'hosea'] },
  { id: 'JOL', num: 29, name: 'Joel', aliases: ['jol', 'joel', 'jl'] },
  { id: 'AMO', num: 30, name: 'Amos', aliases: ['amo', 'amos', 'am'] },
  { id: 'OBA', num: 31, name: 'Obadiah', aliases: ['oba', 'obad', 'obadiah', 'ob'] },
  { id: 'JON', num: 32, name: 'Jonah', aliases: ['jon', 'jonah', 'jnh'] },
  { id: 'MIC', num: 33, name: 'Micah', aliases: ['mic', 'micah'] },
  { id: 'NAM', num: 34, name: 'Nahum', aliases: ['nam', 'nah', 'nahum'] },
  { id: 'HAB', num: 35, name: 'Habakkuk', aliases: ['hab', 'habakkuk'] },
  { id: 'ZEP', num: 36, name: 'Zephaniah', aliases: ['zep', 'zeph', 'zephaniah'] },
  { id: 'HAG', num: 37, name: 'Haggai', aliases: ['hag', 'haggai'] },
  { id: 'ZEC', num: 38, name: 'Zechariah', aliases: ['zec', 'zech', 'zechariah'] },
  { id: 'MAL', num: 39, name: 'Malachi', aliases: ['mal', 'malachi'] },
  { id: 'MAT', num: 40, name: 'Matthew', aliases: ['mat', 'matt', 'matthew', 'mt'] },
  { id: 'MRK', num: 41, name: 'Mark', aliases: ['mrk', 'mk', 'mark'] },
  { id: 'LUK', num: 42, name: 'Luke', aliases: ['luk', 'lk', 'luke'] },
  { id: 'JHN', num: 43, name: 'John', aliases: ['jhn', 'jn', 'john'] },
  { id: 'ACT', num: 44, name: 'Acts', aliases: ['act', 'acts'] },
  { id: 'ROM', num: 45, name: 'Romans', aliases: ['rom', 'ro', 'rm', 'romans'] },
  { id: '1CO', num: 46, name: '1 Corinthians', aliases: ['1co', '1 co', '1 cor', '1 corinthians', '1cor'] },
  { id: '2CO', num: 47, name: '2 Corinthians', aliases: ['2co', '2 co', '2 cor', '2 corinthians', '2cor'] },
  { id: 'GAL', num: 48, name: 'Galatians', aliases: ['gal', 'galatians'] },
  { id: 'EPH', num: 49, name: 'Ephesians', aliases: ['eph', 'ephesians'] },
  { id: 'PHP', num: 50, name: 'Philippians', aliases: ['php', 'phil', 'philippians'] },
  { id: 'COL', num: 51, name: 'Colossians', aliases: ['col', 'colossians'] },
  { id: '1TH', num: 52, name: '1 Thessalonians', aliases: ['1th', '1 th', '1 thess', '1 thessalonians', '1thess'] },
  { id: '2TH', num: 53, name: '2 Thessalonians', aliases: ['2th', '2 th', '2 thess', '2 thessalonians', '2thess'] },
  { id: '1TI', num: 54, name: '1 Timothy', aliases: ['1ti', '1 ti', '1 tim', '1 timothy', '1tim'] },
  { id: '2TI', num: 55, name: '2 Timothy', aliases: ['2ti', '2 ti', '2 tim', '2 timothy', '2tim'] },
  { id: 'TIT', num: 56, name: 'Titus', aliases: ['tit', 'titus'] },
  { id: 'PHM', num: 57, name: 'Philemon', aliases: ['phm', 'philem', 'philemon'] },
  { id: 'HEB', num: 58, name: 'Hebrews', aliases: ['heb', 'hebrews'] },
  { id: 'JAS', num: 59, name: 'James', aliases: ['jas', 'james', 'jm'] },
  { id: '1PE', num: 60, name: '1 Peter', aliases: ['1pe', '1 pe', '1 pet', '1 peter', '1pet'] },
  { id: '2PE', num: 61, name: '2 Peter', aliases: ['2pe', '2 pe', '2 pet', '2 peter', '2pet'] },
  { id: '1JN', num: 62, name: '1 John', aliases: ['1jn', '1 jn', '1 john', '1john'] },
  { id: '2JN', num: 63, name: '2 John', aliases: ['2jn', '2 jn', '2 john', '2john'] },
  { id: '3JN', num: 64, name: '3 John', aliases: ['3jn', '3 jn', '3 john', '3john'] },
  { id: 'JUD', num: 65, name: 'Jude', aliases: ['jud', 'jude', 'jd'] },
  { id: 'REV', num: 66, name: 'Revelation', aliases: ['rev', 'revelation', 'rv'] }
]

const aliasLookup = {}
for (const b of ALL_BOOKS) {
  for (const a of b.aliases) {
    aliasLookup[a.toLowerCase()] = b
    aliasLookup[a.replace(/\s+/g, '').toLowerCase()] = b
  }
}

const parseBibleReference = (str) => {
  const clean = str.trim().replace(/\s+/g, ' ')
  // Matches "1 John 1", "John 3:16", "Romans 8:28-30", "Psalm 23"
  const m = clean.match(/^((?:[1-3]\s+)?[a-zA-Z\s]+?)\s*(\d+)(?:[\s:]+(\d+)(?:\s*-\s*(\d+))?)?$/)
  if (!m) return null
  const rawBook = m[1].trim().toLowerCase().replace(/\./g, '')
  const book = aliasLookup[rawBook] || aliasLookup[rawBook.replace(/\s+/g, '')]
  if (!book) return null
  const chapter = parseInt(m[2], 10)
  const hasVerse = !!m[3]
  const isFullChapter = !hasVerse
  const startVerse = hasVerse ? parseInt(m[3], 10) : 1
  const endVerse = hasVerse ? (m[4] ? parseInt(m[4], 10) : startVerse) : null
  const refDisplay = isFullChapter
    ? `${book.name} ${chapter}`
    : (startVerse === endVerse
        ? `${book.name} ${chapter}:${startVerse}`
        : `${book.name} ${chapter}:${startVerse}-${endVerse}`)
  return { id: book.id, num: book.num, name: book.name, chapter, startVerse, endVerse, isFullChapter, refDisplay }
}

const cleanBollsVerseText = (rawText) => {
  const parts = rawText.split(/<br\s*\/?>/i)
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
  let text = parts.slice(i).join(' ')
  text = text.replace(/<sup[^>]*>.*?<\/sup>/gi, '')
  text = text.replace(/^<b>.*?<\/b>\s*/i, '')
  return text.replace(/<[^>]*>?/gm, '').trim()
}

// In-memory cache for loaded NIV books
const nivCache = {}

// ==================== FETCH VERSE ====================
const fetchVerse = async () => {
  errorMessage.value = ''
  const refQuery = referenceInput.value.trim()

  if (!refQuery) {
    errorMessage.value = inputMode.value === 'custom'
      ? 'Please enter a reference or passage title.'
      : 'Please enter a Bible reference.'
    return
  }

  isLoading.value = true

  if (inputMode.value === 'custom') {
    const rawCustom = customText.value.trim()
    if (!rawCustom) {
      errorMessage.value = 'Please paste your scripture text.'
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
    const parsed = parseBibleReference(refQuery)
    if (!parsed) {
      throw new Error(`Could not parse "${refQuery}". Please enter a reference like "John 3:16" or "Romans 8:28-30".`)
    }

    // 1. NIV (2011) and NIV (1984) via local clean JSON
    if (selectedTranslation.value === 'niv2011' || selectedTranslation.value === 'niv1984') {
      const nivFolder = selectedTranslation.value === 'niv2011' ? 'niv2011' : 'niv1984'
      const cacheKey = `${nivFolder}_${parsed.id}`
      let bookJson = nivCache[cacheKey]

      if (!bookJson) {
        const baseUrl = import.meta.env.BASE_URL || '/'
        const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
        const localUrl = `${cleanBase}data/translations/${nivFolder}/${parsed.id}.json`
        const res = await fetch(localUrl)
        if (!res.ok) {
          throw new Error(`Failed to load ${selectedTranslation.value.toUpperCase()} data for ${parsed.name}.`)
        }
        bookJson = await res.json()
        nivCache[cacheKey] = bookJson
      }

      const chapterData = bookJson[String(parsed.chapter)]
      if (!chapterData) {
        throw new Error(`Chapter ${parsed.chapter} not found in ${parsed.name}.`)
      }

      const textParts = []
      if (parsed.isFullChapter) {
        const verseNumbers = Object.keys(chapterData).sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
        for (const vNum of verseNumbers) {
          if (chapterData[vNum]) {
            textParts.push(chapterData[vNum])
          }
        }
      } else {
        for (let v = parsed.startVerse; v <= parsed.endVerse; v++) {
          const vText = chapterData[String(v)]
          if (vText) {
            textParts.push(vText)
          } else {
            throw new Error(`Verse ${parsed.name} ${parsed.chapter}:${v} not found in ${selectedTranslation.value === 'niv2011' ? 'NIV' : 'NIV (1984)'}.`)
          }
        }
      }

      if (textParts.length === 0) {
        throw new Error(`No verses found for ${parsed.refDisplay}.`)
      }

      currentVerse.value = textParts.join(' ').trim().replace(/\s+/g, ' ')
      currentRef.value = parsed.refDisplay
      hasLoadedVerse.value = true
      initializeDashboard()
      return
    }

    // 2. Bolls.life translations (NASB 1995, ESV, CSB, NKJV, NLT, NET, AMP, KJV, ASV, WEB)
    const bollsMap = {
      esv: 'ESV',
      csb: 'CSB17',
      nasb: 'NASB',
      nkjv: 'NKJV',
      nlt: 'NLT',
      net: 'NET',
      amp: 'AMP',
      kjv: 'KJV',
      asv: 'ASV',
      web: 'WEB'
    }

    const bollsTrans = bollsMap[selectedTranslation.value]
    if (bollsTrans) {
      const bollsResp = await fetch(`https://bolls.life/get-chapter/${bollsTrans}/${parsed.num}/${parsed.chapter}/`)
      if (!bollsResp.ok) {
        throw new Error(`Could not fetch chapter from scripture service (status ${bollsResp.status}).`)
      }
      const bollsData = await bollsResp.json()
      if (!Array.isArray(bollsData)) {
        throw new Error('Invalid response format from scripture service.')
      }

      let verses = bollsData
      if (!parsed.isFullChapter) {
        verses = bollsData.filter(v => v.verse >= parsed.startVerse && v.verse <= parsed.endVerse)
      }
      if (verses.length === 0) {
        throw new Error(parsed.isFullChapter
          ? `No verses found for ${parsed.name} chapter ${parsed.chapter}.`
          : `Verse range ${parsed.chapter}:${parsed.startVerse}-${parsed.endVerse} not found in ${parsed.name}.`
        )
      }

      const cleanedParts = verses.map(v => cleanBollsVerseText(v.text))
      currentVerse.value = cleanedParts.join(' ').trim().replace(/\s+/g, ' ')
      currentRef.value = parsed.refDisplay
      hasLoadedVerse.value = true
      initializeDashboard()
      return
    }

    // 3. Fallback for any other translation (e.g. BBE)
    const response = await fetch(`https://bible-api.com/${encodeURIComponent(refQuery)}?translation=${selectedTranslation.value}`)
    if (!response.ok) {
      throw new Error(`Scripture service returned status ${response.status}.`)
    }
    const data = await response.json()
    if (data.error) throw new Error(data.error)
    if (data.verses && data.verses.length > 0) {
      data.text = data.verses.map(v => v.text.trim()).join(' ')
    }
    currentVerse.value = data.text.trim().replace(/\s+/g, ' ')
    currentRef.value = data.reference || parsed.refDisplay
    hasLoadedVerse.value = true
    initializeDashboard()
  } catch (err) {
    console.error('fetchVerse error:', err)
    errorMessage.value = err.message || "Could not fetch that verse automatically. Ensure the reference is valid, or use 'Paste Custom Text' for other versions."
  } finally {
    isLoading.value = false
  }
}

const initializeDashboard = () => {
  currentTab.value = 'vanish'
  initVanish(0)
  initFill(0.25)
  initWordChoice()
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

// ==================== 3. WORD CHOICE MODE ====================
const wordChoiceSlots = ref([])
const wordChoiceCurrentIndex = ref(0)

const wordChoiceCompleted = computed(() => {
  if (wordChoiceSlots.value.length === 0) return false
  return wordChoiceSlots.value.every(s => s.status === 'correct')
})

const initWordChoice = () => {
  const words = currentVerse.value ? currentVerse.value.split(/\s+/) : []
  wordChoiceCurrentIndex.value = 0
  wordChoiceSlots.value = words.map((word, idx) => {
    const options = generateWordOptions(word, words, idx)
    return {
      word,
      options,
      status: 'pending', // 'pending' | 'correct' | 'error'
      errorOption: ''
    }
  })
}

const guessWordChoice = (slotIndex, option) => {
  const slot = wordChoiceSlots.value[slotIndex]
  if (!slot || slot.status === 'correct') return

  const optClean = cleanString(option)
  const targetClean = cleanString(slot.word)

  if (optClean === targetClean) {
    slot.status = 'correct'
    slot.errorOption = ''
    const nextPending = wordChoiceSlots.value.findIndex((s, i) => i > slotIndex && s.status === 'pending')
    if (nextPending !== -1) {
      wordChoiceCurrentIndex.value = nextPending
    }
  } else {
    slot.status = 'error'
    slot.errorOption = option
    setTimeout(() => {
      if (slot.status === 'error') {
        slot.status = 'pending'
        slot.errorOption = ''
      }
    }, 600)
  }
}

const setWordChoiceIndex = (idx) => {
  if (idx >= 0 && idx < wordChoiceSlots.value.length && wordChoiceSlots.value[idx].status !== 'correct') {
    wordChoiceCurrentIndex.value = idx
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
const typeInputRef = ref(null)
const typeBoxFocused = ref(false)

let lastTypeProcessTime = 0
let lastTypeProcessChar = ''

const initType = () => {
  typeMode.value = 'show'
  typedChars.value = []
}

const toggleTypeMode = () => {
  typeMode.value = typeMode.value === 'show' ? 'hide' : 'show'
  nextTick(() => {
    focusTypeBox()
  })
}

const focusTypeBox = () => {
  typeBoxFocused.value = true
  typeInputRef.value?.focus()
}

const handleTypeBlur = (e) => {
  if (e.relatedTarget !== typeInputRef.value && e.relatedTarget !== typeBoxRef.value) {
    typeBoxFocused.value = false
  }
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

const checkTypeComplete = () => {
  nextTick(() => {
    if (typeCompleted.value) {
      typeInputRef.value?.blur()
      typeBoxFocused.value = false
    }
  })
}

const processTypeChar = (char) => {
  if (!char) return
  char = char.toLowerCase()
  if (!/[a-zA-Z0-9]/.test(char)) return

  const now = Date.now()
  if (now - lastTypeProcessTime < 40 && lastTypeProcessChar === char) {
    return
  }
  lastTypeProcessTime = now
  lastTypeProcessChar = char

  const alphaMap = verseAlphaMap.value
  const currentLen = typedChars.value.length

  // If the last typed character was wrong, replace it instead of appending
  if (currentLen > 0 && currentLen <= alphaMap.length) {
    const lastIdx = currentLen - 1
    const lastExpected = alphaMap[lastIdx].char
    const lastTyped = typedChars.value[lastIdx]
    if (lastTyped !== lastExpected) {
      // Replace the wrong character
      typedChars.value[lastIdx] = char
      checkTypeComplete()
      return
    }
  }

  // If already completed, don't accept more input
  if (currentLen >= alphaMap.length) return

  typedChars.value.push(char)
  checkTypeComplete()
}

const processTypeBackspace = () => {
  const now = Date.now()
  if (now - lastTypeProcessTime < 40 && lastTypeProcessChar === 'Backspace') {
    return
  }
  lastTypeProcessTime = now
  lastTypeProcessChar = 'Backspace'

  if (typedChars.value.length > 0) {
    typedChars.value.pop()
  }
}

const handleTypeKeydown = (event) => {
  // Ignore modifier combos (Ctrl+C, Cmd+A, etc.)
  if (event.ctrlKey || event.metaKey || event.altKey) return

  const key = event.key

  if (key === 'Backspace') {
    event.preventDefault()
    processTypeBackspace()
    return
  }

  // Ignore non-printable keys
  if (key.length !== 1) return

  // Only accept alphanumeric input
  if (!/[a-zA-Z0-9]/.test(key)) return

  event.preventDefault()
  processTypeChar(key)
}

const handleTypeInput = (event) => {
  const inputType = event.inputType
  if (inputType === 'deleteContentBackward') {
    processTypeBackspace()
  } else if (event.data) {
    for (const char of event.data) {
      processTypeChar(char)
    }
  } else if (event.target && event.target.value) {
    for (const char of event.target.value) {
      processTypeChar(char)
    }
  }
  if (event.target) {
    event.target.value = ''
  }
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
const typeFirstInputRef = ref(null)
const typeFirstBoxFocused = ref(false)
const typeFirstCurrentIndex = ref(0)
const typeFirstWordStates = ref([])

let lastTypeFirstProcessTime = 0
let lastTypeFirstProcessChar = ''

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
  typeFirstBoxFocused.value = true
  typeFirstInputRef.value?.focus()
}

const handleTypeFirstBlur = (e) => {
  if (e.relatedTarget !== typeFirstInputRef.value && e.relatedTarget !== typeFirstBoxRef.value) {
    typeFirstBoxFocused.value = false
  }
}

const checkTypeFirstComplete = () => {
  nextTick(() => {
    if (typeFirstCompleted.value) {
      typeFirstInputRef.value?.blur()
      typeFirstBoxFocused.value = false
    }
  })
}

const processTypeFirstChar = (char) => {
  if (!char) return
  char = char.toLowerCase()
  if (!/[a-zA-Z0-9]/.test(char)) return
  if (typeFirstCompleted.value) return

  const now = Date.now()
  if (now - lastTypeFirstProcessTime < 40 && lastTypeFirstProcessChar === char) {
    return
  }
  lastTypeFirstProcessTime = now
  lastTypeFirstProcessChar = char

  const idx = typeFirstCurrentIndex.value
  if (idx >= typeFirstWordStates.value.length) return

  const wordObj = typeFirstWordStates.value[idx]
  const expectedChar = getFirstAlpha(wordObj.word)

  if (char === expectedChar) {
    wordObj.status = 'correct'
    typeFirstCurrentIndex.value++
    checkTypeFirstComplete()
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

const handleTypeFirstKeydown = (event) => {
  // Ignore modifier combos
  if (event.ctrlKey || event.metaKey || event.altKey) return

  // Ignore non-printable keys
  if (event.key.length !== 1) return
  if (!/[a-zA-Z0-9]/.test(event.key)) return

  event.preventDefault()
  processTypeFirstChar(event.key)
}

const handleTypeFirstInput = (event) => {
  if (event.data) {
    for (const char of event.data) {
      processTypeFirstChar(char)
    }
  } else if (event.target && event.target.value) {
    for (const char of event.target.value) {
      processTypeFirstChar(char)
    }
  }
  if (event.target) {
    event.target.value = ''
  }
}

const revealCurrentWord = () => {
  if (typeFirstCompleted.value) return
  const idx = typeFirstCurrentIndex.value
  if (idx >= typeFirstWordStates.value.length) return

  typeFirstWordStates.value[idx].status = 'revealed'
  typeFirstCurrentIndex.value++
  checkTypeFirstComplete()
  nextTick(() => {
    focusTypeFirstBox()
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
  font-family: var(--heading-font);
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.mobile-cta {
  margin: 0.85rem 0 0;
}

.mobile-cta-link {
  display: inline-block;
  font-family: var(--body-font);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent-color);
  background-color: var(--disclaimer-bg);
  border: 1px solid var(--border-color);
  padding: 0.45rem 1rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all var(--transition-base);
}

.mobile-cta-link:hover {
  background-color: #e5e5e5;
  border-color: var(--accent-color);
  text-decoration: none;
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
  background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);
  color: #ffffff;
  padding: 2.25rem 1.5rem;
  text-align: center;
}

.dashboard-header h2 {
  margin: 0;
  font-family: var(--heading-font);
  font-size: 1.8rem;
  font-weight: 700;
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
  font-family: var(--body-font);
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
  font-family: var(--scripture-font);
  font-size: 1.4rem;
  line-height: 2.2;
  color: var(--text-main);
  padding: 0.5rem 0;
}

.game-instructions {
  text-align: center;
  font-family: var(--body-font);
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
  font-family: var(--body-font);
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
  font-family: var(--body-font);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all var(--transition-base);
}

.toolbar-btn:hover,
.toolbar-btn-active {
  background: #e5e5e5;
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
  color: #d4d4d8;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.vanish-word-hidden:hover {
  color: #a1a1aa;
}

/* Fill Game */
.fill-input {
  display: inline-block;
  border: none;
  border-bottom: 2px solid #a1a1aa;
  background-color: var(--bg-subtle);
  margin: 0 4px;
  text-align: center;
  font-family: var(--scripture-font);
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
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

/* Word Choice Game */
.wc-progress-desktop {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  row-gap: 0.75rem;
  align-items: center;
  min-height: 80px;
}

.wc-word-slot {
  display: inline-block;
  cursor: pointer;
  padding: 0.1rem 0.3rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  user-select: none;
}

.wc-slot-solved {
  color: var(--success-color);
  font-weight: bold;
}

.wc-slot-active {
  background-color: rgba(37, 99, 235, 0.14);
  border: 1.5px solid var(--accent-color);
  color: var(--accent-color);
  font-weight: bold;
}

.wc-slot-pending {
  color: var(--text-light);
}

.wc-blank {
  display: inline-block;
  min-width: 1.8rem;
  text-align: center;
  font-weight: 700;
}

.wc-options-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.wc-options-label {
  text-align: center;
  font-family: var(--body-font);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-light);
  margin: 0 0 1rem;
}

.wc-options-bank {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
}

.wc-option-btn {
  background: #ffffff;
  border: 1.5px solid var(--border-color);
  padding: 0.55rem 1.2rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  font-size: 1.1rem;
  font-family: var(--scripture-font);
  color: var(--text-main);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-xs);
}

.wc-option-btn:hover {
  border-color: var(--accent-color);
  background: #fafafa;
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.wc-option-error {
  background-color: var(--error-bg) !important;
  border-color: #f87171 !important;
  color: var(--error-color) !important;
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
  color: #d4d4d8;
}

.type-char-punct {
  color: #a1a1aa;
}

.type-display-box:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
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

.invisible-typing-input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: text;
  border: none;
  background: transparent;
  color: transparent;
  caret-color: transparent;
  font-size: 16px; /* Prevents auto-zoom on iOS */
  padding: 0;
  margin: 0;
}

.invisible-typing-input:disabled {
  pointer-events: none;
}

.type-focus-hint {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(250, 250, 250, 0.85);
  border-radius: var(--radius-md);
  font-family: var(--body-font);
  font-size: 1rem;
  color: var(--text-light);
  cursor: text;
  transition: opacity var(--transition-base);
}

.type-focus-hint:hover {
  background: rgba(250, 250, 250, 0.7);
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
  font-family: var(--scripture-font);
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
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
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
  background-color: #f5f5f5;
  color: var(--accent-color);
}

.translation-option-item.is-selected {
  font-weight: 600;
  color: var(--accent-color);
  background-color: rgba(37, 99, 235, 0.08);
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
}

.no-results-msg {
  margin: 0 0 0.65rem 0;
  font-style: italic;
}

.btn-switch-custom-inline {
  display: inline-block;
  padding: 0.45rem 0.9rem;
  background-color: var(--accent-color);
  color: #ffffff;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--transition-fast);
}

.btn-switch-custom-inline:hover {
  background-color: #1d4ed8;
}

/* Input Mode Segmented Control */
.input-mode-segmented-control {
  display: flex;
  background-color: var(--disclaimer-bg);
  border: 1px solid var(--border-color);
  padding: 0.35rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  gap: 0.35rem;
}

.mode-pill-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1rem;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--body-font);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-light);
  cursor: pointer;
  transition: all var(--transition-base);
}

.mode-pill-btn:hover {
  color: var(--text-main);
  background-color: rgba(255, 255, 255, 0.5);
}

.mode-pill-btn.is-active {
  background-color: #ffffff;
  color: var(--accent-color);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
}

.mode-icon {
  flex-shrink: 0;
  color: currentColor;
}

/* Translation Helper Line */
.translation-helper-line {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.45rem;
  font-size: 0.82rem;
  color: var(--text-light);
  flex-wrap: wrap;
}

.inline-text-action {
  background: none;
  border: none;
  padding: 0;
  color: var(--accent-color);
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-size: 0.82rem;
  font-family: inherit;
  transition: color var(--transition-fast);
}

.inline-text-action:hover {
  color: #1d4ed8;
}

/* Translation Dropdown Footer */
.translation-dropdown-footer {
  border-top: 1px solid var(--border-color);
  background-color: #fafafa;
  padding: 0.5rem 0.75rem;
  flex-shrink: 0;
}

.dropdown-footer-custom-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.65rem;
  background-color: #ffffff;
  border: 1px dashed var(--accent-color);
  border-radius: var(--radius-sm);
  color: var(--accent-color);
  font-size: 0.82rem;
  font-family: inherit;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dropdown-footer-custom-btn:hover {
  background-color: rgba(37, 99, 235, 0.08);
  border-color: var(--accent-color);
}

.footer-btn-lead {
  color: var(--text-light);
  font-size: 0.8rem;
}

.footer-btn-cta {
  font-weight: 600;
  color: var(--accent-color);
}

/* Custom Text Mode Section */
.custom-input-section {
  width: 100%;
}

.custom-text-field {
  margin-top: 1rem;
}

.field-label-group {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.field-label-group .form-label {
  margin-bottom: 0;
}

.field-subtitle {
  font-size: 0.82rem;
  color: var(--text-light);
}

.custom-textarea {
  font-family: var(--scripture-font);
  font-size: 1.05rem;
  line-height: 1.6;
  resize: vertical;
  min-height: 110px;
}

/* Form Actions */
.form-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.switch-back-btn {
  font-size: 0.9rem;
  padding: 0.8rem 1.25rem;
}

/* Mobile Tabs Dropdown */
.mobile-tabs-dropdown {
  display: none;
  margin: 1.25rem 1.5rem 0;
}

.mobile-mode-label {
  display: block;
  font-family: var(--body-font);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mobile-select-wrapper {
  position: relative;
  width: 100%;
}

.mobile-mode-select {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  background-color: #ffffff;
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0.85rem 2.5rem 0.85rem 1.15rem;
  font-family: var(--body-font);
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-color);
  cursor: pointer;
  box-shadow: var(--shadow-xs);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.mobile-mode-select:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.mobile-select-chevron {
  position: absolute;
  right: 1.15rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--accent-color);
  display: inline-flex;
  align-items: center;
}

/* Responsive Media Queries */
@media (max-width: 768px) {
  .mode-pill-btn {
    font-size: 0.88rem;
    padding: 0.6rem 0.5rem;
  }

  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .form-actions .btn {
    width: 100%;
    text-align: center;
  }

  .desktop-tabs {
    display: none !important;
  }

  .mobile-tabs-dropdown {
    display: block;
    margin: 1.25rem 1rem 0;
  }

  .tab-content {
    padding: 1.5rem 1rem;
  }

  .type-display-box {
    padding: 1.25rem 1rem;
    min-height: 120px;
  }

  .game-text-display {
    font-size: 1.2rem;
    line-height: 2;
  }

  .dashboard-header {
    padding: 1.5rem 1rem;
  }

  .dashboard-header h2 {
    font-size: 1.5rem;
  }
}
</style>
