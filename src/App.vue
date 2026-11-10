<template>
  <div id="app" :class="{ 'is-phone-app': isPhoneApp }">
    <Navbar v-if="!isPhoneApp" />
    <main :class="isPhoneApp ? 'phone-content' : 'page-content'">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter v-if="!isPhoneApp" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()
const isPhoneApp = computed(() => Boolean(route.meta.isPhoneApp))
</script>

<style>
.phone-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.page-fade-leave-to {
  opacity: 0;
}
</style>
