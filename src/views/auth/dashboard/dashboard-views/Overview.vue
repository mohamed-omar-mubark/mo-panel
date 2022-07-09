<template>
  <main class='dashboard-overview'>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Statistics />
        </div>

        <div class="col-auto">
          test right side
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import statistics component
import Statistics from '@/components/pages/auth/dashboard/overview/Statistics.vue';
export default {
  name: 'Overview',
  components: {
    Statistics,
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/_dashboard.scss';
</style>