<template>
  <div>
    <career-hero-section />
    <div class="wrapper">
      <img src="../static/img/group.png" alt="group" />
    </div>
    <v-container>
      <div class="text-center display-2 my-8">Work Place Environments</div>

      <v-img
        lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-career.png?alt=media&token=42aaa50b-027e-4ad9-98fe-7d0d0a90da53"
        src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/career.png?alt=media&token=891206a1-3171-4943-b89d-0e908ab46caf"
        contain
        height="500"
        class="mx-auto"
      />
    </v-container>
  </div>
</template>

<script>
import CareerHeroSection from '~/components/career/CareerHeroSection.vue'
export default {
  components: { CareerHeroSection },
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
}

.wrapper {
  position: relative;

  img {
    position: absolute;
    right: -35rem;
    top: -10rem;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
}
</style>
