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
    }
  },
  methods: {
    // login
    login() {
      // if not empty loginData
      if (this.loginData.email && this.loginData.password) {
        // redirect to dashboard overview
        this.$router.push({ name: 'Overview' });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/public/login/_login.scss';
</style>