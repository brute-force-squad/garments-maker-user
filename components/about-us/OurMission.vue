<template>
  <div>
    <div v-for="mission in missions" :key="mission.id">
      <list-item-view :text="mission.text" />
    </div>
  </div>
</template>

<script>
import ListItemView from './ListItemView.vue'
export default {
  components: { ListItemView },
  data: () => ({
    missions: [
      { id: 1, text: 'To satisfy customers with superior quality and value.' },
      { id: 2, text: 'To meet the goal we are committed to putting the best.' },
      {
        id: 3,
        text: 'Endeavors and work as a team efficiently for continual.',
      },
      {
        id: 4,
        text: 'Improvement of the quality management system. The management ensures the employee’s benefits and Provide training to improve their skills to the desired level.',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
