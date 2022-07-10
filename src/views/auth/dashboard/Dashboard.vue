<template>
  <main class='dashboard'>
    <!-- Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      app
      class=""
    >
      <Sidebar />
    </v-navigation-drawer>

    <!-- Header -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <Header />
    </v-app-bar>

    <!-- dashboard views -->
    <v-main>
      <router-view class="dashboard-views"></router-view>
    </v-main>
  </main>
</template>

<script>
// import header
import Header from '@/layouts/auth/Header.vue';
// import sidebar
import Sidebar from '@/layouts/auth/Sidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      drawer: null
    };
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/_dashboard.scss';
</style>