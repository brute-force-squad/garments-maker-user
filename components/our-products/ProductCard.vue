<template>
  <div>
    <v-card rounded="lg" outlined>
      <v-img :src="product.filePath" contain height="150" />
      <div class="center-texts">
        <div class="title">{{ product.name }}</div>
        <v-card-subtitle
          ><span class="font-weight-medium">Category:</span>
          {{ product.category }}</v-card-subtitle
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style lang="scss" scoped>
.center-texts {
  margin-top: 16px;
  text-align: center !important;
}
</style>
