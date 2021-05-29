<template>
  <div>
    <div class="wrapper">
      <img
        src="../../static/img/light-bulb.svg"
        alt="light-bulb"
        class="light-bulb"
      />
      <img src="../../static/img/sticks.svg" alt="svg" class="sticks" />
      <v-img
        lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-supply-chain-solution.svg?alt=media&token=b4154af1-0e83-4a5f-8e2a-7573c62b8689"
        src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/supply-chain-solution.svg?alt=media&token=efa3773a-d107-4e03-9994-e6bab775395a"
        contain
        max-width="800"
        max-height="800"
        class="mx-auto"
      />
    </div>

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
.wrapper {
  position: relative;

  .light-bulb {
    position: absolute;
    left: -35%;
    top: 30%;

    @media only screen and (max-width: 1265px) {
      display: none;
    }
  }

  .sticks {
    position: absolute;
    right: -65%;
    top: -15%;

    @media only screen and (max-width: 1265px) {
      display: none;
    }
  }
}
</style>
