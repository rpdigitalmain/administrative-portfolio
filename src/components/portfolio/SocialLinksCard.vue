<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { portfolioIcons } from '@/icons/portfolioIcons'

defineProps({
  links: {
    type: Array,
    required: true,
  },
})

function getSocialUrl(link) {
  if (link.url) return link.url

  const phoneNumber = (link.phoneNumber ?? '').replace(/\D/g, '')
  return phoneNumber ? `https://wa.me/${phoneNumber}` : ''
}
</script>

<template>
  <section
    id="social-links"
    class="card social-links-card"
    aria-labelledby="social-links-title"
  >
    <div class="card-heading">
      <h2 id="social-links-title">
        Redes sociais
      </h2>
    </div>

    <p class="social-links-copy">
      Acesse meus perfis e canais de contato.
    </p>

    <nav
      class="social-links-list"
      aria-label="Redes sociais"
    >
      <template
        v-for="link in links"
        :key="link.label"
      >
        <a
          v-if="getSocialUrl(link)"
          class="social-link"
          :href="getSocialUrl(link)"
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
        <button
          v-else
          class="social-link social-link-disabled"
          type="button"
          disabled
          :title="`Adicione um número para ativar o ${link.label}.`"
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
        </button>
      </template>
    </nav>
  </section>
</template>
