<template>
  <div class="showcase">
    <video
      src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/video.mp4?alt=media&token=8031c718-e75d-49a1-9412-3827e570da75"
      muted
      autoplay
      loop
    />
    <div class="overlay"></div>
    <div class="text">
      <div class="display-3 mb-2">Garments Maker Limited</div>
      <div class="overline">
        Leading Company of Bangladesh in Garments Industry
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.display-3 {
  font-weight: 600;
}
.overline {
  font-size: 0.95em !important;
  color: #ffa800;
}
.showcase {
  position: relative;
  height: 80vh;
  width: 100%;
  // background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  //   url(https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/homepage.jpg?alt=media&token=04e39b1d-0aa3-4c9a-ba22-31af488c264d);
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  .text {
    position: relative;
    z-index: 2;
    color: #fff;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin-left: 5em;
    .overline,
    .display-3,
    .subtitle-1 {
      font-family: 'Poppins', sans-serif !important;
    }
  }

  // .subtitle-1::after {
  //   content: '';
  //   position: absolute;
  //   height: 8px;
  //   width: 5em;
  //   background-color: #ffa800;
  //   bottom: 37%;
  //   left: 0;
  //   border-radius: 20px;
  // }

  @media only screen and (max-width: 600px) {
    .text {
      margin: 0 1em;
    }

    .subtitle-1::after {
      display: none;
    }

    .display-3 {
      font-size: 2em !important;
    }
  }
}
</style>
