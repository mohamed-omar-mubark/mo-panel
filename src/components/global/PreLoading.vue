<template>
  <transition>
    <div class="loading" v-if="show">
      <h1>Mo Panel</h1>
      <pulse-loader></pulse-loader>
    </div>
  </transition>
</template>

<script>
// pulse loading component
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: "PreLoading",
  components: {
    PulseLoader
  },
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.toggleLoading();
  },
  methods: {
    // toggleLoading
    toggleLoading() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>