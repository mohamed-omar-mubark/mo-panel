<template>
  <main class='login'>
    <div class="top">
      <div class="overlay"></div>
      <div class="bg-particles">
        <vue-particles
          color="#fff"
          :particleOpacity=".5"
          :particlesNumber="30"
          shapeType="circle"
          :particleSize="5"
          :lineLinked="false"
          :moveSpeed="2"
          :hoverEffect="false"
          :clickEffect="false"
        >
        </vue-particles>
      </div>
    </div>
    <div class="bottom">
      <div class="content">
        <div class="head">
          <h1>MO Panel</h1>
          <p>{{ $t('premium_admin_dashboard') }}</p>
        </div>
        <div class="login-form">
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
          <div class="form-head">
            <span class="title">{{ $t('welcome_message') }}</span>
            <p>{{ $t('sign_in_message') }}</p>
          </div>
          <form class="main-form" @submit.prevent="login()">
            <div class="row">
              <div class="form-group mb-3">
                <label class="input-name" for="email">{{ $t('email') }}</label>
                <input type="email" class="form-control" id="email" :placeholder="$t('email_placeholder')" v-model="loginData.email">
              </div>
              <div class="form-group mb-4">
                <label class="input-name" for="password">{{ $t('password') }}</label>
                <input type="password" class="form-control" id="password" :placeholder="$t('password_placeholder')" v-model="loginData.password">
              </div>
              <div class="form-group">
                <button class="main-btn success d-block w-100" type="submit">{{ $t('sign_in') }}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="copyright">
        <p>{{ $t('copyright') }} <a href="mailto:mohamed.omar.mubark@gmail.com">{{ $t('mohamed_omar') }}</a></p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // login data
      loginData: {
        email: 'admin@mo-panel.com',
        password: '55555'
      },

      // languages
      languages: ['en', 'ar'],
    }
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
  methods: {
    // change page language and direction
    changeLanguage(event) {
      if(event.target.value === 'ar') {
        
        // add class arabic-style to app
        document.querySelector('#app').classList.add('arabic-style');
        // remove class english-style from app
        document.querySelector('#app').classList.remove('english-style');
      } else {

        // add class english-style to app
        document.querySelector('#app').classList.add('english-style');
        // remove class arabic-style from app
        document.querySelector('#app').classList.remove('arabic-style');
      }
      // set current language in local storage
      window.localStorage.setItem('currentLanguage', event.target.value); 
    },

    // login
    login() {
      // if not empty loginData
      if (this.loginData.email && this.loginData.password) {
        // success message
        this.$notify({ type: 'success', text: 'Successful Login' });
        // redirect to dashboard overview
        this.$router.push({ name: 'Overview' });
      }
    }
  }
};
</script>

<i18n>
{
  // english
  "en": {
    "premium_admin_dashboard": "Premium Admin & Dashboard Template",
    "welcome_message": "Welcome Back !",
    "sign_in_message": "Sign in to continue to MO Panel.",
    "email": "Email",
    "email_placeholder": "Enter your email",
    "password": "Password",
    "password_placeholder": "Enter your password",
    "sign_in": "Sign In",
    "copyright": "© 2022 MO Panel. Crafted with love by",
    "mohamed_omar": "Mohamed Omar"
  },

  // arabic
  "ar": {
    "premium_admin_dashboard": "لوحة تحكم مميزة",
    "welcome_message": "مرحبا بك !",
    "sign_in_message": "تسجيل الدخول للمتابعة إلى MO Panel.",
    "email": "البريد الإلكتروني",
    "email_placeholder": "أدخل بريدك الإلكتروني",
    "password": "كلمة المرور",
    "password_placeholder": "أدخل كلمة المرور",
    "sign_in": "تسجيل الدخول",
    "copyright": "© 2022 MO Panel. مصمم بحب بواسطة",
    "mohamed_omar": "محمد عمر"
  }
}
</i18n>

<style lang='scss' scoped>
@import '@/assets/scss/pages/public/login/_login.scss';
</style>