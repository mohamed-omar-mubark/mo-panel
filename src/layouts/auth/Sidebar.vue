<template>
  <aside class='dashboard-sidebar'>
    <div class="brand">
      <span>Mo Panel</span>
    </div>

    <div class="sidebar-nav">
      <ul class="main-menu">
        <li class="category-name">
          <span>{{ $t('menu') }}</span>
        </li>
        <li :class="$route.name === 'Overview' ? 'main-menu-item active' : 'main-menu-item'">
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
            <li class="submenu-item">
              <router-link :to="{ name: 'Overview' }" class="submenu-link">
                <span class="text">{{ $t('analytics') }}</span>
              </router-link>
            </li>

            <li class="submenu-item">
              <router-link :to="{ name: 'Overview' }" :class="$route.name === 'Overview' ? 'submenu-link active' : 'submenu-link'">
                <span class="text">{{ $t('ecommerce') }}</span>
              </router-link>
            </li>

            <li class="submenu-item">
              <router-link :to="{ name: 'Overview' }" class="submenu-link">
                <span class="text">{{ $t('crm') }}</span>
              </router-link>
            </li>

            <li class="submenu-item">
              <router-link :to="{ name: 'Overview' }" class="submenu-link">
                <span class="text">{{ $t('erb') }}</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li :class="$route.name === 'Dashboard' ? 'main-menu-item active' : 'main-menu-item'">
          <div class="main-menu-link">
            <div class="content">
              <i class="fas fa-chart-line"></i>
              <span class="text">{{ $t('analytics') }}</span>
            </div>
            <!-- arrow -->
            <div class="arrow">
              <i class="arrow fas fa-angle-right"></i>
            </div>
          </div>

          <!-- submenu -->
          <ul class="submenu">
            <li class="submenu-item">
              <router-link :to="{ name: 'Overview' }" :class="$route.name === 'Dashboard' ? 'submenu-link active' : 'submenu-link'">
                <span class="text">{{ $t('ecommerce') }}</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {
    
  }
};
</script>

<i18n>
{
  // english
  "en": {
    "menu": "Menu",
    "dashboard": "Dashboard",
    "ecommerce": "Ecommerce",
    "analytics": "Analytics",
    "crm": "CRM",
    "erb": "ERB"
  },

  // arabic
  "ar": {
    "menu": "القائمة",
    "dashboard": "لوحة التحكم",
    "ecommerce": "التجارة الإلكترونية",
    "analytics": "التحليل",
    "crm": "CRM",
    "erb": "ERB"
  }
}
</i18n>

<style lang='scss' scoped>
@import '@/assets/scss/layouts/auth/_sidebar.scss';
</style>