<script setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { portfolioIcons } from '@/icons/portfolioIcons'

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  location: {
    type: String,
    default: '',
  },
  availability: {
    type: String,
    default: '',
  },
})

const phoneContact = computed(() => props.links.find((link) => link.phoneNumber))

function getSocialUrl(link) {
  if (link.url) return link.url

  const phoneNumber = (link.phoneNumber ?? '').replace(/\D/g, '')
  return phoneNumber ? `https://wa.me/${phoneNumber}` : ''
}

function getPhoneUrl(link) {
  const phoneNumber = (link?.phoneNumber ?? '').replace(/\D/g, '')
  return phoneNumber ? `tel:+${phoneNumber}` : ''
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
        Redes e contato
      </h2>
    </div>

    <p class="social-links-copy">
      Meus perfis, telefone e disponibilidade.
    </p>

    <ul class="contact-details">
      <li v-if="props.location">
        <FontAwesomeIcon
          :icon="portfolioIcons.location"
          aria-hidden="true"
        />
        <span class="contact-detail-label">Local</span>
        <span class="contact-detail-value">{{ props.location }}</span>
      </li>
      <li v-if="phoneContact">
        <FontAwesomeIcon
          :icon="portfolioIcons.phone"
          aria-hidden="true"
        />
        <span class="contact-detail-label">Telefone</span>
        <a
          class="contact-detail-value"
          :href="getPhoneUrl(phoneContact)"
        >{{ phoneContact.displayValue || phoneContact.phoneNumber }}</a>
      </li>
      <li v-if="props.availability">
        <FontAwesomeIcon
          :icon="portfolioIcons.availability"
          aria-hidden="true"
        />
        <span class="contact-detail-label">Disponibilidade</span>
        <span class="contact-detail-value">{{ props.availability }}</span>
      </li>
    </ul>

    <nav
      class="social-links-list"
      aria-label="Perfis sociais"
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
