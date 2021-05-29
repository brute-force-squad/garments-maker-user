<template>
  <div class="main-section">
    <div class="wrapper my-10">
      <div class="display-1">{{ title }}</div>
      <div class="number">{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['number', 'title'],
}
</script>

<style lang="scss" scoped>
.display-1 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    font-size: 25px !important;
  }
}

.main-section {
  display: flex;
  justify-content: center;
}

.wrapper {
  position: relative;

  .number {
    position: absolute;
    font-size: 125px;
    font-weight: 900;
    left: -6rem;
    top: -4.5rem;
    opacity: 0.1;

    @media only screen and (max-width: 600px) {
      font-size: 50px;
      top: -1.2rem;
      left: -2.5rem;
    }
  }
}
</style>
