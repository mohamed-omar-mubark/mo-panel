<template>
  <section class='best-selling'>
    <div class="table-title">
      <span>{{ $t('top_sellers') }}</span>
    </div>
    <v-data-table
      height="530"
      :headers="headers"
      :items="sellers"
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
  name: 'TopSellers',
  data() {
    return {
      sellers: [
        {
          id: 1,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png',
          name: 'Nike',
          topic: "Shoes",
          stock: 62,
          amount: "1.798 $",
        },
        {
          id: 2,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-2.png',
          name: 'Seddeq',
          topic: "Fast Food",
          stock: 35,
          amount: "2.982 $",
        },
        {
          id: 3,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-3.png',
          name: 'Addidas',
          topic: "Fashion",
          stock: 80,
          amount: "1.120 $",
        },
        {
          id: 4,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-8.png',
          name: 'Nafees',
          topic: "Watches",
          stock: 62,
          amount: "1.798 $",
        },
        {
          id: 5,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-5.png',
          name: 'iTest Factory',
          topic: "Electronics",
          stock: 35,
          amount: "2.982 $",
        },
        {
          id: 6,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png',
          name: 'Nike',
          topic: "Shoes",
          stock: 62,
          amount: "1.798 $",
        },
        {
          id: 7,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-2.png',
          name: 'Seddeq',
          topic: "Fast Food",
          stock: 35,
          amount: "2.982 $",
        },
        {
          id: 8,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-3.png',
          name: 'Addidas',
          topic: "Fashion",
          stock: 80,
          amount: "1.120 $",
        },
        {
          id: 9,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-8.png',
          name: 'Nafees',
          topic: "Watches",
          stock: 62,
          amount: "1.798 $",
        },
        {
          id: 10,
          image: 'https://themesbrand.com/velzon/html/default/assets/images/companies/img-5.png',
          name: 'iTest Factory',
          topic: "Electronics",
          stock: 35,
          amount: "2.982 $",
        },
      ],
      headers: [
        {
          text: "Image",
          sortable: false,
          value: "image"
        },
        {
          text: 'Seller',
          align: 'start',
          value: 'name',
        },
        { text: 'Topic', value: 'topic' },
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