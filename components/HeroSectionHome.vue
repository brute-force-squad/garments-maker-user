<template>
  <div class="showcase">
    <video src="../static/video/cloth.mp4" muted autoplay loop></video>
    <div class="overlay"></div>
    <div class="text">
      <div class="overline">Manufacturer, Exporter & Importer</div>
      <div class="display-2">Garments Maker Limited</div>
      <div class="subtitle-1">
        Leading Company of Bangladesh in Garments Industry
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.showcase {
  position: relative;
  height: 80vh;
  margin: 0 !important;
  padding: 0 !important;

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
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .text {
    position: relative;
    z-index: 100;
    color: #fff;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5em;
    .overline,
    .display-2,
    .subtitle-1 {
      font-family: 'Poppins', sans-serif !important;
    }
    .display-2 {
      margin-left: -4px;
    }
  }

  .subtitle-1::after {
    content: '';
    position: absolute;
    height: 8px;
    width: 5em;
    background-color: #ffa800;
    bottom: 37%;
    left: 0;
    border-radius: 20px;
  }

  @media only screen and (max-width: 600px) {
    .text {
      margin: 0 1em;
    }

    .subtitle-1::after {
      display: none;
    }

    .display-2 {
      font-size: 1.8em !important;
    }
  }
}
</style>
