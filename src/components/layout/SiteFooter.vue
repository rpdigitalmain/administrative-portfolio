<script setup>
defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-main">
      <div class="footer-brand">
        <span
          class="footer-monogram"
          aria-hidden="true"
        >RP</span>
        <div class="footer-brand-copy">
          <strong>{{ portfolio.name }}</strong>
          <span>Portfólio administrativo</span>
        </div>
      </div>

      <p class="footer-rights">
        © {{ currentYear }} {{ portfolio.name }}. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>
