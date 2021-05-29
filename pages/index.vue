<template>
  <div>
    <hero-section-home />
    <v-container>
      <custom-title number="01" title="Our History" class="my-6" />
      <v-row>
        <v-col cols="12" md="6">
          <custom-paragraph
            text="In 2000 our company has initiated and developed. The concept
              of” Garments Maker Ltd”. Our first domain of intervention was garments which are
              presently our main activity. Since our creation we have been developing our
              expertise in the garments industry. 18 years of experience has largely validated our
              concept and placed us as a leader in this field. Through every day solving sourcing
              problems for our long-term customers, we have developed in-depth knowledge in
              the main fashion items we sell and continue to evolve according to the end
              customer and purchasing needs."
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            class="mx-auto my-auto"
            max-height="400"
            max-width="500"
            lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-leaf-cloth.png?alt=media&token=b3f72371-e81f-411d-99ee-fbac4df484cc"
            src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/leaf-cloth.png?alt=media&token=5d5ed11d-26b4-47f6-b1ca-13bc530683a8"
            contain
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CustomParagraph from '~/components/CustomParagraph.vue'
import CustomTitle from '~/components/CustomTitle.vue'
import HeroSectionHome from '~/components/HeroSectionHome.vue'

export default {
  components: { HeroSectionHome, CustomTitle, CustomParagraph },
}
</script>
