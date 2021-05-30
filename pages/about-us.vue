<template>
  <div>
    <image-hero-section text="About GML" />

    <v-container>
      <!-- INITIAL SECTION -->
      <initial-section />

      <!-- SECTION 1: OUR SERVICE -->
      <custom-title number="01" title="Our Service" class="my-12" />
      <our-service />

      <!-- SECTION 2: OUR MISSIONS -->
      <custom-title number="02" title="Our Mission" class="my-12" />
      <our-mission />
    </v-container>

    <!-- SECTION 3: STAFF NUMBER -->
    <staff-section />

    <v-container>
      <custom-title number="03" title="Other Concern" class="my-12" />
      <other-concern />
    </v-container>
  </div>
</template>

<script>
import InitialSection from '~/components/about-us/InitialSection.vue'
import OurMission from '~/components/about-us/OurMission.vue'
import OurService from '~/components/about-us/OurService.vue'
import CustomTitle from '~/components/common/CustomTitle.vue'
import ImageHeroSection from '~/components/common/ImageHeroSection.vue'
import StaffSection from '~/components/about-us/StaffSection.vue'
import OtherConcern from '~/components/about-us/OtherConcern.vue'
export default {
  components: {
    ImageHeroSection,
    InitialSection,
    CustomTitle,
    OurService,
    OurMission,
    StaffSection,
    OtherConcern,
  },
}
</script>

<style lang="scss" scoped></style>
