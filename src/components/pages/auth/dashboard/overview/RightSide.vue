<template>
  <section class='right-side'>
    <!-- top categories -->
    <div class='top-categories'>
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
  </section>
</template>

<script>
export default {
  name: 'RightSide',
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/auth/dashboard/dashboard-views/overview/_right-side.scss';
</style>