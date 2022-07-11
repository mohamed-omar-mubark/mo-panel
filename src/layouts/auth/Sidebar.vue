<template>
  <aside class='dashboard-sidebar'>
    <!-- sidebar brand logo -->
    <div class="brand">
      <span>Mo Panel</span>
    </div>

    <!-- sidebar main navbar -->
    <div class="sidebar-nav">
      <!-- main menu -->
      <ul class="main-menu">
        <li class="category-name">
          <span>{{ $t('menu') }}</span>
        </li>
        <!-- main menu item -->
        <li :class="$route.name === 'Overview' ? 'main-menu-item active' : 'main-menu-item'">
          <!-- main menu link -->
          <div class="main-menu-link">
            <div class="content">
              <i class="fas fa-tachometer-alt"></i>
              <span class="text">{{ $t('dashboard') }}</span>
            </div>
            <!-- arrow -->
            <div class="arrow">
              <i class="arrow fas fa-angle-right"></i>
            </div>
          </div>

          <!-- submenu -->
          <ul class="submenu">
            <!-- submenu item -->
            <li class="submenu-item">
              <!-- submenu link -->
              <router-link :to="{ name: 'Overview' }" class="submenu-link">
                <span class="text">{{ $t('analytics') }}</span>
              </router-link>
            </li>

            <!-- submenu item -->
            <li class="submenu-item">
              <!-- submenu link -->
              <router-link :to="{ name: 'Overview' }" :class="$route.name === 'Overview' ? 'submenu-link active' : 'submenu-link'">
                <span class="text">{{ $t('ecommerce') }}</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="category-name">
          <span>{{ $t('pages') }}</span>
        </li>
        <!-- main menu item -->
        <li :class="$route.name === 'Dashboard' ? 'main-menu-item active' : 'main-menu-item'">
          <!-- main menu link -->
          <div class="main-menu-link">
            <div class="content">
              <i class="fas fa-rocket"></i>
              <span class="text">{{ $t('Apps') }}</span>
            </div>
            <!-- arrow -->
            <div class="arrow">
              <i class="arrow fas fa-angle-right"></i>
            </div>
          </div>

          <!-- submenu -->
          <ul class="submenu">
            <!-- submenu item -->
            <li class="submenu-item">
              <!-- submenu link -->
              <router-link :to="{ name: 'Overview' }" class="submenu-link">
                <span class="text">{{ $t('analytics') }}</span>
              </router-link>
            </li>

            <!-- submenu item -->
            <li class="submenu-item">
              <!-- submenu link -->
              <router-link :to="{ name: 'Overview' }" :class="$route.name === 'Dashboard' ? 'submenu-link active' : 'submenu-link'">
                <span class="text">{{ $t('ecommerce') }}</span>
              </router-link>
            </li>
          </ul>
        </li>

        <!-- main menu item -->
        <li :class="$route.name === 'Home' ? 'main-menu-item active' : 'main-menu-item'">
          <!-- main menu link -->
          <div class="main-menu-link">
            <div class="content">
              <i class="fas fa-th-large"></i>
              <span class="text">{{ $t('Components') }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {
    // add class active to current main menu item
    this.$nextTick(() => {
      const mainMenuItems = document.querySelectorAll('.main-menu-item');
      mainMenuItems.forEach(item => {
        item.addEventListener('click', () => {
          mainMenuItems.forEach(item => {
            item.classList.remove('active');
          });
          item.classList.add('active');
        });
      });
    });
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/layouts/auth/_sidebar.scss';
</style>