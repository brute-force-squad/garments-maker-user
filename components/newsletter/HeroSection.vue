<template>
  <div class="banner-area">
    <div class="content-area">
      <div class="display-2">Newsletter</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style lang="scss" scoped>
.banner-area {
  width: 100%;
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/newsletter.jpg?alt=media&token=4a06707e-82c5-4c06-a04f-7603d9a9f60e);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content-area {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
