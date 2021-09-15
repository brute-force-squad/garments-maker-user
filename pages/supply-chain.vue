<template>
  <div>
    <div class="banner-area">
      <div class="content-area">
        <div class="display-2">Our Strategy</div>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="title mt-12">
            Our supply chain solutions are all about helping our customers by
            delivering speed and efficiency across their global supply chains
            and enabling margin enhancement and innovation.
          </p>
          <p>
            Breaking the mold of a traditional sourcing agent, we offer a range
            of solutions to mills, factories and other vendors helping them
            navigate supply chain complexity and increased compliance to
            accelerate the creation of sustainable supply chain solutions.
          </p>
          <p>
            With our history of strong relationships with suppliers, our
            Production Platform, including our digital order tracking system and
            quality resource optimization tools keep us better connected with
            our myriad of suppliers in over 40 production markets around the
            globe. Having boots on the ground puts us closer to the needlepoint,
            bringing our customers specialist and timely insight and allowing us
            to work with vendors and factories real-time, meaning fewer layers
            and faster decisions. All the tools on our four platforms are
            collaborative and can be customized for each customer.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <div class="display-1 my-8">Enabling Speed</div>
          <p>
            With our history of strong relationships with suppliers, our
            Production Platform, including our digital order tracking system and
            quality resource optimization tools keep us better connected with
            our myriad of suppliers in over 40 production markets around the
            globe. Having boots on the ground puts us closer to the needlepoint,
            bringing our customers specialist and timely insight and allowing us
            to work with vendors and factories real-time, meaning fewer layers
            and faster decisions. All the tools on our four platforms are
            collaborative and can be customized for each customer.
          </p>
        </v-col>
        <v-col sm="4" class="d-none d-sm-flex center">
          <v-icon class="icon" color="amber darken-2"> mdi-clock-fast </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.banner-area {
  width: 100%;
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/supplychain.jpg?alt=media&token=52d25a3c-15df-4810-b3db-8bc3467ca05f);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-area {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.display-1 {
  font-family: 'Poppins', sans-serif !important;
}

.display-2 {
  font-family: 'Poppins', sans-serif !important;
  color: #fff;
  margin-left: 2em;
}

.display-2::after {
  content: '';
  position: absolute;
  height: 8px;
  width: 2em;
  background-color: #ffa800;
  bottom: 40%;
  left: 2em;
  border-radius: 20px;
}

.icon {
  font-size: 15em;
}

.title {
  font-family: 'Poppins', sans-serif !important;
}

@media only screen and (max-width: 600px) {
  .display-2 {
    margin-left: 15px;
    font-size: 1.8em !important;
  }
  .display-2::after {
    content: '';
    position: absolute;
    height: 8px;
    width: 2em;
    background-color: #ffa800;
    bottom: 40%;
    left: 15px;
    border-radius: 20px;
  }
}
</style>
