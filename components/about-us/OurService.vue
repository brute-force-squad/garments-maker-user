<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <div class="display-2 mt-12 mb-6">Our Services</div>
        <div v-for="service in services" :key="service.id">
          <list-item-view :text="service.text" />
        </div>
        <div class="heading-text">Some of our controls include</div>
        <div v-for="control in controls" :key="control.id">
          <list-item-view :text="control.text" />
        </div>
      </v-col>

      <v-col cols="12" md="6" class="service-image">
        <v-img
          lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-service.png?alt=media&token=56a1b93a-87c5-4352-a7f8-0ff509931493"
          src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/service.png?alt=media&token=1edbed9d-0fe4-487c-8263-1085df7f57dc"
          contain
          height="500"
          width="500"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ListItemView from './ListItemView.vue'
export default {
  components: { ListItemView },
  data: () => ({
    services: [
      {
        id: 101,
        text: 'Knitting, dyeing, sewing finishing and garments all you needs - under one roof.',
      },
      { id: 102, text: 'Equipped with top of the line production facilities.' },
      { id: 103, text: 'Environmentally committed apparel producer.' },
      { id: 104, text: 'Composite textile for your composite satisfaction' },
    ],
    controls: [
      { id: 1, text: 'Factory evaluations.' },
      { id: 2, text: 'Sample appraisal.' },
      {
        id: 3,
        text: 'Identify and pre-empt production problems during placement meeting.',
      },
      {
        id: 4,
        text: 'Monitor laboratory tests result and match against local testing data.',
      },
      { id: 5, text: 'Maintain accurate product details and records.' },
      {
        id: 6,
        text: 'We understand that communication between the buyer and vendor is of prime Importance. Hence our organization is well equipped with Internal LAN system and email facilities. Our shipping staff caters the need to ensure timely delivery of consignments and the right documents.',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
}
.heading-text {
  font-size: 26px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin: 1.5rem 0;
}
.service-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
