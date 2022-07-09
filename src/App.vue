<template>
  <div id="app">
    <!-- PreLoading -->
    <PreLoading />
    <!-- app views -->
    <router-view />
    <!-- notification -->
    <notifications position="bottom right" />
    <!-- settings -->
    <Settings />
  </div>
</template>

<script>
// PreLoading component
import PreLoading from '@/components/global/PreLoading.vue';
// Settings component
import Settings from '@/components/global/Settings.vue';

export default {
  components: {
    PreLoading,
    Settings
  },
  created() {
    // if current language is set in local storage
    if (window.localStorage.currentLanguage) {
      // change i18n locale
      this.$i18n.locale = window.localStorage.currentLanguage;
    }
  },
  mounted() {
    // set app direction to current language
    if(window.localStorage.currentLanguage === 'ar') {
        
      // add class arabic-style to app
      document.querySelector('#app').classList.add('arabic-style');
      // add rtl to body
      document.querySelector('body').setAttribute('dir', 'rtl');
    } else {

      // add class english-style to app
      document.querySelector('#app').classList.add('english-style');
      // add ltr to body
      document.querySelector('body').setAttribute('dir', 'ltr');
    }
  },
}
</script>