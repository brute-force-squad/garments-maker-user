<template>
  <div class="featureList">
    <div class="featureList_item">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style lang="scss" scoped>
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
