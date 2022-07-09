<template>
  <section class='statistics'>
    <div class="row">
      <div class="col-xl-3 col-md-6 col-sm-6 col-12">
        <div class="statistics-box">
          <div class="title">
            <span class="name">{{ $t('total_earnings') }}</span>
            <span class="average">+16.24</span>
          </div>
          <div class="number">
            <span>$559.25k</span>
          </div>
          <div class="actions">
            <router-link class="link" :to="{ name: 'Overview' }">View net earnings</router-link>
            <div class="icon">
              <i class="fas fa-dollar-sign"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 col-sm-6 col-12">
        <div class="statistics-box">
          <div class="title">
            <span class="name">{{ $t('orders') }}</span>
            <span class="average">-3.57</span>
          </div>
          <div class="number">
            <span>36,894</span>
          </div>
          <div class="actions">
            <router-link class="link" :to="{ name: 'Overview' }">View all orders</router-link>
            <div class="icon">
              <i class="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 col-sm-6 col-12">
        <div class="statistics-box">
          <div class="title">
            <span class="name">{{ $t('customers') }}</span>
            <span class="average">+29.08</span>
          </div>
          <div class="number">
            <span>183.35M</span>
          </div>
          <div class="actions">
            <router-link class="link" :to="{ name: 'Overview' }">See details</router-link>
            <div class="icon">
              <i class="far fa-user-circle"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 col-sm-6 col-12">
        <div class="statistics-box">
          <div class="title">
            <span class="name">{{ $t('my_balance') }}</span>
            <span class="average">+0.00</span>
          </div>
          <div class="number">
            <span>$165.89k</span>
          </div>
          <div class="actions">
            <router-link class="link" :to="{ name: 'Overview' }">Withdraw money</router-link>
            <div class="icon">
              <i class="fas fa-wallet"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statistics',
};
</script>

<i18n>
{
  // english
  "en": {
    "total_earnings": "TOTAL EARNINGS",
    "orders": "Orders",
    "customers": "Customers",
    "my_balance": "MY BALANCE",
  },

  // arabic
  "ar": {
    "total_earnings": "إجمالي الأرباح",
    "orders": "طلبات",
    "customers": "العملاء",
    "my_balance": "حسابي",
  }
}
</i18n>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/dashboard-views/overview/_statistics.scss';
</style>