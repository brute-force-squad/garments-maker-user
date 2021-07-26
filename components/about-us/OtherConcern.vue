<template>
  <v-row>
    <v-col cols="12" md="6">
      <div class="display-2 mt-12 mb-6">Our Concern</div>
      <div v-for="concern in concerns" :key="concern.id">
        <list-item-view :text="concern.text" />
      </div>
    </v-col>

    <v-col cols="12" md="6">
      <v-img
        lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-concern.png?alt=media&token=23419f7c-ad6b-4844-a47b-4fc2e3b0a115"
        src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/concern.png?alt=media&token=91f128e6-1e86-4cee-a29a-ac8ec1bb87ce"
        contain
        height="400"
        class="mx-auto"
      />
    </v-col>
  </v-row>
</template>

<script>
import ListItemView from './ListItemView.vue'
export default {
  components: { ListItemView },
  data: () => ({
    concerns: [
      { id: 1, text: 'NEXT ENTERPRISE' },
      { id: 2, text: 'JOINT BEAUTY INTL HONG KONG LTD' },
      { id: 3, text: 'ZIG FIZ NEXT ENTERPRISE INTL TRADE CO, LTD' },
      { id: 4, text: 'RAA SOURCING & TRADING' },
      { id: 5, text: 'SHAOXING MENG LONG IMP & EXP CO, LTD' },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
}
</style>
