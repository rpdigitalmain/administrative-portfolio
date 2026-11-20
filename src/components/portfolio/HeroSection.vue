<script setup>
defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
    class="hero"
    aria-labelledby="page-title"
  >
    <div class="hero-copy">
      <h1 id="page-title">
        Seja bem-vindo ao meu portfólio!<br>
        <span>Olá, eu sou {{ portfolio.name }}.</span>
      </h1>

      <div
        class="area-list"
        aria-label="Áreas de atuação"
      >
        <div
          v-for="area in portfolio.areas"
          :key="area.label"
          class="area-item"
        >
          <span class="eyebrow">{{ area.label }}</span>
          <div
            class="area-bar"
            :class="`area-bar-${area.style}`"
          >
            {{ area.value }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
