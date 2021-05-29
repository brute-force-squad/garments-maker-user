<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style lang="scss" scoped>
p {
  line-height: 180.5%;
  font-size: 16px;
}

p::first-letter {
  font-size: 48px;
}
</style>
