<template>
  <div>
    <hero-section />
    <v-container>
      <div class="display-2 text-center my-8">Gallery</div>
      <div v-if="isLoading" class="d-flex justify-center">
        <v-progress-circular :size="50" color="primary" indeterminate />
      </div>

      <div v-else>
        <v-row>
          <v-col
            v-for="n in galleryImages"
            :key="n._id"
            class="d-flex child-flex"
            cols="4"
          >
            <v-img :src="n.url" aspect-ratio="1.5" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </div>
      <div class="display-1 text-center" v-show="galleryImages.length === 0">
        Sorry, we don't have any content to display
      </div>
    </v-container>
  </div>
</template>

<script>
import ClientTable from '~/components/our-clients/ClientTable.vue'
import HeroSection from '~/components/our-clients/HeroSection.vue'
import { mapState } from 'vuex'

export default {
  components: { HeroSection, ClientTable },
  computed: {
    ...mapState(['galleryImages', 'isLoading']),
  },
  created() {
    this.$store.dispatch('getGallery')
  },
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
}
</style>
