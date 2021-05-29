<template>
  <div>
    <hero-section-home />
    <v-container>
      <!-- SECTION 1: OUR HISTORY  -->
      <custom-title number="01" title="Our History" class="my-6" />
      <our-history />

      <!-- SECTION 2: WHAT WE DO -->
      <custom-title number="02" title="What We Do" class="my-6" />
      <what-we-do />

      <!-- SECTION 3: SUPPLY CHAIN SOLUTION -->
      <custom-title number="03" title="Supply Chain Solution" class="my-6" />
      <supply-chain-solution />

      <!-- SECTION 4: OPERATION TEAM -->
      <custom-title number="04" title="Operation Team" class="my-6" />
    </v-container>
  </div>
</template>

<script>
import CustomParagraph from '~/components/common/CustomParagraph.vue'
import CustomTitle from '~/components/common/CustomTitle.vue'
import HeroSectionHome from '~/components/home/HeroSectionHome.vue'
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
  },
}
</script>
