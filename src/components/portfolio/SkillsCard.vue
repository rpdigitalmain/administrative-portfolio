<script setup>
import IconList from '@/components/common/IconList.vue'

defineProps({
  skills: {
    type: Array,
    required: true,
  },
  tools: {
    type: Array,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section
    id="skills"
    class="card skills-card"
    aria-labelledby="skills-title"
  >
    <div class="card-heading">
      <h2 id="skills-title">
        Competências
      </h2>
    </div>

    <IconList
      :items="skills"
      aria-label="Competências profissionais"
      accent-first
    />

    <h3
      v-if="tools.length"
      class="subheading"
    >
      Ferramentas
    </h3>
    <IconList
      v-if="tools.length"
      :items="tools"
      aria-label="Ferramentas"
    />

    <h3
      v-if="languages.length"
      class="subheading"
    >
      Idiomas
    </h3>
    <IconList
      v-if="languages.length"
      :items="languages"
      aria-label="Idiomas"
    />
  </section>
</template>
