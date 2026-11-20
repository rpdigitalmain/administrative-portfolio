<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { portfolioIcons } from '@/icons/portfolioIcons'

defineProps({
  items: {
    type: Array,
    required: true,
  },
  ariaLabel: {
    type: String,
    required: true,
  },
  accentFirst: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <ul
    class="chip-list"
    :aria-label="ariaLabel"
  >
    <li
      v-for="(item, index) in items"
      :key="item.label"
      class="chip"
      :class="{ 'chip-accent': accentFirst && index === 0 }"
    >
      <FontAwesomeIcon
        v-if="portfolioIcons[item.icon]"
        :icon="portfolioIcons[item.icon]"
        aria-hidden="true"
      />
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>
