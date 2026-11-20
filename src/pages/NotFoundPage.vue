<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="not-found-page">
    <p class="eyebrow">
      404 · Página não encontrada
    </p>
    <h1>Não encontramos esta página.</h1>
    <p>O link pode estar desatualizado ou o endereço pode ter sido digitado incorretamente.</p>
    <RouterLink
      class="pill-button pill-button-dark"
      to="/"
    >
      Voltar ao portfólio
    </RouterLink>
  </main>
</template>
