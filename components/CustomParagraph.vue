<template>
  <p>
    {{ text }}
  </p>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style lang="scss" scoped>
p {
  line-height: 180.5%;
}

p::first-letter {
  font-size: 48px;
}
</style>
