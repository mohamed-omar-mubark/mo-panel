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
          <p>Premium Admin & Dashboard Template</p>
        </div>
        <div class="login-form">
          <div class="form-head">
            <span class="title">Welcome Back !</span>
            <p>Sign in to continue to MO Panel.</p>
          </div>
          <form class="main-form" @submit.prevent="login()">
            <div class="row">
              <div class="form-group mb-3">
                <label class="input-name" for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="loginData.email">
              </div>
              <div class="form-group mb-4">
                <label class="input-name" for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password" v-model="loginData.password">
              </div>
              <div class="form-group">
                <button class="main-btn success d-block w-100" type="submit">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="copyright">
        <p>© 2022 MO Panel. Crafted with love by <a href="mailto:mohamed.omar.mubark@gmail.com">Mohamed Omar</a></p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginData: {
        email: 'admin@mo-panel.com',
        password: '55555'
      }
    }
  },
  methods: {
    login() {
      // if not empty loginData
      if (this.loginData.email && this.loginData.password) {
        // success message
        this.$notify({ type: 'success', text: 'Successful Login' });
        // redirect to dashboard
        this.$router.push({ name: 'Dashboard' });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/public/login/_login.scss';
</style>