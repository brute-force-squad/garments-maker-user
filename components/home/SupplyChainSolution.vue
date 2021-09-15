<template>
  <div class="mt-12">
    <v-row>
      <v-col cols="12">
        <div class="display-2 mb-4">Supply Chain Approaches</div>
        <p>
          Garment products have a short shelf life and do not stay in fashion
          for a longer time. A little delay in the delivery of the products can
          cause significant losses. This is why our supply chain unit always
          makes sure that our clients receive their deliveries within the
          promised time.
        </p>
        <p>
          The supply chain unit factors in production schedules, location,
          specific holidays and other critical matters to make sure the products
          are always delivered on time. We want to be known for our prompt
          delivery service. Our clients can expect a lead-time of 35-120 days
          depending on the category of the product and the sourcing location.
          Traditional supply chain management is undergoing massive change
          driven by disruptive technologies in the retail industry.Starting with
          product design and development and including everything from
          compliance to raw material and factory sourcing, manufacturing
          control, logistics, and more, we offer end-to-end services for all
          stakeholders in the consumer goods industry.
        </p>
        <p></p>
        <p>
          Our offices and teams are based in all key production markets, giving
          us the expertise and extensive network of supply chain partners needed
          to meet the diverse needs of our global customers.
        </p>
      </v-col>
    </v-row>

    <v-img
      lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-supply-chain-solution.svg?alt=media&token=b4154af1-0e83-4a5f-8e2a-7573c62b8689"
      src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/supply-chain-solution.svg?alt=media&token=efa3773a-d107-4e03-9994-e6bab775395a"
      contain
      max-width="600"
      max-height="600"
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
