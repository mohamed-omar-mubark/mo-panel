<template>
  <section class='visits-source'>
    <div class="table-title">
      <span>{{ $t('sales_by_location') }}</span>
    </div>
    <div id="chart" class="p-3">
      <apexchart type="bar" :width="width" height="328" :options="chartOptions" :series="series"></apexchart>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LocationsSales',
  data() {
    return {
      width: '500',
      series: [{
        name: 'Sales',
        data: [2.3, 3.1, 4.0, 5.1, 4.0, 3.6]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "k";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#405189"]
          }
        },
        
        xaxis: {
          categories: ["Egypt", "Morocco", "Algeria", "Tunisia", "Oman", "Qatar"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "k";
            }
          }
        
        },
        title: {
          text: 'Sales by Location',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
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