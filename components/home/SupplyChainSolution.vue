<template>
  <div class="mt-12">
    <v-row>
      <v-col cols="12">
        <div class="display-2 mb-4">Supply Chain Innovation</div>
        <p class="bold">
          We convene the global supply chain creating customized, end-to-end
          supply chain and logistics solutions for brands and retailers. What
          sets us apart is our high degree of flexibility and scalability which
          is unrivaled in our industry.
        </p>
        <p>
          Millions of consumer goods pass through Li & Fung’s supply chain every
          year. For that to happen, we connect thousands of suppliers and
          vendors with leading brands and retailers, all with the goal of
          meeting consumer demand.
        </p>
        <div class="title my-6">
          We are creating the supply chain of the future
        </div>
        <p>
          Traditional supply chain management is undergoing massive change
          driven by disruptive technologies in the retail industry.
        </p>
        <p>
          Starting with product design and development and including everything
          from compliance to raw material and factory sourcing, manufacturing
          control, logistics, and more, we offer end-to-end services for all
          stakeholders in the consumer goods industry. Our offices and teams are
          based in all key production markets, giving us the expertise and
          extensive network of supply chain partners needed to meet the diverse
          needs of our global customers.
        </p>
      </v-col>
    </v-row>

    <v-img
      lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-supply-chain-solution.svg?alt=media&token=b4154af1-0e83-4a5f-8e2a-7573c62b8689"
      src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/supply-chain-solution.svg?alt=media&token=efa3773a-d107-4e03-9994-e6bab775395a"
      contain
      max-width="800"
      max-height="800"
      class="mx-auto"
    />

    <v-row>
      <v-col cols="12">
        <supply-chain-tabs />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SupplyChainTabs from './SupplyChainTabs.vue'
export default {
  components: { SupplyChainTabs },
}
</script>

<style lang="scss" scoped>
.display-2,
.title {
  font-family: 'Poppins', sans-serif !important;
}
.title {
  font-weight: 600 !important;
}
</style>
