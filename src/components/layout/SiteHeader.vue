<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
    <a
      class="brand"
      href="#home"
      :aria-label="`${props.portfolio.name} — início`"
    >
      {{ props.portfolio.name }}
    </a>

    <nav
      class="header-actions"
      aria-label="Ações principais"
    >
      <a
        class="pill-button whatsapp-pill-button"
        href="#social-links"
      >
        <FontAwesomeIcon
          :icon="faWhatsapp"
          aria-hidden="true"
        />
        WhatsApp
      </a>
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
