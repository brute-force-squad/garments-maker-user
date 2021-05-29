<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-col
        v-for="team in teams"
        :key="team.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <operation-team-card :icon="team.icon" :name="team.name" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import OperationTeamCard from './OperationTeamCard.vue'
export default {
  components: { OperationTeamCard },
  data: () => ({
    teams: [
      { id: 1, icon: 'mdi-medal', name: 'Quality Team' },
      { id: 2, icon: 'mdi-factory', name: 'Production Team' },
      { id: 3, icon: 'mdi-source-branch', name: 'Technical Team' },
      { id: 4, icon: 'mdi-store', name: 'Marketing Team' },
      { id: 5, icon: 'mdi-puzzle-edit', name: 'Marchentising Team' },
      { id: 6, icon: 'mdi-palette', name: 'Design Team' },
      { id: 7, icon: 'mdi-bulletin-board', name: 'Material Sourcing Team' },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
