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
    left: -5rem;
    top: -4.5rem;
    opacity: 0.1;

    @media only screen and (max-width: 600px) {
      font-size: 90px;
      top: -2.8rem;
      left: -3.5rem;
    }
  }
}

// @media only screen and (max-width: 600px) {
//   .number {
//     font-size: 90px;
//   }
// }
</style>
