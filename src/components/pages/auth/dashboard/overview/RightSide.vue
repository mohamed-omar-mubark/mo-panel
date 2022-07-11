<template>
  <section class='right-side'>
    <!-- top categories -->
    <div class='top-categories mb-5'>
      <span class="section-title">{{ $t('top_categories') }}</span>
      <ul>
        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('mobile') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('desktop') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('electronics') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('home_furniture') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('mobile') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('desktop') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('electronics') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('home_furniture') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('mobile') }}</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Overview' }">{{ $t('desktop') }}</router-link>
        </li>
      </ul>
    </div>

    <!-- customer -box<div class="review-box">
      <span>text</span>
      <v-progress-linear
        v-model="valueDeterminate"
        color="deep-purple accent-4"
      ></v-progress-linear></div> -->
    <div class="customer-review mb-5">
      <span class="section-title">{{ $t('customer_reviews') }}</span>

      <div class="rate-card">
        <v-rating
          readonly
          v-model="rating"
          background-color="warning lighten-1"
          color="warning accent-5"
          dense
          half-increments
          hover
          size="16"
        ></v-rating>
        <span class="value">4 {{ $t('out_of') }} 5</span>
      </div>
    </div>

    <!-- total reviews -->
    <div class="total-reviews mb-5">
      <span class="section-subtitle text-center">{{ $t('total_reviews') }}</span>
      <!-- review line box -->
      <div class="review-box">
        <span class="stars">5 <i class="fas fa-star"></i></span>
        <v-progress-linear
          v-model="five_star"
          color="success"
        ></v-progress-linear>
        <span class="value">2536</span>
      </div>
      <!-- review line box -->
      <div class="review-box">
        <span class="stars">4 <i class="fas fa-star"></i></span>
        <v-progress-linear
          v-model="four_star"
          color="indigo darken-2"
        ></v-progress-linear>
        <span class="value">3213</span>
      </div>
      <!-- review line box -->
      <div class="review-box">
        <span class="stars">3 <i class="fas fa-star"></i></span>
        <v-progress-linear
          v-model="three_star"
          color="indigo darken-2"
        ></v-progress-linear>
        <span class="value">1356</span>
      </div>
      <!-- review line box -->
      <div class="review-box">
        <span class="stars">2 <i class="fas fa-star"></i></span>
        <v-progress-linear
          v-model="two_star"
          color="amber"
        ></v-progress-linear>
        <span class="value">240</span>
      </div>
      <!-- review line box -->
      <div class="review-box">
        <span class="stars">1 <i class="fas fa-star"></i></span>
        <v-progress-linear
          v-model="one_star"
          color="pink"
        ></v-progress-linear>
        <span class="value">113</span>
      </div>
    </div>

    <!-- invite new seller -->
    <div class="invite-seller">
      <img src="https://themesbrand.com/velzon/html/default/assets/images/giftbox.png" alt="Gift" class="mb-5">
      <span class="section-title">{{ $t('invite_new_seller') }}</span>
      <p class="paragraph mb-4">{{ $t('refer_seller') }}</p>
      <button class="invite-btn">{{ $t('invite_now') }}</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RightSide',
  data() {
    return {
      rating: 4,
      five_star: 60,
      four_star: 50,
      three_star: 40,
      two_star: 30,
      one_star: 20,
    }
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/dashboard-views/overview/_right-side.scss';
</style>