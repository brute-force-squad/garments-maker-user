<template>
  <div>
    <hero-section-home />
    <v-container>
      <!-- SECTION 1: OUR HISTORY  -->
      <custom-title number="01" title="Our History" class="my-6" />
      <v-row>
        <v-col cols="12" md="6">
          <custom-paragraph>
            <p>
              In 2000 our company has initiated and developed. The concept of”
              Garments Maker Ltd”. Our first domain of intervention was garments
              which are presently our main activity. Since our creation we have
              been developing our expertise in the garments industry. 18 years
              of experience has largely validated our concept and placed us as a
              leader in this field. Through every day solving sourcing problems
              for our long-term customers, we have developed in-depth knowledge
              in the main fashion items we sell and continue to evolve according
              to the end customer and purchasing needs.
            </p>
          </custom-paragraph>
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

      <!-- END -->

      <!-- SECTION 2: WHAT WE DO -->
      <custom-title number="02" title="What We Do" class="my-6" />
      <v-row>
        <v-col cols="12" md="6">
          <custom-paragraph>
            <p>
              We basically make every kinds of wear a person need from baby
              dress to adult. We also make sports wear which feels comfortable
              to wear and long lasting. We do uniforms for school and college
              students according to their needs. We also provide wear for
              maternity period of a woman, fashionable designed cloths for all
              kinds of seasons. <br /><br />
              Our vision is to achieve business. Excellence by working with
              world Class buyers for garments wherequality will be the
              cornerstone of success. Develop new resources and products
              Appraise vendors of Buyer’s requirements, Effective costing and
              price negotiations, Communications with buyer on a daily basis
              counters checking Or product quality, weekly report for customers,
              highlighting Production status, shipping information, sample
              status and Other customized reports for customers.
            </p>
          </custom-paragraph>
        </v-col>
        <v-col cols="12" md="6">
          <v-timeline>
            <v-timeline-item
              v-for="(cloth, i) in cloths"
              :key="i"
              :color="cloth.color"
              small
            >
              <template v-slot:opposite>
                <span class="primary--text" v-text="cloth.cloth"></span>
              </template>
            </v-timeline-item>
          </v-timeline>
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
  data: () => ({
    cloths: [
      {
        color: 'cyan',
        cloth: "Men's Wear",
      },
      {
        color: 'green',
        cloth: "Women's Wear",
      },
      {
        color: 'pink',
        cloth: 'Kids Wear',
      },
      {
        color: 'amber',
        cloth: 'Sports Wear',
      },
      {
        color: 'orange',
        cloth: 'Uniform',
      },
      {
        color: 'green',
        cloth: 'Sweater',
      },
      {
        color: 'purple',
        cloth: 'Maternity ',
      },
      {
        color: 'blue',
        cloth: 'Home Textile',
      },
      {
        color: 'amber',
        cloth: 'Fast Fashion',
      },
    ],
  }),
}
</script>
