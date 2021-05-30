<template>
  <div>
    <hero-section />
    <v-container>
      <div class="display-2 text-center my-8">Our Valuable Clients</div>
      <v-row>
        <v-col cols="12" md="6">
          <client-table />
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-client.png?alt=media&token=2f614267-e13c-4174-a1fd-5fde3b364eb4"
            src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/clients.png?alt=media&token=7e5e73d1-e664-48dd-af44-91dcfc2ad928"
            contain
            height="400"
            class="mx-auto"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ClientTable from '~/components/our-clients/ClientTable.vue'
import HeroSection from '~/components/our-clients/HeroSection.vue'
export default {
  components: { HeroSection, ClientTable },
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
}
</style>
