<script setup>
import EducationCard from '@/components/portfolio/EducationCard.vue'
import ExperienceCard from '@/components/portfolio/ExperienceCard.vue'
import ProfileCard from '@/components/portfolio/ProfileCard.vue'
import SkillsCard from '@/components/portfolio/SkillsCard.vue'
import SummaryCard from '@/components/portfolio/SummaryCard.vue'
import WhatsAppCtaCard from '@/components/portfolio/WhatsAppCtaCard.vue'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="portfolio-grid">
    <ProfileCard :portfolio="props.portfolio" />
    <SummaryCard :summary="props.portfolio.summary" />
    <SkillsCard
      :skills="props.portfolio.skills"
      :tools="props.portfolio.tools"
      :languages="props.portfolio.languages"
    />
    <ExperienceCard :experience="props.portfolio.experience" />
    <WhatsAppCtaCard :contact="props.portfolio.contact" />
    <EducationCard
      :education="props.portfolio.education"
      :certifications="props.portfolio.certifications"
    />
  </div>
</template>