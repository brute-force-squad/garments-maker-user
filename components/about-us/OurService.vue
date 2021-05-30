<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <div class="featureList" v-for="service in services" :key="service.id">
          <div class="featureList_item">
            {{ service.text }}
          </div>
        </div>
        <div class="heading-text">Some of our controls include</div>
        <div class="featureList" v-for="control in controls" :key="control.id">
          <div class="featureList_item">
            {{ control.text }}
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          lazy-src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/lazy-service.png?alt=media&token=56a1b93a-87c5-4352-a7f8-0ff509931493"
          src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/service.png?alt=media&token=1edbed9d-0fe4-487c-8263-1085df7f57dc"
          contain
          height="500"
          width="500"
          class="my-auto mx-auto"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        id: 1,
        text: 'Knitting, dyeing, sewing finishing and garments all you needs - under one roof.',
      },
      { id: 2, text: 'Equipped with top of the line production facilities.' },
      { id: 3, text: 'Environmentally committed apparel producer.' },
      { id: 4, text: 'Composite textile for your composite satisfaction' },
    ],
    controls: [
      { id: 1, text: 'Factory evaluations.' },
      { id: 2, text: 'Sample appraisal.' },
      {
        id: 3,
        text: 'Identify and pre-empt production problems during placement meeting.',
      },
      {
        id: 4,
        text: 'Monitor laboratory tests result and match against local testing data.',
      },
      { id: 5, text: 'Maintain accurate product details and records.' },
      {
        id: 6,
        text: 'We understand that communication between the buyer and vendor is of prime Importance. Hence our organization is well equipped with Internal LAN system and email facilities. Our shipping staff caters the need to ensure timely delivery of consignments and the right documents.',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.heading-text {
  font-size: 26px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin: 1.5rem 0;
}

.featureList {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 30px;

  .featureList_item {
    padding-left: 32px;
    font-size: 17px;
    color: #19061c;
    line-height: 168%;
    position: relative;
    // margin-bottom: 24px;

    &::before {
      content: '';
      width: 22px;
      height: 22px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('../../static/img/check_circle.svg') center no-repeat;
      background-size: 22px;
      background-size: contain;
      position: absolute;
      left: 0;
      top: 4px;
    }
  }
}
</style>
