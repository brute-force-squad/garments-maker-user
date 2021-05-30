<template>
  <div>
    <image-hero-section text="About GML" />

    <!-- INITIAL SECTION -->
    <v-container>
      <initial-section />
    </v-container>
  </div>
</template>

<script>
import InitialSection from '~/components/about-us/InitialSection.vue'
import ImageHeroSection from '~/components/common/ImageHeroSection.vue'
export default {
  components: { ImageHeroSection, InitialSection },
}
</script>

<style lang="scss" scoped></style>
