<template>
  <v-tabs color="primary" centered>
    <v-tab v-for="option in options" :key="option.name">
      {{ option.name }}
    </v-tab>

    <v-tab-item v-for="(option, i) in options" :key="i" class="mt-6">
      <p>
        {{ option.text }}
      </p>

      <div class="mt-10">
        <v-img
          :src="option.image"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/black.jpg?alt=media&token=35f0c007-4afc-432e-84bb-0d441598fcc5"
          contain
          max-height="400"
          max-width="400"
          class="mx-auto"
        >
          <!-- <template v-slot:placeholder>
            <v-sheet color="grey lighten-4">
              <v-skeleton-loader
                class="mx-auto my-auto"
                type="image"
              ></v-skeleton-loader>
            </v-sheet>
          </template> -->
        </v-img>
      </div>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        name: 'Design & Development',
        text: 'Garments Maker Ltd Insightfull R&d Team Is Alwasy On The Lookout For New Types Of Fabrics And Products. This Helps The Design And Sevelopment Team And Result In Better Client-management. Thiskeeps Garments Maker Ltd. One Step Ahead Of Other Textile-manufactures. This Fully-fledged Section, Headed By A Foreign Expert, Prepares Its Own Seasonal Collection According To The Latest Market-trends.',
        image:
          'https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/design%26development.svg?alt=media&token=228299ce-3cd4-4386-ba3b-70707c4d67d0',
      },
      {
        name: 'Communication',
        text: 'We believe that communication is at the heart of our business. That is why we have an operation in each of the customers and manufactures always. There is no gap between them.',
        image:
          'https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/communication.svg?alt=media&token=616f301e-e2e8-4402-b3ec-a92fb04fa772',
      },
      {
        name: 'Capacity',
        text: `We’ve a good list of compliant garments factories sourcing which works with us like according to Buyer requirements. GARMENTS MAKER LTD. has always been pushing the limits of its capacity, and
                    can now handle volume orders with ease. As a composite manufacturer,
                    GARMENTS MAKER LTD. advanced from knitting, dyeing and finishing to 
                    garment-manufacturing at a massive scale. GARMENTS MAKER LTD’S Fabric Unit, powered by superior European
                    machineries, is capable of pro-ducing 2 million yards of fabric per month.`,
        image:
          'https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/capacity.svg?alt=media&token=343d5d8a-ad67-42f3-8b29-418879a23107',
      },
      {
        name: 'Quality',
        text: `Quality has been the growing concern of our
                customers in the past years. With highly the
                competitive retail market we are continuously
                increasing our quality standard there is no
                compromise in case of quality.`,
        image:
          'https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/quality.png?alt=media&token=5b1ce4e1-f6a9-4608-ba69-c8256fb457f2',
      },
      {
        name: 'Price',
        text: `Price raw materials, exchange rates, knitting
                and weaving capacity, local labor cost. And an
                endless number of factors will eventually
                influence and have a positive or negative
                impact on price. We work buyers to create
                strategies to overcomeprice hikes where
                possible.`,
        image:
          'https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/price.png?alt=media&token=abe7025f-3ce7-46b0-814e-646d811708db',
      },
      {
        name: 'Speed',
        text: `Several factors will influence the production lead-time from the raw
                materials used to the local holidays of a country. It is our job to adjust the production schedules and locations accordingly
                to adapt the lead-time to the customer requirement. We have lead- times spanning from 30 days to 115 days according to the
                country and category of a product selected.
                It one of our core strengths to be able to deliver fashion quickly to the
                customers.`,
        image:
          'https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/speed.svg?alt=media&token=4c849f86-e3a9-49c7-b720-267ba268e34c',
      },
      {
        name: 'Ethics',
        text: `Ethical compliance is layered in 2 categories for us. The first Layer is market fits compliance requirements which are monitored by our
                own team members.
                The second layer is the requirements of each of our buyer which are inspected by
                authorized and nominated 3rd party professionals.
                With this 2 layer system, 100% of our production is conducted in locations
                complainant to the international and local labor standards.`,
        image:
          'https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/ethics.svg?alt=media&token=afa4c097-91dd-4e9c-83dc-fdd5692d1611',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  line-height: 168%;
}
</style>
