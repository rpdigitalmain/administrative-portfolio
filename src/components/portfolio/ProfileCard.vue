<script setup>
defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="card profile-card"
    aria-label="Profile"
  >
    <div
      class="profile-initials"
      role="img"
      :aria-label="`Profile photo placeholder for ${portfolio.name}`"
    >
      {{ portfolio.initials }}
    </div>

    <div class="profile-caption">
      <div>
        <strong>{{ portfolio.name }}</strong>
        <span>{{ portfolio.role }}</span>
      </div>
      <span class="profile-status">Open to opportunities</span>
    </div>
  </article>
</template>