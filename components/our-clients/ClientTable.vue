<template>
  <div>
    <v-card rounded="lg">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in clients" :key="item._id">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    this.$store.dispatch('getClients')
  },
  computed: {
    ...mapState(['clients']),
  },
}
</script>
