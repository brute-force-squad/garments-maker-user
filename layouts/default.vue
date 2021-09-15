<template>
  <v-app dark>
    <v-app-bar app color="primary" dark class="app-depth">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-flex d-md-none"
      ></v-app-bar-nav-icon>

      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/android-chrome-192x192.png?alt=media&token=2bf99d63-48ac-4dc3-bac2-dfe7c479acda"
            transition="scale-transition"
            width="50"
          />
        </div>
      </router-link>
      <v-toolbar-title>GML</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex">
        <v-btn
          v-for="item in mainItems"
          :key="item.title"
          class="mr-3 text-capitalize"
          :to="item.to"
          depressed
          plain
          text
        >
          {{ item.title }}
        </v-btn>

        <!-- sub items -->
        <v-menu left bottom rounded="lg" transition="scale-transition">
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              class="mr-3 text-capitalize"
              v-bind="attrs"
              v-on="on"
              depressed
              plain
              text
            >
              Others
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="item in subItems"
              :key="item.title"
              :to="item.to"
            >
              <v-list-item-title class="primary-font">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list nav>
        <v-list-item-group active-class="blue-grey--text text--darken-4">
          <v-list-item
            v-for="item in mainItems"
            :key="item.title"
            :to="item.to"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-list-group :value="true">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Others</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(item, i) in subItems" :key="i" :to="item.to">
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- main body -->
    <v-main>
      <nuxt />
    </v-main>

    <!-- footer -->
    <v-footer dark padless class="mt-12 primary">
      <v-container>
        <div class="text-center title">Garments Maker LTD</div>
        <v-row>
          <v-col cols="12" md="6">
            <div class="subtitle-1">CORPORATE OFFICE</div>
            <div class="body-2">
              HOUSE # 17, ROAD # 03, SECTOR # 11 UTTARA MODEL TOWN, DHAKA-1230
            </div>
            <br />
            <div class="subtitle-1">CHINA OFFICE</div>
            <div class="body-2">
              NO. 21018-2, 21 F, BUILDING B, WONDER PLAZA, KEQIAO, SHAOXING
              CITY, ZHERJIANG PROV CHINA.
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-list color="transparent" class="footer-list">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  ><a href="tel:+88-02-8991628"
                    >+88-02-8991628</a
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-deskphone</v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  ><a href="tel:+88-02-8991621"
                    >+88-02-8991621</a
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <a href="mailto:info@garmentsmakerbd.com"
                    >info@garmentsmakerbd.com</a
                  >
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-container>

      <v-card-text class="white--text text-center">
        © {{ new Date().getFullYear() }} — <strong>Garments Maker</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  head: {
    title: 'Garments Maker',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Garments Maker Limited | Manufacturer, Exporter & Importer',
      },
      {
        name: 'keywords',
        content:
          'Garments Maker Ltd, Garments Maker Limited, GML, Garments, garments, grmnt, garment, garment company, maker, gml company, গার্মেন্টস, গার্মেন্টস মেকার, গার্মেন্টস মেকার লিমিটেড, exporter, manufacturer, importer, private company, private limted, private company limited, business, cloths, clothing, cloth factory, store, cloth store, https://gml-user.themebuysell.com',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://gml-user.themebuysell.com/',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      mainItems: [
        { title: 'Home', to: '/' },
        { title: 'About GML', to: '/about-us' },
        { title: 'Our Strategy', to: '/our-strategy' },
        { title: 'Products', to: '/products' },
        { title: 'Contact Us', to: '/contact-us' },
      ],
      subItems: [
        { title: 'Gallery', to: '/gallery' },
        { title: 'Newsletter', to: '/newsletters' },
        { title: 'Career', to: '/career' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.title,
.subtitle-1,
.body-2 {
  font-family: 'Poppins', sans-serif !important;
}

.footer-list {
  a {
    color: #fff !important;
    text-decoration: none;
  }
}
</style>
