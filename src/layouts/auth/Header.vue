<template>
  <header class='dashboard-header'>
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- left contains (toggle sidebar button and search input) -->
        <div class="left">
          left
        </div>

        <!-- right contains (change language, notifications and user actions) -->
        <div class="right">
          right
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/layouts/auth/_header.scss';
</style>