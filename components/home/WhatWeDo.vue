<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <custom-paragraph>
          <p>
            We basically make every kinds of wear a person need from baby dress
            to adult. We also make sports wear which feels comfortable to wear
            and long lasting. We do uniforms for school and college students
            according to their needs. We also provide wear for maternity period
            of a woman, fashionable designed cloths for all kinds of seasons.
            <br /><br />
            Our vision is to achieve business. Excellence by working with world
            Class buyers for garments wherequality will be the cornerstone of
            success. Develop new resources and products Appraise vendors of
            Buyer’s requirements, Effective costing and price negotiations,
            Communications with buyer on a daily basis counters checking Or
            product quality, weekly report for customers, highlighting
            Production status, shipping information, sample status and Other
            customized reports for customers.
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
  </div>
</template>

<script>
import CustomParagraph from '../common/CustomParagraph.vue'
export default {
  components: { CustomParagraph },
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

<style lang="scss" scoped></style>
