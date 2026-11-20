<script setup>
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
        Skills
      </h2>
    </div>

    <ul
      class="chip-list"
      aria-label="Professional skills"
    >
      <li
        v-for="(skill, index) in skills"
        :key="skill"
        class="chip"
        :class="{ 'chip-accent': index === 0 }"
      >
        {{ skill }}
      </li>
    </ul>

    <h3 class="subheading">
      Tools
    </h3>
    <ul
      class="chip-list"
      aria-label="Tools"
    >
      <li
        v-for="tool in tools"
        :key="tool"
        class="chip"
      >
        {{ tool }}
      </li>
    </ul>

    <h3 class="subheading">
      Languages
    </h3>
    <ul
      class="chip-list"
      aria-label="Languages"
    >
      <li
        v-for="language in languages"
        :key="language"
        class="chip"
      >
        {{ language }}
      </li>
    </ul>
  </section>
</template>