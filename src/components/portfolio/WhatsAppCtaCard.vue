<script setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
      <FontAwesomeIcon
        :icon="faWhatsapp"
        aria-hidden="true"
      />
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
