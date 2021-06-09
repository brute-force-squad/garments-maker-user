<template>
  <div class="banner-area my-12">
    <div class="content-area">
      <div class="text text-center">
        Total number of staff in Garments Maker LTD Office
      </div>
      <div class="number secondary--text font-weight-bold">40</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner-area {
  width: 100%;
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/office.jpg?alt=media&token=d559c5bd-b2b5-4da6-ac28-e0cdda1e11a4);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content-area {
  position: relative;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;

  .text {
    font-size: 32px;
  }

  .number {
    font-size: 64px;
  }
}
</style>
