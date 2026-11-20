<script setup>
import { RouterView } from 'vue-router'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import { portfolio } from '@/data/portfolio'
</script>

<template>
  <div class="app-shell">
    <SiteHeader :portfolio="portfolio" />
    <RouterView />
    <SiteFooter :portfolio="portfolio" />
  </div>
</template>
