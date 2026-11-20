<script setup>
defineProps({
  experience: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section
    id="experience"
    class="card experience-card"
    aria-labelledby="experience-title"
  >
    <div class="card-heading">
      <h2 id="experience-title">
        Experience
      </h2>
      <span class="experience-count">{{ String(experience.length).padStart(2, '0') }}</span>
    </div>

    <ol class="experience-list">
      <li
        v-for="item in experience"
        :key="`${item.company}-${item.period}`"
        class="experience-item"
      >
        <span
          class="experience-icon"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect
              x="3"
              y="7"
              width="18"
              height="13"
              rx="2"
            />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </span>

        <div class="experience-meta">
          <strong>{{ item.title }}</strong>
          <span>{{ item.company }} · {{ item.period }}</span>
        </div>
        <span
          class="status-tag"
          :class="{ 'status-tag-muted': !item.current }"
        >
          {{ item.status }}
        </span>
        <p class="experience-result">
          {{ item.result }}
        </p>
      </li>
    </ol>
  </section>
</template>