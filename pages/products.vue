<template>
  <div>
    <image-hero-section text="Our Products" />
    <v-container>
      <div class="display-2 my-8 text-center">Our Products</div>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <product-card />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ImageHeroSection from '~/components/common/ImageHeroSection.vue'
import ProductCard from '~/components/our-products/ProductCard.vue'
export default {
  components: { ImageHeroSection, ProductCard },
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
}
</style>
