<template>
  <v-app dark>
    <v-app-bar app color="primary" dark class="app-depth">
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/android-chrome-192x192.png?alt=media&token=2bf99d63-48ac-4dc3-bac2-dfe7c479acda"
            transition="scale-transition"
            width="60"
          />
        </div>
      </router-link>
      <v-toolbar-title>GML</v-toolbar-title>

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
    <v-footer dark padless class="mt-12">
      <v-card flat tile class="primary white--text">
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text text-center">
          © {{ new Date().getFullYear() }} — <strong>Garments Maker</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
