<script setup>
import { ref } from 'vue'

defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})

const imageFailed = ref(false)
</script>

<template>
  <article
    class="card profile-card"
    aria-label="Perfil"
  >
    <img
      v-if="portfolio.profileImage && !imageFailed"
      class="profile-photo"
      :src="portfolio.profileImage"
      :alt="`Retrato ilustrativo de ${portfolio.name}`"
      @error="imageFailed = true"
    />

    <div
      v-else
      class="profile-initials"
      aria-hidden="true"
    >
      {{ portfolio.initials }}
    </div>

    <div class="profile-caption">
      <div>
        <strong>{{ portfolio.name }}</strong>
        <span>{{ portfolio.role }}</span>
      </div>
    </div>
  </article>
</template>
