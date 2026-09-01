<template>
  <nav class="navbar" aria-label="Main Navigation">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand" @click="closeMenu">
        <svg class="brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3C10 1.5 7 1 2 1C1.5 1 1 1.4 1 2v16c0 0.6 0.5 1 1 1c5 0 8 0.5 10 2"/>
          <path d="M12 3c2-1.5 5-2 10-2c0.5 0 1 0.4 1 1v16c0 0.6-0.5 1-1 1c-5 0-8 0.5-10 2"/>
          <line x1="12" y1="3" x2="12" y2="21"/>
        </svg>
        <span class="brand-title">Bible Station</span>
      </router-link>

      <button
        class="nav-toggle"
        :class="{ 'is-active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
        :aria-expanded="isMenuOpen"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="nav-links" :class="{ 'nav-links-open': isMenuOpen }">
        <router-link
          to="/"
          class="nav-item"
          exact-active-class="nav-item-active"
          @click="closeMenu"
        >
          Home
        </router-link>
        <router-link
          to="/memory"
          class="nav-item"
          active-class="nav-item-active"
          @click="closeMenu"
        >
          Scripture Memory Tool
        </router-link>
        <router-link
          to="/verses-for-feelings"
          class="nav-item"
          active-class="nav-item-active"
          @click="closeMenu"
        >
          Bible Verses for Feelings
        </router-link>
        <router-link
          to="/devotionals"
          class="nav-item"
          active-class="nav-item-active"
          @click="closeMenu"
        >
          Devotionals
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(234, 234, 234, 0.6);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.navbar-brand {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-icon {
  color: var(--accent-color);
  flex-shrink: 0;
}

.brand-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--accent-color);
  letter-spacing: -0.3px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-item {
  text-decoration: none;
  color: var(--text-light);
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  position: relative;
}

.nav-item:hover {
  color: var(--accent-color);
  background-color: var(--disclaimer-bg);
}

.nav-item-active {
  color: var(--accent-color);
  font-weight: 600;
  background-color: var(--disclaimer-bg);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-toggle .bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-main);
  border-radius: 2px;
  transition: all var(--transition-smooth);
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    flex-direction: column;
    padding: 0.75rem 1rem;
    gap: 0.25rem;
    box-shadow: var(--shadow-lg);
    display: none;
  }

  .nav-links-open {
    display: flex;
    animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-item {
    width: 100%;
    padding: 0.7rem 1rem;
    border-radius: var(--radius-sm);
  }

  .nav-toggle.is-active .bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .nav-toggle.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.is-active .bar:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>
