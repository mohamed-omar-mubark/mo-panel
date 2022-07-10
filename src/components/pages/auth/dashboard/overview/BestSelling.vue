<template>
  <section class='best-selling'>
    <div class="table-title">
      <span>{{ $t('best_selling') }}</span>
    </div>
    <v-data-table
      height="530"
      :headers="headers"
      :items="products"
      item-key="id"
      class="elevation-1"
      item-class="best-selling-item"
    >
      <template v-slot:item.image="{ item }">
        <router-link :to="{ name: 'Overview' }">
          <img :src="item.image" style="width: 40px; height: 40px" />
        </router-link>
      </template>
    </v-data-table>
  </section>
</template>

<script>
export default {
  name: 'BestSelling',
  data() {
    return {
      products: [
        {
          id: 1,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png',
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: "1.798 $",
        },
        {
          id: 2,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png',
          name: 'Bentwood Chair',
          price: 85.20,
          order: 35,
          stock: 3,
          amount: "2.982 $",
        },
        {
          id: 3,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png',
          name: 'Borosil Paper Cup',
          price: 14,
          order: 80,
          stock: 749,
          amount: "1.120 $",
        },
        {
          id: 4,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png',
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: "1.798 $",
        },
        {
          id: 5,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png',
          name: 'Bentwood Chair',
          price: 85.20,
          order: 35,
          stock: 3,
          amount: "2.982 $",
        },
        {
          id: 6,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png',
          name: 'Borosil Paper Cup',
          price: 14,
          order: 80,
          stock: 749,
          amount: "1.120 $",
        },
        {
          id: 7,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png',
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: "1.798 $",
        },
        {
          id: 8,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png',
          name: 'Bentwood Chair',
          price: 85.20,
          order: 35,
          stock: 3,
          amount: "2.982 $",
        },
        {
          id: 9,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png',
          name: 'Borosil Paper Cup',
          price: 14,
          order: 80,
          stock: 749,
          amount: "1.120 $",
        },
        {
          id: 10,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png',
          name: 'Borosil Paper Cup',
          price: 14,
          order: 80,
          stock: 749,
          amount: "1.120 $",
        },
        {
          id: 11,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png',
          name: 'Branded T-Shirts',
          price: 29,
          order: 62,
          stock: 24,
          amount: "1.798 $",
        },
        {
          id: 12,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png',
          name: 'Bentwood Chair',
          price: 85.20,
          order: 35,
          stock: 3,
          amount: "2.982 $",
        },
        {
          id: 13,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png',
          name: 'Borosil Paper Cup',
          price: 14,
          order: 80,
          stock: 749,
          amount: "1.120 $",
        },
      ],
      headers: [
        {
          text: "Image",
          sortable: false,
          value: "image"
        },
        {
          text: 'Product',
          align: 'start',
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