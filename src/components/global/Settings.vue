<template>
  <button class='settings' type="button" data-bs-toggle="offcanvas" data-bs-target="#settings-offcanvas" aria-controls="settings-offcanvas">
    <i class="fas fa-cog"></i>
  </button>
  <!-- settings offcanvas -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="settings-offcanvas" aria-labelledby="settings-offcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="settings-offcanvasLabel">Offcanvas</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="change-language mb-2">
        <select v-model="$i18n.locale" @change="changeLanguage($event)">
          <option
            v-for="langnguage in languages"
            :key="langnguage"
            :value="langnguage">
            {{ langnguage }}
          </option>
        </select>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      // languages
      languages: ['en', 'ar'],
    }
  },
  methods: {
    // change page language and direction
    changeLanguage(event) {
      if(event.target.value === 'ar') {
        
        // add rtl to body
        document.querySelector('body').setAttribute('dir', 'rtl');
        // add class arabic-style to app
        document.querySelector('#app').classList.add('arabic-style');
        // remove class english-style from app
        document.querySelector('#app').classList.remove('english-style');
      } else {
        
        // add ltr to body
        document.querySelector('body').setAttribute('dir', 'ltr');
        // add class english-style to app
        document.querySelector('#app').classList.add('english-style');
        // remove class arabic-style from app
        document.querySelector('#app').classList.remove('arabic-style');
      }
      // set current language in local storage
      window.localStorage.setItem('currentLanguage', event.target.value); 
    }
  }
};
</script>

<style lang='scss' scoped>
.settings {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 40px;
  right: 20px;
  [dir=rtl] & {
    right: auto;
    left: 20px;
  }
  width: 50px;
  height: 50px;
  background-color: var(--main-color);
  border-radius: 50%;
  opacity: 0.8;
  font-size: 20px;
  color: #fff;
  z-index: 999;
  &:hover {
    opacity: 1;
  }

  svg {
    animation: settingsAnimation 2s infinite;
    @keyframes settingsAnimation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>