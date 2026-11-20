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
    aria-label="Perfil"
  >
    <div
      class="profile-initials"
      role="img"
      :aria-label="`Espaço reservado para a foto de perfil de ${portfolio.name}`"
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
