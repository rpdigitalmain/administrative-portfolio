<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="not-found-page">
    <p class="eyebrow">
      404 · Page not found
    </p>
    <h1>We couldn’t find that page.</h1>
    <p>The link may be outdated, or the address may have been entered incorrectly.</p>
    <RouterLink
      class="pill-button pill-button-dark"
      to="/"
    >
      Return to the portfolio
    </RouterLink>
  </main>
</template>