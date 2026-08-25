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
            <div class="form-col">
              <label for="translation-select" class="form-label">Translation</label>
              <select
                id="translation-select"
                v-model="selectedTranslation"
                class="form-control"
              >
                <option value="niv">New International Version (NIV)</option>
                <option value="esv">English Standard Version (ESV)</option>
                <option value="csb">Christian Standard Bible (CSB)</option>
                <option value="nasb">New American Standard Bible (NASB)</option>
                <option value="nkjv">New King James Version (NKJV)</option>
                <option value="nlt">New Living Translation (NLT)</option>
                <option value="net">New English Translation (NET)</option>
                <option value="amp">Amplified Bible (AMP)</option>
                <option value="web">World English Bible (WEB)</option>
                <option value="kjv">King James Version (KJV)</option>
                <option value="bbe">Bible in Basic English (BBE)</option>
                <option value="asv">American Standard Version (ASV)</option>
                <option value="ylt">Young's Literal Translation (YLT)</option>
                <option value="custom">Paste Custom Text</option>
              </select>
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
          <p class="game-instructions">Read aloud using only the first letters as hints. (Hover over a word to cheat!)</p>
          <div class="game-text-display tracking-wide">
            <span
              v-for="(item, idx) in firstLetterWords"
              :key="idx"
              class="first-letter-word"
              :title="item.original"
            >
              {{ item.masked }}{{ ' ' }}
            </span>
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

          <!-- Real-time Interactive Text Display -->
          <div class="game-text-display type-display-box">
            <span
              v-for="(charObj, idx) in typeDisplayCharacters"
              :key="idx"
              :class="charObj.cssClass"
            >
              {{ charObj.char }}
            </span>
          </div>

          <!-- Functional input box -->
          <textarea
            ref="typeInputRef"
            v-model="typedInput"
            rows="3"
            placeholder="Start typing the letters here..."
            class="form-control"
          ></textarea>

          <div class="text-center mt-4">
            <p v-if="typeCompleted" class="feedback-message text-success fade-in">
              🎉 Perfect! You typed the verse perfectly.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const referenceInput = ref('John 3:16')
const selectedTranslation = ref('kjv')
const customText = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const hasLoadedVerse = ref(false)

const currentVerse = ref('')
const currentRef = ref('')

const tabs = [
  { id: 'vanish', label: 'Vanish' },
  { id: 'fill', label: 'Fill in Blanks' },
  { id: 'scramble', label: 'Scramble' },
  { id: 'first-letter', label: 'First Letter' },
  { id: 'type', label: 'Type Full' }
]
const currentTab = ref('vanish')

// Helper
const cleanString = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

const switchTab = (tabId) => {
  currentTab.value = tabId
  if (tabId === 'type') {
    nextTick(() => {
      typeInputRef.value?.focus()
    })
  }
}

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
    let apiTranslation = selectedTranslation.value
    let isFallback = false
    let fallbackTranslation = ''

    const bollsTranslations = ['niv', 'esv', 'csb', 'nasb', 'nkjv', 'nlt', 'net', 'amp']
    if (bollsTranslations.includes(apiTranslation)) {
      if (apiTranslation === 'csb') {
        fallbackTranslation = 'CSB17'
      } else if (apiTranslation === 'niv') {
        fallbackTranslation = 'NIV2011'
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
      masked
    }
  })
}

// ==================== 5. TYPE FULL MODE ====================
const typeMode = ref('show')
const typedInput = ref('')
const typeInputRef = ref(null)

const initType = () => {
  typeMode.value = 'show'
  typedInput.value = ''
}

const toggleTypeMode = () => {
  typeMode.value = typeMode.value === 'show' ? 'hide' : 'show'
  nextTick(() => {
    typeInputRef.value?.focus()
  })
}

const typeDisplayCharacters = computed(() => {
  if (!currentVerse.value) return []

  const verse = currentVerse.value
  const cleanedTyped = typedInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  // Find activeIndex in currentVerse
  let activeIndex = verse.length
  let tempCount = 0
  for (let i = 0; i < verse.length; i++) {
    if (/[a-zA-Z0-9]/.test(verse[i])) {
      if (tempCount === cleanedTyped.length) {
        activeIndex = i
        break
      }
      tempCount++
    }
  }

  const result = []
  let typedIdx = 0

  for (let i = 0; i < verse.length; i++) {
    const char = verse[i]
    const isAlphanum = /[a-zA-Z0-9]/.test(char)
    let cssClass = ''

    if (isAlphanum) {
      if (i < activeIndex) {
        const targetChar = char.toLowerCase()
        const userChar = cleanedTyped[typedIdx]
        cssClass = userChar === targetChar ? 'type-char-correct' : 'type-char-error'
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
  const cleanedTyped = typedInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const targetCleanedLength = currentVerse.value.replace(/[^a-zA-Z0-9]/g, '').length
  if (cleanedTyped.length === targetCleanedLength && targetCleanedLength > 0) {
    return !typeDisplayCharacters.value.some((c) => c.cssClass === 'type-char-error')
  }
  return false
})
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 3rem 1rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.error-banner {
  background-color: var(--error-bg);
  color: var(--error-color);
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 0.95rem;
}

.dashboard-container {
  padding: 0;
  overflow: hidden;
}

.dashboard-header {
  background-color: var(--text-main);
  color: #ffffff;
  padding: 1.5rem;
  text-align: center;
}

.dashboard-header h2 {
  margin: 0;
  font-size: 1.8rem;
  color: #ffffff;
}

.tabs {
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid var(--border-color);
  background: #fafafa;
}

.tab-btn {
  flex: 1;
  padding: 1rem;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  color: var(--text-light);
  transition: all 0.2s ease;
  font-family: inherit;
}

.tab-btn:hover {
  color: var(--text-main);
}

.tab-active {
  color: var(--accent-color);
  border-bottom-color: var(--accent-color);
  background-color: #ffffff;
}

.tab-content {
  padding: 2rem;
}

.game-text-display {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.4rem;
  line-height: 2.2;
  color: var(--text-main);
}

.game-instructions {
  text-align: center;
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
  font-size: 0.9rem;
  color: var(--text-light);
  margin-right: 0.5rem;
}

.toolbar-btn {
  background: var(--disclaimer-bg);
  border: 1px solid #d0d7d9;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: inherit;
  transition: all 0.2s ease;
}

.toolbar-btn:hover,
.toolbar-btn-active {
  background: #dce3e5;
  border-color: var(--accent-color);
  color: var(--accent-color);
  font-weight: 600;
}

/* Vanish Game */
.vanish-word {
  display: inline-block;
  white-space: pre;
}

.vanish-word-hidden {
  color: #d1d5db;
  cursor: pointer;
  transition: color 0.2s ease;
}

.vanish-word-hidden:hover {
  color: #9ca3af;
}

/* Fill Game */
.fill-input {
  display: inline-block;
  border: none;
  border-bottom: 2px solid #9ca3af;
  background-color: #f3f4f6;
  margin: 0 4px;
  text-align: center;
  font-family: Georgia, "Times New Roman", serif;
  font-size: inherit;
  color: var(--accent-color);
  border-radius: 4px 4px 0 0;
  padding: 0 2px;
  transition: all 0.2s ease;
}

.fill-input:focus {
  outline: none;
  border-bottom-color: var(--accent-color);
  background-color: #ffffff;
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
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: Georgia, "Times New Roman", serif;
  transition: all 0.2s ease;
}

.scramble-btn:hover:not(:disabled) {
  border-color: var(--accent-color);
  background: #f8fafc;
}

.scramble-btn-used {
  background: #f3f4f6;
  color: transparent;
  border-color: #e5e7eb;
  cursor: default;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
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
  border-bottom: 2px solid #d1d5db;
  margin: 0 0.2rem;
}

/* First Letter Game */
.first-letter-word {
  cursor: help;
  transition: color 0.2s ease;
}

.first-letter-word:hover {
  color: var(--accent-color);
}

/* Type Full Game */
.type-display-box {
  background-color: var(--disclaimer-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem 2rem;
  min-height: 140px;
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  word-break: break-word;
}

.type-char-correct {
  color: var(--success-color);
  font-weight: bold;
}

.type-char-error {
  color: var(--error-color);
  background-color: var(--error-bg);
  border-radius: 2px;
  padding: 0 2px;
}

.type-char-future {
  color: #cbd5e1;
}

.type-char-punct {
  color: #94a3b8;
}

.feedback-message {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
