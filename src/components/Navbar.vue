<template>
  <nav class="navbar" aria-label="Main Navigation">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand" @click="closeMenu">
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
          to="/devotionals"
          class="nav-item"
          active-class="nav-item-active"
          @click="closeMenu"
        >
          Devotionals
        </router-link>
        <router-link
          to="/memory"
          class="nav-item"
          active-class="nav-item-active"
          @click="closeMenu"
        >
          Scripture Memorizer
        </router-link>
        <router-link
          to="/verses-for-feelings"
          class="nav-item"
          active-class="nav-item-active"
          @click="closeMenu"
        >
          Verses for Feelings
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
  background-color: #ffffff;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
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

.brand-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent-color);
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-item {
  text-decoration: none;
  color: var(--text-light);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  transition: all 0.2s ease;
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
  transition: all 0.3s ease;
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
    background-color: #ffffff;
    border-bottom: 1px solid var(--border-color);
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    display: none;
  }

  .nav-links-open {
    display: flex;
    animation: fadeIn 0.2s ease-in-out;
  }

  .nav-item {
    width: 100%;
    padding: 0.75rem 1rem;
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
