<template>
  <div>
    <v-card rounded="xl" class="card-style">
      <v-card-text class="text-center">
        <v-icon class="icon">{{ icon }}</v-icon>
        <div class="team-name mt-6 primary--text">{{ name }}</div>
      </v-card-text>
      <div class="dim-icon">
        <v-icon class="dim-icon">{{ icon }}</v-icon>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['icon', 'name'],
}
</script>

<style lang="scss" scoped>
.card-style {
  min-width: 278px;
  height: 255px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  .dim-icon {
    position: absolute;
    font-size: 110px;
    bottom: -7%;
    right: -10%;
    opacity: 0.3;
  }
}

.icon {
  font-size: 65px;
  color: #3d3690;
}

.team-name {
  font-size: 26px;
  font-weight: bold;
  line-height: 130%;
}
</style>
