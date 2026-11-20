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
        Hello, I’m {{ portfolio.name }}<br>
        <span>{{ portfolio.role }}</span>
      </h1>

      <div
        class="area-list"
        aria-label="Areas of expertise"
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

    <dl class="stat-list">
      <div
        v-for="stat in portfolio.stats"
        :key="stat.label"
        class="stat-item"
      >
        <dt>{{ stat.label }}</dt>
        <dd>{{ stat.value }}</dd>
      </div>
    </dl>
  </section>
</template>