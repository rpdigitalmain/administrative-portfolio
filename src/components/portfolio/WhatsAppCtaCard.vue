<script setup>
import { computed } from 'vue'

const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
})

const whatsappUrl = computed(() => {
  const phoneNumber = props.contact.whatsappNumber.replace(/\D/g, '')

  if (!phoneNumber) return ''

  const message = encodeURIComponent(props.contact.whatsappMessage)
  return `https://wa.me/${phoneNumber}?text=${message}`
})
</script>

<template>
  <section
    id="whatsapp"
    class="card whatsapp-card"
    aria-labelledby="whatsapp-title"
  >
    <div class="card-heading">
      <h2 id="whatsapp-title">
        Let’s talk
      </h2>
    </div>

    <p class="whatsapp-copy">
      Have a question or want to discuss an opportunity? Send me a message on WhatsApp.
    </p>

    <a
      v-if="whatsappUrl"
      class="whatsapp-action"
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Message me on WhatsApp</span>
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
    </a>

    <button
      v-else
      class="whatsapp-action"
      type="button"
      disabled
    >
      <span>Add your number in portfolio.js to activate WhatsApp</span>
    </button>
  </section>
</template>