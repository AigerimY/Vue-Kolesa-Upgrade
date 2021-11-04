<template>
  <div class="main-container">
    <div class="container">
      <h1 class="visually-hidden">Магазин Kolesa Team</h1>
      <div class="page-navigation">
        <div class="page-navigation__logo">
          <img
            src="./img/logo.svg"
            width="215" height="35"
            alt="Логотип Kolesa Group"
          >
        </div>
        <navigation />
      </div>
      <div class="content">
        <section class="content__header">
          <h2 class="visually-hidden">Данные пользователя</h2>
          <search />
          <user/>
        </section>
        <router-view></router-view>
      </div>
    </div>
    <pageFooter />
  </div>
</template>

<script>

import search from './layouts/components/search.vue';
import user from './layouts/components/user.vue';
import navigation from './layouts/components/navigation.vue';
import pageFooter from './layouts/components/footer.vue';

export default {
  name: 'App',
  components: {
    search,
    user,
    navigation,
    pageFooter,
  },
};
</script>

<style lang="scss">
    @import './scss/style.scss';
    .main-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
</style>
