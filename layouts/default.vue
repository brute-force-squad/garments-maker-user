<template>
  <v-app dark>
    <v-app-bar app color="primary" dark class="app-depth">
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/bareleaf-admin.appspot.com/o/logo-removebg.png?alt=media&token=ed98e02a-ae33-4abf-b217-c959eff8e116"
            transition="scale-transition"
            width="60"
          />
        </div>
      </router-link>
      <v-toolbar-title>Bareleaf</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="d-none d-sm-flex">
        <v-btn
          v-for="item in items"
          :key="item.title"
          class="mr-3 text-capitalize"
          :to="item.to"
          depressed
          plain
          text
        >
          {{ item.title }}
        </v-btn>
      </div>
      <div class="d-flex d-sm-none">
        <v-menu left bottom rounded="lg" transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" aria-label="menu">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="item in items" :key="item.title" :to="item.to">
              <v-list-item-title class="primary-font">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      items: [
        { title: 'Home', to: '/' },
        { title: 'About Us', to: '/about-us' },
        { title: 'Products', to: '/products' },
        { title: 'Our Clients', to: '/our-clients' },
        { title: 'Career', to: '/career' },
        { title: 'Contact Us', to: '/contact-us' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.app-depth {
  z-index: 100;
}
</style>
