<script setup>
defineProps({
  summary: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
    class="card summary-card"
    aria-labelledby="summary-title"
  >
    <div class="card-heading">
      <h2 id="summary-title">
        Resumo
      </h2>
    </div>

    <p>{{ summary.text }}</p>

    <div
      v-if="summary.metric || summary.result"
      class="summary-metric"
    >
      <strong>{{ summary.metric }}</strong>
      <span>{{ summary.result }}</span>
    </div>
  </section>
</template>
