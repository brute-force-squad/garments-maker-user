<template>
  <div>
    <image-hero-section text="Our Products" />
    <v-container>
      <div class="title my-8 text-center">Some of our products</div>
      <div v-if="isLoading" class="d-flex justify-center">
        <v-progress-circular :size="50" color="primary" indeterminate />
      </div>
      <div v-else>
        <v-row>
          <v-col
            cols="12"
            sm="2"
            v-for="product in products"
            :key="product._id"
          >
            <product-card :product="product" />
          </v-col>
        </v-row>
      </div>
      <div class="display-1 text-center" v-show="products.length === 0">
        Sorry, we don't have any content to display
      </div>
    </v-container>
  </div>
</template>

<script>
import ImageHeroSection from '~/components/common/ImageHeroSection.vue'
import ProductCard from '~/components/our-products/ProductCard.vue'
import { mapState } from 'vuex'
export default {
  components: { ImageHeroSection, ProductCard },
  computed: {
    ...mapState(['products', 'isLoading']),
  },
  created() {
    this.$store.dispatch('getProducts')
  },
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
}
</style>
