<template>
  <div>
    <v-card rounded="lg">
      <v-img :src="product.filePath" contain height="150" />
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle class="mt-3 py-0"
        ><span class="font-weight-medium">Buyer:</span>
        {{ product.buyer }}</v-card-subtitle
      >
      <v-card-subtitle
        ><span class="font-weight-medium">Category:</span>
        {{ product.category }}</v-card-subtitle
      >
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style lang="scss" scoped></style>
