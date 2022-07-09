<template>
  <header class='dashboard-header'>
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- left contains (toggle sidebar button and search input) -->
        <div class="left">
          test
        </div>

        <!-- right contains (change language, notifications and user actions) -->
        <div class="right">
          <div class="dropdown header-item">
            <button type="button" class="dropdown-toggle-btn" :title="$t('change_language')" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img id="header-lang-img" src="@/assets/images/flags/en.svg" :alt="$t('Languages')" width="20" height="20" class="rounded">
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item" data-lang="en" :title="$t('english')">
                <img src="@/assets/images/flags/en.svg" :alt="$t('english')" width="18" height="18" class="rounded">
                <span>{{ $t('english') }}</span>
              </a>
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item" data-lang="en" :title="$t('arabic')">
                <img src="@/assets/images/flags/ar.svg" :alt="$t('arabic')" width="18" height="18" class="rounded">
                <span>{{ $t('arabic') }}</span>
              </a>
            </div>
        </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    // sticky header in scroll
    // define header
    let header = document.querySelector('.dashboard-header');
    // if window scroll is greater than 0
    window.onscroll = function() {
      if (window.scrollY >= 1) {
        // add class sticky-header to header
        header.classList.add('sticky-header');
      } else {
        // remove class sticky-header from header
        header.classList.remove('sticky-header');
      }
    };
  }
};
</script>

<i18n>
  {
    "en": {
      "Languages": "Languages",
      "change_language": "Change language",
      "english": "English",
      "arabic": "Arabic",
    },

    "ar": {
      "Languages": "اللغات",
      "change_language": "تغيير اللغة",
      "english": "الإنجليزية",
      "arabic": "العربية",
    },
  }
</i18n>

<style lang='scss' scoped>
@import '@/assets/scss/layouts/auth/_header.scss';
</style>