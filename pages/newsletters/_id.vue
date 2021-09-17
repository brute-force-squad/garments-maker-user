<template>
  <v-container class="custom-container">
    <div v-if="isLoading" class="d-flex justify-center">
      <v-progress-circular :size="50" color="primary" indeterminate />
    </div>
    <div v-else>
      <v-img :src="singleNews.url" aspect-ratio="3.5"></v-img>
      <div class="display-1 mt-6">{{ singleNews.title }}</div>
      <div class="body-2 mt-3">
        Published: {{ moment(singleNews.createAt).format('ll') }}
      </div>
      <div class="body-1 mt-8" v-html="singleNews.details"></div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  data: () => ({
    moment: moment,
  }),
  created() {
    this.$store.dispatch('getSingleNewsLetter', this.$route.params.id)
  },
  computed: {
    ...mapState(['singleNews', 'isLoading']),
  },
}
</script>

<style lang="scss" scoped>
.custom-container {
  max-width: clamp(45%, 500px, 95%);
}
</style>
