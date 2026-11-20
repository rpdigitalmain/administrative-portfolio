<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class="site-header">
    <a
      class="brand"
      href="#home"
      :aria-label="`${name} — home`"
    >
      {{ name }}
    </a>

    <nav
      class="header-actions"
      aria-label="Main actions"
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
      <a
        class="pill-button pill-button-light"
        href="/resume.pdf"
        download
      >
        <FontAwesomeIcon
          :icon="faDownload"
          aria-hidden="true"
        />
        Download resume
      </a>
    </nav>
  </header>
</template>
