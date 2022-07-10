<template>
  <main class='dashboard-overview'>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Statistics />
          <div class="row">
            <div class="col">
              <BestSelling />
            </div>

            <div class="col">
              <TopSellers />
            </div>
          </div>
          <div class="row">
            <div class="col-auto">
              <VisitsSource />
            </div>
          </div>
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
// import best selling
import BestSelling from '@/components/pages/auth/dashboard/overview/BestSelling.vue';
// import top sellers
import TopSellers from '@/components/pages/auth/dashboard/overview/TopSellers.vue';
// import visits source
import VisitsSource from '@/components/pages/auth/dashboard/overview/VisitsSource.vue';
// import right side component
import RightSide from '@/components/pages/auth/dashboard/overview/RightSide.vue';
export default {
  name: 'Overview',
  components: {
    Statistics,
    BestSelling,
    TopSellers,
    VisitsSource,
    RightSide,
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/_dashboard.scss';
</style>