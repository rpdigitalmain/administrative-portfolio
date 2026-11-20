<script setup>
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
        class="pill-button"
        href="#whatsapp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L4 20l1.1-3.4A8.4 8.4 0 1 1 20 11.5Z" />
          <path d="M9 9.5c.3 1.7 1.8 3.2 3.5 3.5l1-1 2 1-.3 1.5c-.1.5-.6.8-1.1.8-3.7-.4-6.5-3.2-6.9-6.9 0-.5.3-1 .8-1.1l1.5-.3 1 2-1.5.5Z" />
        </svg>
        WhatsApp
      </a>
      <a
        class="pill-button pill-button-dark"
        href="/resume.pdf"
        download
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
        </svg>
        Download resume
      </a>
    </nav>
  </header>
</template>