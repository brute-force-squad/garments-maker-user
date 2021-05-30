<template>
  <div>
    <image-hero-section text="About GML" />

    <!-- INITIAL SECTION -->
    <v-container>
      <initial-section />

      <!-- SECTION 1: OUR SERVICE -->
      <custom-title number="01" title="Our Service" class="my-12" />
      <our-service />

      <!-- SECTION 2: OUR MISSIONS -->
      <custom-title number="02" title="Our Mission" class="my-12" />
    </v-container>
  </div>
</template>

<script>
import InitialSection from '~/components/about-us/InitialSection.vue'
import OurService from '~/components/about-us/OurService.vue'
import CustomTitle from '~/components/common/CustomTitle.vue'
import ImageHeroSection from '~/components/common/ImageHeroSection.vue'
export default {
  components: { ImageHeroSection, InitialSection, CustomTitle, OurService },
}
</script>

<style lang="scss" scoped></style>
