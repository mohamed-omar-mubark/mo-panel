<template>
  <main class='dashboard-overview'>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Statistics />
        </div>

        <div class="col-auto">
          <RightSide />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import statistics component
import Statistics from '@/components/pages/auth/dashboard/overview/Statistics.vue';
// import right side component
import RightSide from '@/components/pages/auth/dashboard/overview/RightSide.vue';
export default {
  name: 'Overview',
  components: {
    Statistics,
    RightSide,
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/_dashboard.scss';
</style>