<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="display-2 mt-12 mb-6">Our Strategy</div>
        <p class="bold">
          Our vision is simple but bold – we aspire to create the supply chain
          of the future to help our customers navigate the digital economy and
          to make life better for one billion people in the supply chain.
        </p>
        <p>
          In 2000 our company has initiated and developed. The concept of”
          Garments Maker Ltd”. Our first domain of intervention was garments
          which are presently our main activity. Since our creation we have been
          developing our expertise in the garments industry. 18 years of
          experience has largely validated our concept and placed us as a leader
          in this field. Through every day solving sourcing problems for our
          long-term customers, we have developed in-depth knowledge in the main
          fashion items we sell and continue to evolve according to the end
          customer and purchasing needs.
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card flat class="card">
          <v-card-title>
            <v-icon class="icon strategy-icon" color="secondary">
              mdi-strategy</v-icon
            >
          </v-card-title>
          <v-card-text>
            Capturing and sharing data-driven insights across the entire value
            chain will help us better predict and interact with our customers
            faster and more creatively. Speed, innovation and digitalization are
            key to building the supply chain of the future.
            <div class="title mt-4">STRATEGIC DIRECTION</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card flat class="card">
          <v-card-title>
            <v-icon class="icon" color="secondary"> mdi-autorenew</v-icon>
          </v-card-title>
          <v-card-text>
            We responsibly manage our environmental, social and governance
            performance and work with our customers, suppliers and industry
            partners to further the sustainability of supply chains and
            communities across our ecosystem.
            <div class="title mt-4">SUSTAINABILITY STRATEGY</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CustomParagraph from '../common/CustomParagraph.vue'
export default {
  components: { CustomParagraph },
}
</script>

<style lang="scss" scoped>
.card {
  transition: all 0.5s;

  .title {
    opacity: 0;
  }

  &:hover {
    .title {
      opacity: 1;
    }
  }
}
.display-2,
.title {
  font-family: 'Poppins', sans-serif !important;
}

.icon {
  font-size: 2.5em;
}
</style>
