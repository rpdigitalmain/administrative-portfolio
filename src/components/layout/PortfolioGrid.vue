<script setup>
import EducationCard from '@/components/portfolio/EducationCard.vue'
import ExperienceCard from '@/components/portfolio/ExperienceCard.vue'
import ProfileCard from '@/components/portfolio/ProfileCard.vue'
import SkillsCard from '@/components/portfolio/SkillsCard.vue'
import SummaryCard from '@/components/portfolio/SummaryCard.vue'
import SocialLinksCard from '@/components/portfolio/SocialLinksCard.vue'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
    class="portfolio-grid"
    aria-label="Visão geral do portfólio"
  >
    <ProfileCard :portfolio="props.portfolio" />
    <SummaryCard :summary="props.portfolio.summary" />
    <SkillsCard
      :skills="props.portfolio.skills"
      :tools="props.portfolio.tools"
      :languages="props.portfolio.languages"
    />
    <ExperienceCard :experience="props.portfolio.experience" />
    <SocialLinksCard
      :links="props.portfolio.socialLinks"
      :location="props.portfolio.contact.location"
      :availability="props.portfolio.contact.availability"
    />
    <EducationCard
      :education="props.portfolio.education"
      :independent-learning="props.portfolio.independentLearning"
    />
  </section>
</template>
