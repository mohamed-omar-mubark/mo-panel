<template>
  <main class='dashboard-overview'>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Statistics />

          <div class="row">
            <div class="col-xl-8">
              <RevenueChart />
            </div>

            <div class="col-xl-4">
              <LocationsSales />
            </div>
          </div>

          <div class="row">
            <div class="col-xl-8">
              <RecentOrders />
            </div>

            <div class="col-xl-4">
              <VisitsSource />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <BestSelling />
            </div>

            <div class="col">
              <TopSellers />
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
// import revenue chart component
import RevenueChart from '@/components/pages/auth/dashboard/overview/RevenueChart.vue';
// import locations sales component
import LocationsSales from '@/components/pages/auth/dashboard/overview/LocationsSales.vue';
// import recent orders component
import RecentOrders from '@/components/pages/auth/dashboard/overview/RecentOrders.vue';
// import visits source component
import VisitsSource from '@/components/pages/auth/dashboard/overview/VisitsSource.vue';
// import best selling
import BestSelling from '@/components/pages/auth/dashboard/overview/BestSelling.vue';
// import top sellers
import TopSellers from '@/components/pages/auth/dashboard/overview/TopSellers.vue';
// import right side component
import RightSide from '@/components/pages/auth/dashboard/overview/RightSide.vue';

export default {
  name: 'Overview',
  components: {
    Statistics,
    RevenueChart,
    LocationsSales,
    RecentOrders,
    VisitsSource,
    BestSelling,
    TopSellers,
    RightSide,
    RevenueChart,
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/_dashboard.scss';
</style>