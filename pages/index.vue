<template>
  <div>
    <hero-section-home />
    <v-container>
      <custom-title number="01" title="Our History" />
    </v-container>
  </div>
</template>

<script>
import CustomTitle from '~/components/CustomTitle.vue'
import HeroSectionHome from '~/components/HeroSectionHome.vue'

export default {
  components: { HeroSectionHome, CustomTitle },
}
</script>
