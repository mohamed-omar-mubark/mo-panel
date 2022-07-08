<template>
  <div id="app">
    <!-- PreLoading -->
    <PreLoading />
    <!-- app views -->
    <router-view />
    <!-- notification -->
    <notifications position="bottom right" />
  </div>
</template>

<script>
// PreLoading component
import PreLoading from '@/components/preloading/PreLoading.vue';

export default {
  components: {
    PreLoading
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
    if(window,localStorage.currentLanguage === 'ar') {
        
      // add class arabic-style to app
      document.querySelector('#app').classList.add('arabic-style');
    } else {

      // add class english-style to app
      document.querySelector('#app').classList.add('english-style');
    }
  },
}
</script>