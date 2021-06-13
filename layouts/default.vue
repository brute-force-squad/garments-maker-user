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
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "https://gml-user.themebuysell.com/"
      },
      {
        property="og:description",
        content="Garments Maker Limited | Manufacturer, Exporter & Importer"
      },
      {
        property="og:image", content="https://firebasestorage.googleapis.com/v0/b/garments-maker.appspot.com/o/android-chrome-192x192.png?alt=media&token=2bf99d63-48ac-4dc3-bac2-dfe7c479acda"
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
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
