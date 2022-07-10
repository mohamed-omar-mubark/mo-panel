<template>
  <section class='best-selling'>
    <v-data-table
      height="480"
      :headers="headers"
      :items="desserts"
      items-per-page="9"
      item-key="name"
      class="elevation-1 best-selling-table"
      item-class="best-selling-item"
    ></v-data-table>
  </section>
</template>

<script>
export default {
  name: 'BestSelling',
  data() {
    return {
      desserts: [
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
        {
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: 1.798,
        },
      ],
      headers: [
        {
          text: 'product',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Price', value: 'price' },
        { text: 'Order', value: 'order' },
        { text: 'Stock', value: 'stock' },
        { text: 'Amount', value: 'amount' },
      ],
    }
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/dashboard-views/overview/_best-selling.scss';
</style>