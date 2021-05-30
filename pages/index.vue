<template>
  <div>
    <hero-section-home />
    <v-container>
      <!-- SECTION 1: OUR HISTORY  -->
      <custom-title number="01" title="Our History" class="my-12" />
      <our-history />

      <!-- SECTION 2: WHAT WE DO -->
      <custom-title number="02" title="What We Do" class="my-12" />
      <what-we-do />

      <!-- SECTION 3: SUPPLY CHAIN SOLUTION -->
      <custom-title number="03" title="Supply Chain Solution" class="my-12" />
      <supply-chain-solution />

      <!-- SECTION 4: OPERATION TEAM -->
      <custom-title number="04" title="Operation Team" class="my-12" />
      <operation-teams />
    </v-container>
    <div class="wrapper">
      <img
        src="../static/img/light-bulb.svg"
        alt="light-bulb"
        class="light-bulb"
      />
      <img src="../static/img/sticks.svg" alt="svg" class="sticks" />
    </div>
  </div>
</template>

<script>
import CustomParagraph from '~/components/common/CustomParagraph.vue'
import CustomTitle from '~/components/common/CustomTitle.vue'
import HeroSectionHome from '~/components/home/HeroSectionHome.vue'
import OperationTeams from '~/components/home/OperationTeams.vue'
import OurHistory from '~/components/home/OurHistory.vue'
import SupplyChainSolution from '~/components/home/SupplyChainSolution.vue'
import WhatWeDo from '~/components/home/WhatWeDo.vue'

export default {
  components: {
    HeroSectionHome,
    CustomTitle,
    CustomParagraph,
    SupplyChainSolution,
    OurHistory,
    WhatWeDo,
    OperationTeams,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .light-bulb {
    position: absolute;
    left: -18rem;
    top: -120rem;

    @media only screen and (max-width: 1265px) {
      display: none;
    }
  }

  .sticks {
    position: absolute;
    top: -150rem;
    right: -38rem;

    @media only screen and (max-width: 1265px) {
      display: none;
    }
  }
}
</style>
