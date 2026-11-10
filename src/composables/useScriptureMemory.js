import { ref, computed, nextTick } from 'vue'

export const TRANSLATIONS = [
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

export const ALL_BOOKS = [
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

export const parseBibleReference = (str) => {
  if (!str) return null
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

export const cleanBollsVerseText = (rawText) => {
  if (!rawText) return ''
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

export const cleanString = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

const nivCache = {}

export function useScriptureMemory() {
  const inputMode = ref('translation') // 'translation' | 'custom'
  const referenceInput = ref('John 3:16')
  const selectedTranslation = ref('niv2011')
  const customText = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('')
  const hasLoadedVerse = ref(false)

  const currentVerse = ref('')
  const currentRef = ref('')
  const currentTab = ref('vanish')

  const selectedTranslationLabel = computed(() => {
    const found = TRANSLATIONS.find(t => t.id === selectedTranslation.value)
    return found ? found.label : selectedTranslation.value
  })

  const selectedTranslationAbbr = computed(() => {
    const found = TRANSLATIONS.find(t => t.id === selectedTranslation.value)
    return found ? (found.abbr || found.name) : selectedTranslation.value
  })

  // ==================== FETCH VERSE ====================
  const fetchVerse = async () => {
    errorMessage.value = ''
    const refQuery = referenceInput.value.trim()

    if (!refQuery) {
      errorMessage.value = inputMode.value === 'custom'
        ? 'Please enter a reference or passage title.'
        : 'Please enter a Bible reference.'
      return false
    }

    isLoading.value = true

    if (inputMode.value === 'custom') {
      const rawCustom = customText.value.trim()
      if (!rawCustom) {
        errorMessage.value = 'Please paste your scripture text.'
        isLoading.value = false
        return false
      }
      currentVerse.value = rawCustom.replace(/\s+/g, ' ')
      currentRef.value = refQuery
      hasLoadedVerse.value = true
      isLoading.value = false
      initializeDashboard()
      return true
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
        return true
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
        return true
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
      return true
    } catch (err) {
      console.error('fetchVerse error:', err)
      errorMessage.value = err.message || "Could not fetch that verse automatically. Ensure the reference is valid, or use 'Paste Custom Text' for other versions."
      return false
    } finally {
      isLoading.value = false
    }
  }

  const initializeDashboard = () => {
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
    const rawWords = currentVerse.value ? currentVerse.value.split(/\s+/) : []
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

    const rawWords = currentVerse.value ? currentVerse.value.split(/\s+/) : []
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
    const words = currentVerse.value ? currentVerse.value.split(/\s+/) : []
    scrambleTarget.value = words
    scrambleBank.value = words
      .map((word, idx) => ({ word, originalIndex: idx, used: false, error: false }))
      .sort(() => Math.random() - 0.5)
    scrambleExpectedIndex.value = 0
  }

  const guessScramble = (item) => {
    if (item.used) return

    if (item.word === scrambleTarget.value[scrambleExpectedIndex.value]) {
      item.used = true
      scrambleExpectedIndex.value++
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
    const rawWords = currentVerse.value ? currentVerse.value.split(/\s+/) : []
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
    if (firstLetterWords.value[idx]) {
      firstLetterWords.value[idx].revealed = !firstLetterWords.value[idx].revealed
    }
  }

  // ==================== 5. TYPE FULL MODE ====================
  const typeMode = ref('show')
  const typedChars = ref([])
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
  }

  const verseAlphaMap = computed(() => {
    const verse = currentVerse.value || ''
    const positions = []
    for (let i = 0; i < verse.length; i++) {
      if (/[a-zA-Z0-9]/.test(verse[i])) {
        positions.push({ verseIndex: i, char: verse[i].toLowerCase() })
      }
    }
    return positions
  })

  const typeDisplayCharacters = computed(() => {
    if (!currentVerse.value) return []

    const verse = currentVerse.value
    const typed = typedChars.value
    const alphaMap = verseAlphaMap.value

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

    if (currentLen > 0 && currentLen <= alphaMap.length) {
      const lastIdx = currentLen - 1
      const lastExpected = alphaMap[lastIdx].char
      const lastTyped = typedChars.value[lastIdx]
      if (lastTyped !== lastExpected) {
        typedChars.value[lastIdx] = char
        checkTypeComplete()
        return
      }
    }

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
    if (event.ctrlKey || event.metaKey || event.altKey) return
    const key = event.key
    if (key === 'Backspace') {
      event.preventDefault()
      processTypeBackspace()
      return
    }
    if (key.length !== 1) return
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
    const rawWords = currentVerse.value ? currentVerse.value.split(/\s+/).filter((w) => w.length > 0) : []
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
    if (event.ctrlKey || event.metaKey || event.altKey) return
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
  }

  return {
    // Selection state
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

    // Methods
    fetchVerse,
    initializeDashboard,

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
    typeBoxRef,
    typeInputRef,
    typeBoxFocused,
    typeDisplayCharacters,
    typeCompleted,
    initType,
    toggleTypeMode,
    handleTypeKeydown,
    handleTypeInput,

    // Mode 6: Type First Letters
    typeFirstBoxRef,
    typeFirstInputRef,
    typeFirstBoxFocused,
    typeFirstCurrentIndex,
    typeFirstWordStates,
    typeFirstCompleted,
    initTypeFirst,
    handleTypeFirstKeydown,
    handleTypeFirstInput,
    revealCurrentWord
  }
}
