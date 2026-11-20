<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { portfolioIcons } from '@/icons/portfolioIcons'

defineProps({
  links: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section
    id="social-links"
    class="card social-links-card"
    aria-labelledby="social-links-title"
  >
    <div class="card-heading">
      <h2 id="social-links-title">
        Social links
      </h2>
    </div>

    <p class="social-links-copy">
      Find me on these platforms.
    </p>

    <nav
      class="social-links-list"
      aria-label="Social media"
    >
      <a
        v-for="link in links"
        :key="link.label"
        class="social-link"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          v-if="portfolioIcons[link.icon]"
          :icon="portfolioIcons[link.icon]"
          aria-hidden="true"
        />
        <span>{{ link.label }}</span>
        <span
          class="social-link-arrow"
          aria-hidden="true"
        >↗</span>
      </a>
    </nav>
  </section>
</template>
