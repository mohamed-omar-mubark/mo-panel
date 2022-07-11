<template>
  <section class='revenue-chart'>
    <div class="table-title">
      <span>{{ $t('revenue') }}</span>
    </div>
    <div class="chart" id="chart">
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RevenueChart',
  data() {
    return {
      series: [{
        name: 'Earnings',
        type: 'column',
        data: [89, 98, 68, 108, 77, 84, 51, 28, 92, 42, 88, 55]
      }, {
        name: 'Orders',
        type: 'area',
        data: [30, 60, 50, 60, 50, 58, 40, 45, 78, 52, 63, 35]
      }, {
        name: 'Refunds',
        type: 'line',
        data: [8, 11, 7, 15, 20, 10, 5, 15, 6, 30, 15, 25]
      }],
      chartOptions: {
        colors: ['#0ab39c', '#405189', '#f06548'],
        stroke: {
          width: [0, 2, 2],
          curve: ['smooth', 'straight', 'straight'],
          colors: ['#0ab39c', '#405189', '#f06548'],
          dashArray: [0, 0, 8]
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.1, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'category'
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " $";
              }
              return y;
        
            }
          }
        }
      },
    }
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/dashboard-views/overview/_revenue-chart.scss';
</style>