<template>
  <div>
    <hero-section />
    <v-container>
      <div class="title text-center my-8">Our Newsletters</div>
      <div v-if="isLoading" class="d-flex justify-center">
        <v-progress-circular :size="50" color="primary" indeterminate />
      </div>

      <div v-else>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="item in newsletter"
            :key="item._id"
          >
            <v-card>
              <v-img height="250" :src="item.url"></v-img>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <div class="caption">
                  Published: {{ moment(item.createAt).format('ll') }}
                </div>
                <div class="mt-2" v-html="formattedMessage(item.details)"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="orange accent-4"
                  :to="`/newsletters/${item._id}`"
                >
                  Read More <v-icon right> mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="display-1 text-center" v-show="newsletter.length === 0">
        Sorry, we don't have any content to display
      </div>
    </v-container>
  </div>
</template>

<script>
import HeroSection from '~/components/newsletter/HeroSection.vue'
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  components: { HeroSection },
  data: () => ({
    moment: moment,
  }),
  created() {
    this.$store.dispatch('getNewsLetters')
  },
  computed: {
    ...mapState(['newsletter', 'isLoading']),
  },
  methods: {
    formattedMessage(str) {
      return str.substring(0, 45).concat('...')
    },
  },
}
</script>

HeroSection
<style lang="scss" scoped></style>
