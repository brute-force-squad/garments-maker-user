<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <p class="mt-6">
          Garments Maker Ltd. is a garment exporter and sourcing company created
          to match potential buyers with ideal suppliers.
        </p>
        <p>
          We aim to find our clients the perfect suppliers who will not only
          provide pristine quality garments within a competitive price range.
          While doing this, we also make sure the raw materials and labor are
          sourced ethically.
        </p>
        <p>
          At Garments maker, we conduct extensive research to filter out only
          the best suppliers who meet all the critical criteria and
          certifications which are demanded by the clients. Even though our main
          focus is on sourcing specialized or critical products for our clients
          but we are also ready to support startup businesses or those who wish
          to order in smaller quantities.
        </p>
        <p>
          We incorporated our business in 2018 and within this relatively short
          period of time we were able to deliver our services to renowned brands
          from Russia, UK, US and other European countries.
        </p>
      </v-col>

      <v-col cols="12" md="4">
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
