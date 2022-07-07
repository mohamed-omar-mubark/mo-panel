<template>
  <main class="home">
    Home
  </main>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  created() {
    // redirect to login
    this.$router.push({ name: "Login" });
  },
};
</script>
