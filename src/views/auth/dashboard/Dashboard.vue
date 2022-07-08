<template>
  <main class='dashboard'>
    <!-- Header -->
    <Header />

    <!-- Sidebar -->
    <Sidebar />
    <!-- dashboard views -->
    <router-view></router-view>
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
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/_dashboard.scss';
</style>