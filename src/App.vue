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
  mounted() {
    // define app
    let myApp = document.querySelector("#app");
    // define app languages
    let langs = ['en', 'ar'];
    // define current app language
    let lang = localStorage.lang;
    // if localStorage lang is set and it is a valid language
    if(!lang || lang === '' || !langs.includes(lang)) {
      // set default language
      localStorage.setItem('lang', 'en');
      // reload page
      this.$router.go(this.$router.currentRoute);
    }
    // if localStorage lang is a valid language
    if(langs.includes(lang)) {
      // set the language
      if(lang === 'en') {
        myApp.style.direction = "ltr";
        myApp.style.fontFamily = "'Poppins', sans-serif";
      }
      if(lang === 'ar') {
        myApp.classList.add('arabic-style');
      }
    }
  }
}
</script>