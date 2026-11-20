<script setup>
defineProps({
  education: {
    type: Array,
    required: true,
  },
  independentLearning: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section
    id="education"
    class="card education-card"
    aria-labelledby="education-title"
  >
    <div class="card-heading">
      <h2 id="education-title">
        Formação e aprendizado independente
      </h2>
    </div>

    <div class="education-columns">
      <div class="education-group">
        <h3>Formação</h3>
        <ul>
          <li
            v-for="item in education"
            :key="`${item.title}-${item.institution}`"
            class="education-entry"
            :class="`education-entry-${item.style}`"
          >
            <div>
              <strong>{{ item.title }}</strong>
              <span>{{ item.institution }}</span>
            </div>
            <small class="education-year">{{ item.year }}</small>
          </li>
        </ul>
      </div>

      <div class="education-group">
        <h3>Aprendizado independente</h3>
        <ul>
          <li
            v-for="item in independentLearning"
            :key="`${item.title}-${item.institution}`"
            class="education-entry"
            :class="`education-entry-${item.style}`"
          >
            <div>
              <strong>{{ item.title }}</strong>
              <span>{{ item.institution }}</span>
            </div>
            <small class="education-year">{{ item.year }}</small>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
