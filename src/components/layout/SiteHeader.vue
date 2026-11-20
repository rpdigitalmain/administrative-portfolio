<script setup>
import { computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { downloadResumePdf } from '@/services/resumePdf'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})

const isGeneratingResume = ref(false)
const resumeStatus = ref('')
const whatsappContact = computed(() =>
  props.portfolio.socialLinks.find((link) => link.icon === 'whatsapp' && link.phoneNumber),
)
const whatsappUrl = computed(() => {
  const phoneNumber = String(whatsappContact.value?.phoneNumber ?? '').replace(/\D/g, '')
  return phoneNumber ? `https://wa.me/${phoneNumber}` : ''
})

async function handleResumeDownload() {
  isGeneratingResume.value = true
  resumeStatus.value = ''

  try {
    await downloadResumePdf(props.portfolio)
    resumeStatus.value = 'Currículo baixado.'
  } catch (error) {
    console.error('Não foi possível gerar o PDF do currículo.', error)
    resumeStatus.value = 'Não foi possível gerar o currículo. Tente novamente.'
  } finally {
    isGeneratingResume.value = false
  }
}
</script>

<template>
  <header class="site-header">
    <RouterLink
      class="brand"
      :to="{ name: 'home', hash: '#home' }"
      :aria-label="`${props.portfolio.name} — início`"
    >
      <span aria-hidden="true">RP</span>
    </RouterLink>

    <nav
      class="header-actions"
      aria-label="Ações principais"
    >
      <a
        v-if="whatsappUrl"
        class="pill-button whatsapp-pill-button"
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
      >
        <FontAwesomeIcon
          :icon="faWhatsapp"
          aria-hidden="true"
        />
        <span class="whatsapp-button-label">WhatsApp</span>
      </a>
      <button
        v-else
        class="pill-button whatsapp-pill-button"
        type="button"
        disabled
        aria-label="Número de WhatsApp não cadastrado"
      >
        <FontAwesomeIcon
          :icon="faWhatsapp"
          aria-hidden="true"
        />
        <span class="whatsapp-button-label">WhatsApp</span>
      </button>
      <button
        class="pill-button pill-button-light"
        type="button"
        :disabled="isGeneratingResume"
        @click="handleResumeDownload"
      >
        <FontAwesomeIcon
          :icon="faDownload"
          aria-hidden="true"
        />
        {{ isGeneratingResume ? 'Preparando currículo...' : 'Baixar currículo' }}
      </button>
    </nav>
    <span
      class="visually-hidden"
      role="status"
      aria-live="polite"
    >{{ resumeStatus }}</span>
  </header>
</template>
