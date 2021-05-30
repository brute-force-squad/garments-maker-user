<template>
  <div>
    <contact-us-hero-section />
    <v-container>
      <div class="display-2 text-center my-8">Contact With Us</div>
      <div class="body-2 text-center mb-12">
        If you have any kind of query or anything to say, please reach us from
        below.
      </div>
      <v-row>
        <v-col cols="12" md="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          impedit?
        </v-col>
        <v-col cols="12" md="8">
          <contact-us-form />
        </v-col>
      </v-row>

      <v-row class="center-map">
        <contact-map />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactMap from '~/components/contact-us/ContactMap.vue'
import ContactUsForm from '~/components/contact-us/ContactUsForm.vue'
import ContactUsHeroSection from '~/components/contact-us/ContactUsHeroSection.vue'
export default {
  components: { ContactUsHeroSection, ContactUsForm, ContactMap },
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
}
.body-2 {
  font-family: 'Poppins', sans-serif !important;
}

.center-map {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
