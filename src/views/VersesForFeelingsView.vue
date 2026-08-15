<template>
  <div class="feelings-view">
    <header class="page-header">
      <h1 class="page-title">Scripture for Every Season</h1>
      <p class="page-subtitle">Select your current feeling to find a verse (KJV) that speaks to your heart.</p>
    </header>

    <main class="container">
      <!-- Dynamic Verse Display Box -->
      <section
        ref="verseDisplayRef"
        v-if="selectedVerse"
        :class="['verse-container', 'fade-in', `verse-theme-${currentType}`]"
      >
        <blockquote class="verse-text">
          "{{ selectedVerse.text }}"
        </blockquote>
        <div class="verse-reference">
          - {{ selectedVerse.ref }}
        </div>
        <button
          class="another-btn"
          @click="getAnotherVerse"
        >
          Get Another Verse for '{{ formattedMoodName }}'
        </button>
      </section>

      <!-- Emotion Super Sections -->
      <section
        v-for="section in feelingsCategories"
        :key="section.type"
        class="super-section"
      >
        <h2 class="super-section-title">{{ section.superSectionTitle }}</h2>

        <div class="category-grid">
          <div
            v-for="group in section.groups"
            :key="group.title"
            class="post category-card"
          >
            <h3 class="category-title">{{ group.title }}</h3>
            <div class="mood-grid">
              <button
                v-for="mood in group.moods"
                :key="mood.key"
                :class="['mood-btn', { 'mood-btn-active': currentMood === mood.key }]"
                @click="showVerse(mood.key, section.type)"
              >
                {{ mood.label }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { feelingsCategories, verseDB } from '@/data/feelingsData.js'

const currentMood = ref('')
const currentType = ref('positive')
const selectedVerse = ref(null)
const verseDisplayRef = ref(null)

const formattedMoodName = computed(() => {
  if (!currentMood.value) return ''
  return currentMood.value.charAt(0).toUpperCase() + currentMood.value.slice(1)
})

const showVerse = (mood, type) => {
  currentMood.value = mood
  currentType.value = type

  const verses = verseDB[mood]
  if (!verses || verses.length === 0) return

  // Pick a random verse (avoid pick duplicate immediately if possible)
  let randomIndex = Math.floor(Math.random() * verses.length)
  if (verses.length > 1 && selectedVerse.value && verses[randomIndex].text === selectedVerse.value.text) {
    randomIndex = (randomIndex + 1) % verses.length
  }
  selectedVerse.value = verses[randomIndex]

  nextTick(() => {
    if (verseDisplayRef.value) {
      verseDisplayRef.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

const getAnotherVerse = () => {
  if (currentMood.value) {
    showVerse(currentMood.value, currentType.value)
  }
}
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
  margin-top: 0;
}

.page-subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

.super-section {
  margin-bottom: 2.5rem;
}

.super-section-title {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
  font-size: 1.75rem;
  text-align: center;
}

.category-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 600px) {
  .category-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.category-card {
  margin-bottom: 0;
  padding: 1.5rem;
}

.category-title {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-main);
  font-size: 1.2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

/* Verse Display Area */
.verse-container {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  text-align: center;
  scroll-margin-top: 5rem;
  transition: all 0.3s ease;
}

.verse-theme-positive {
  border-left: 4px solid var(--secondary-color);
}

.verse-theme-positive .verse-reference {
  color: var(--secondary-color);
}

.verse-theme-positive .another-btn {
  background-color: var(--secondary-color);
}

.verse-theme-negative {
  border-left: 4px solid var(--primary-color);
}

.verse-theme-negative .verse-reference {
  color: var(--primary-color);
}

.verse-theme-negative .another-btn {
  background-color: var(--primary-color);
}

.verse-text {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.4rem;
  font-style: italic;
  color: var(--accent-color);
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  border-left: none;
  padding-left: 0;
}

.verse-reference {
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.another-btn {
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s ease;
  font-family: inherit;
}

.another-btn:hover {
  opacity: 0.9;
}

/* Grid Buttons */
.mood-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
  gap: 0.8rem;
}

.mood-btn {
  background-color: var(--disclaimer-bg);
  border: 1px solid #d0d7d9;
  color: var(--text-main);
  padding: 0.6rem 0.4rem;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-align: center;
}

.mood-btn:hover,
.mood-btn-active {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}
</style>
