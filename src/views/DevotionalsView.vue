<template>
  <div class="devotionals-view">
    <header class="page-header">
      <h1 class="page-title">Devotionals</h1>
      <div class="disclaimer">
        <strong>Welcome!</strong> This page hosts some of the devotionals I have prepared. This page is sparse now, but I plan to continue adding to it over the coming years. Please note that all of the devotionals on this page are meant only as a source of encouragement. I am not a theologian or a scholar, nor are these posts officially reviewed a pastor or seminary professor. I am just a guy who is passionate about the Lord and his word and loves studying what he has to say. I hope these devotionals can help encourage you!
      </div>
    </header>

    <main class="container">
      <article
        v-for="post in paginatedDevotionals"
        :key="post.id"
        :id="post.id"
        class="post"
        :class="{ 'post-highlight': highlightedId === post.id }"
      >
        <div class="post-title-row">
          <h2 class="post-title">{{ post.title }}</h2>
          <button
            class="copy-link-btn"
            :title="'Copy link to ' + post.title"
            @click="copyLink(post.id, $event)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span v-if="copiedId === post.id" class="copied-tooltip">Copied!</span>
          </button>
        </div>
        <div class="post-meta">By {{ post.author }} &bull; {{ post.date }}</div>

        <blockquote class="bible-verse">
          "{{ post.verseQuote }}"
          <cite>- {{ post.verseCite }}</cite>
        </blockquote>

        <div class="post-content">
          <p v-for="(paragraph, idx) in post.paragraphs" :key="idx">
            {{ paragraph }}
          </p>
        </div>
      </article>

      <!-- Pagination Controls -->
      <nav v-if="totalPages > 1" class="pagination" aria-label="Devotionals pagination">
        <button
          class="pagination-btn pagination-arrow"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
          aria-label="Previous page"
        >
          &lsaquo;
        </button>

        <button
          v-for="page in pageNumbers"
          :key="page"
          class="pagination-btn"
          :class="{ 'pagination-btn-active': page === currentPage }"
          @click="goToPage(page)"
          :aria-label="'Page ' + page"
          :aria-current="page === currentPage ? 'page' : undefined"
        >
          {{ page }}
        </button>

        <button
          class="pagination-btn pagination-arrow"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
          aria-label="Next page"
        >
          &rsaquo;
        </button>
      </nav>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { devotionals } from '@/data/devotionalsData.js'

const route = useRoute()
const router = useRouter()

const ITEMS_PER_PAGE = 10

// --- Pagination state ---
const currentPage = ref(1)
const highlightedId = ref(null)
const copiedId = ref(null)

const totalPages = computed(() => Math.ceil(devotionals.length / ITEMS_PER_PAGE))

const paginatedDevotionals = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE
  return devotionals.slice(start, start + ITEMS_PER_PAGE)
})

const pageNumbers = computed(() => {
  const pages = []
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i)
  }
  return pages
})

// --- Navigation ---
function goToPage(page) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  router.replace({ query: { ...route.query, page: page > 1 ? page : undefined, post: undefined } })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// --- Copy link ---
function copyLink(postId, event) {
  const baseUrl = window.location.origin + (import.meta.env.BASE_URL || '/')
  const url = `${baseUrl}devotionals?post=${postId}`
  navigator.clipboard.writeText(url).then(() => {
    copiedId.value = postId
    setTimeout(() => {
      copiedId.value = null
    }, 2000)
  }).catch(() => {
    // Fallback: select and copy from a temporary input
    const input = document.createElement('input')
    input.value = url
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    copiedId.value = postId
    setTimeout(() => {
      copiedId.value = null
    }, 2000)
  })
}

// --- Deep link resolution ---
function findPageForPost(postId) {
  const index = devotionals.findIndex(d => d.id === postId)
  if (index === -1) return null
  return Math.floor(index / ITEMS_PER_PAGE) + 1
}

async function resolveDeepLink() {
  const postId = route.query.post
  if (!postId) {
    // Just handle page query param
    const pageParam = parseInt(route.query.page)
    if (pageParam && pageParam >= 1 && pageParam <= totalPages.value) {
      currentPage.value = pageParam
    }
    return
  }

  const page = findPageForPost(postId)
  if (!page) return

  currentPage.value = page
  // Update URL to remove post param and set correct page (clean up)
  // We keep the post param so the user can see it in the URL
  router.replace({ query: { post: postId, page: page > 1 ? page : undefined } })

  await nextTick()

  // Wait a small amount for DOM to render
  setTimeout(() => {
    const element = document.getElementById(postId)
    if (element) {
      // Offset for the fixed navbar (64px) plus breathing room
      const navbarOffset = 80
      const elementTop = element.getBoundingClientRect().top + window.scrollY - navbarOffset
      window.scrollTo({ top: elementTop, behavior: 'smooth' })
      highlightedId.value = postId
      setTimeout(() => {
        highlightedId.value = null
      }, 2000)
    }
  }, 100)
}

// --- Watch for route query changes (browser back/forward) ---
watch(() => route.query, (newQuery) => {
  if (newQuery.post) {
    resolveDeepLink()
  } else {
    const pageParam = parseInt(newQuery.page)
    if (pageParam && pageParam >= 1 && pageParam <= totalPages.value) {
      currentPage.value = pageParam
    } else {
      currentPage.value = 1
    }
  }
}, { deep: true })

// --- On mount: resolve deep link or page param ---
onMounted(() => {
  resolveDeepLink()
})
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 3.5rem 1.5rem 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

/* Title row with copy link button */
.post-title-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.post-title {
  margin-top: 0;
  margin-bottom: 0.2rem;
  color: var(--text-main);
  font-size: 1.65rem;
  font-weight: 700;
  flex: 1;
  letter-spacing: -0.3px;
}

.copy-link-btn {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-light);
  padding: 0.4rem;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  flex-shrink: 0;
}

.copy-link-btn:hover {
  color: var(--accent-color);
  background-color: var(--disclaimer-bg);
}

.copied-tooltip {
  position: absolute;
  top: -2.25rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--accent-color);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  white-space: nowrap;
  pointer-events: none;
  animation: tooltipFade 2s ease-in-out forwards;
  box-shadow: var(--shadow-sm);
}

@keyframes tooltipFade {
  0%, 70% { opacity: 1; }
  100% { opacity: 0; }
}

.post-meta {
  color: var(--text-light);
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.post-content p {
  margin-bottom: 1rem;
  color: var(--text-main);
  line-height: 1.75;
}

.post-content p:last-child {
  margin-bottom: 0;
}

/* Deep link highlight animation */
.post-highlight {
  animation: highlightFlash 2s ease-in-out;
}

@keyframes highlightFlash {
  0% { box-shadow: var(--shadow-sm); }
  15% { box-shadow: 0 0 0 3px rgba(74, 108, 111, 0.2); }
  100% { box-shadow: var(--shadow-sm); }
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.35rem;
  padding: 1rem 0 3rem;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--card-bg);
  color: var(--text-main);
  font-size: 0.85rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all var(--transition-base);
}

.pagination-btn:hover:not(:disabled):not(.pagination-btn-active) {
  background-color: var(--disclaimer-bg);
  border-color: #c8d0d2;
}

.pagination-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.pagination-btn-active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #ffffff;
  font-weight: 600;
  cursor: default;
  box-shadow: var(--shadow-xs);
}

.pagination-arrow {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
}

@media (max-width: 600px) {
  .pagination {
    gap: 0.2rem;
  }

  .pagination-btn {
    min-width: 2rem;
    height: 2rem;
    font-size: 0.8rem;
  }
}
</style>
