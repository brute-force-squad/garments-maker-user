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
          <div class="subtitle-1">CORPORATE OFFICE</div>
          <div class="body-2">
            HOUSE # 17, ROAD # 03, SECTOR # 11 UTTARA MODEL TOWN, DHAKA-1230
          </div>
          <br />
          <div class="subtitle-1">CHINA OFFICE</div>
          <div class="body-2">
            NO. 21018-2, 21 F, BUILDING B, WONDER PLAZA, KEQIAO, SHAOXING CITY,
            ZHERJIANG PROV CHINA.
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <contact-us-form />
        </v-col>
      </v-row>

      <v-row class="center-map">
        <contact-map />
      </v-row>
    </v-container>
    <the-snackbar />
  </div>
</template>

<script>
import TheSnackbar from '~/components/common/TheSnackbar.vue'
import ContactMap from '~/components/contact-us/ContactMap.vue'
import ContactUsForm from '~/components/contact-us/ContactUsForm.vue'
import ContactUsHeroSection from '~/components/contact-us/ContactUsHeroSection.vue'
export default {
  components: { ContactUsHeroSection, ContactUsForm, ContactMap, TheSnackbar },
}
</script>

<style lang="scss" scoped>
.display-2 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
}
.body-2,
.subtitle-1 {
  font-family: 'Poppins', sans-serif !important;
}

.center-map {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
}
</style>
