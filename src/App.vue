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
}
</script>