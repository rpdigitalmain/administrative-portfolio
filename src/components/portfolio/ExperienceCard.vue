<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

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
        Experiência
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
          <FontAwesomeIcon :icon="faBriefcase" />
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
