<script setup>
import HeroSection from '@/components/portfolio/HeroSection.vue'
import PortfolioGrid from '@/components/layout/PortfolioGrid.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import { portfolio } from '@/data/portfolio'
</script>

<template>
  <div class="app-shell">
    <SiteHeader :name="portfolio.name" />

    <main
      id="home"
      class="page-content"
    >
      <HeroSection :portfolio="portfolio" />
      <PortfolioGrid :portfolio="portfolio" />
    </main>
  </div>
</template>