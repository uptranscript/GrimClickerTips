<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="goTo(item.route)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: 'ようこそページ', icon: 'mdi-home', route: '/' },
      { title: 'スキル構築', icon: 'mdi-school', route: '/skills' },
      { title: '序盤の攻略', icon: 'mdi-sword', route: '/strategy' }
    ],
  }),
  methods: {
    goTo(route) {
      this.$router.push(route);
      this.drawer = false;
    }
  }
};
</script>
