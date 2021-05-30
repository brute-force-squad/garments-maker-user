<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <custom-paragraph>
          <p class="mt-6">
            In 2000 our company has initiated and developed. The concept of”
            Garments Maker Ltd”. Our first domain of intervention was garments
            which are presently our main activity. Since our creation we have
            been developing our expertise in the garments industry. 18 years of
            experience has largely validated our concept and placed us as a
            leader in this field. Through every day solving sourcing problems
            for our long-term customers, we have developed in-depth knowledge in
            the main fashion items we sell and continue to evolve according to
            the end customer and purchasing needs.
          </p>
        </custom-paragraph>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-book.png?alt=media&token=d93da7e3-af01-4902-a7e4-3c4434bee132"
          src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/book.png?alt=media&token=ce52bf86-1812-461f-a8c3-93a9e727d695"
          contain
          height="300"
          width="300"
          class="mx-auto"
        />
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

<style lang="scss" scoped></style>
