<template>
  <section class='visits-source'>
    <div class="table-title">
      <span>{{ $t('visits_source') }}</span>
    </div>
    <div id="chart" class="p-3">
      <apexchart type="donut" :width="width" height="347" :options="chartOptions" :series="series"></apexchart>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VisitsSource',
  data() {
    return {
      width: '500',
      series: [25.6, 32.0, 23.8, 9.9, 8.7],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        labels: ['Direct', 'Social', 'Email', 'Other', 'Referral'],
        legend: {
          position: 'bottom',
        },
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.width = '100%'
    }, 1) 
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/dashboard-views/overview/_visits-source.scss';
</style>