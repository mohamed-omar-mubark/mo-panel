<template>
  <section class='best-selling'>
    <div class="table-title">
      <span>{{ $t('recent_orders') }}</span>
    </div>
    <v-data-table
      height="300"
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      item-key="id"
      class="elevation-1"
      item-class="best-selling-item"
    >
      <!-- order id -->
      <template v-slot:item.order_id="{ item }">
        <router-link :to="{ name: 'Overview' }">
          <span class="order-id">{{ item.order_id }}</span>
        </router-link>
      </template>

      <!-- customer image -->
      <template v-slot:item.customer_image="{ item }">
        <img :src="item.customer_image" style="width: 40px; height: 40px" class="rounded-circle" />
      </template>

      <!-- order status -->
      <template v-slot:item.status="{ item }">
        <span :class="'order-status ' + item.status">{{ item.status }}</span>
      </template>
    </v-data-table>
  </section>
</template>

<script>
export default {
  name: 'RecentOrders',
  data() {
    return {
      orders: [
        {
          id: 1,
          order_id: '#VZ-1255',
          customer_image: 'https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg',
          product: 'Branded T-Shirts',
          amount: "119 $",
          vendor: "Nike",
          status: "paid",
        },
        {
          id: 2,
          order_id: '#VZ-1254',
          customer_image: 'https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg',
          product: 'Smart watch',
          amount: "19.500 $",
          vendor: "Nafees",
          status: "pending",
        },
        {
          id: 3,
          order_id: '#VZ-1253',
          customer_image: 'https://themesbrand.com/velzon/html/default/assets/images/users/avatar-3.jpg',
          product: 'Shoes',
          amount: "45 $",
          vendor: "Addidas",
          status: "unpaid",
        },
        {
          id: 4,
          order_id: '#VZ-1252',
          customer_image: 'https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg',
          product: 'Branded T-Shirts',
          amount: "119 $",
          vendor: "Nike",
          status: "paid",
        },
        {
          id: 5,
          order_id: '#VZ-1251',
          customer_image: 'https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg',
          product: 'Smart watch',
          amount: "19.500 $",
          vendor: "Nafees",
          status: "pending",
        },
      ],
      headers: [
        {
          text: 'Order ID',
          sortable: true,
          value: 'order_id',
        },
        {
          text: "Customer",
          sortable: false,
          value: "customer_image"
        },
        {
          text: 'Product',
          align: 'start',
          value: 'product',
        },
        { text: 'Amount', value: 'amount' },
        { text: 'Vendor', value: 'vendor' },
        { text: 'Status', value: 'status' },
      ],
    }
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/dashboard-views/overview/_best-selling.scss';
</style>