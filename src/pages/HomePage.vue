<script setup>
import HeroSection from '@/components/portfolio/HeroSection.vue'
import PortfolioGrid from '@/components/layout/PortfolioGrid.vue'
import { portfolio } from '@/data/portfolio'
</script>

<template>
  <main
    id="home"
    class="page-content"
  >
    <HeroSection :portfolio="portfolio" />
    <PortfolioGrid :portfolio="portfolio" />
  </main>
</template>
