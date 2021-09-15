<template>
  <div>
    <hero-section />
    <v-container>
      <div class="title text-center my-8">Our Newsletters</div>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>How we've grown small to big</v-card-title>
            <v-card-text>
              <div class="caption">Published: 21 September, 2021</div>
              <div class="mt-2">
                {{ formattedMessage }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="orange accent-4" to="/newsletters/2">
                Read More <v-icon right> mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeroSection from '~/components/newsletter/HeroSection.vue'
export default {
  components: { HeroSection },
  data: () => ({
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam sed sequi facilis quo officia, explicabo ipsa!Tempore, rem? Eius.',
  }),
  computed: {
    formattedMessage() {
      return this.message.substring(0, 60).concat('...')
    },
  },
}
</script>

HeroSection
<style lang="scss" scoped></style>
