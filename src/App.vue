<template>
  <div>
    <modal
      v-if="open"
      @click="closeModal"
      :selected-card="selectedCard"
      :user="userData"
    />
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
          <user @load="readUser" />
        </section>
        <section class="promo">
          <h2 class="visually-hidden">Промо акция</h2>
          <div class="promo__baner">
            <p>Здесь может быть ваша реклама :-)</p>
          </div>
        </section>
        <section class="control-btns">
          <h2 class="visually-hidden">Управляй своими покупками</h2>
          <hotButtons />
          <switch-categories @choose="choosenCategory" />
        </section>
        <section class="catalog">
          <h2 class="visually-hidden">Каталог товаров</h2>
          <div>
            <ul class="products-list catalog__list js-products-list">
              <card
                v-for="item in filtered"
                :key="item.id"
                :item="item"
                @click="openModal"
              />
            </ul>
          </div>
        </section>
      </div>
    </div>
    <pageFooter />
  </div>
</template>

<script>

import switchCategories from './components/switchCategories.vue';
import card from './components/card.vue';
import modal from './components/modal.vue';
import search from './components/search.vue';
import user from './components/user.vue';
import navigation from './components/navigation.vue';
import hotButtons from './components/hot-buttons.vue';
import pageFooter from './components/footer.vue';
import axios from './axios';

export default {
  name: 'App',
  components: {
    switchCategories,
    card,
    modal,
    search,
    user,
    navigation,
    hotButtons,
    pageFooter,
  },
  data() {
    return {
      selected: 'all',
      isOpen: false,
      userData: {},
      clothes: [],
      accessories: [],
      selectedCard: '',
    };
  },
  methods: {
    choosenCategory(selectedCategory) {
      this.selected = selectedCategory;
      this.clothes.sort((a, b) => b.isNew - a.isNew);
      this.accessories.sort((a, b) => b.isNew - a.isNew);
      return this.selected;
    },
    openModal(selectedProduct) {
      this.selectedCard = selectedProduct;
      this.isOpen = true;
      return this.selectedCard;
    },
    closeModal() {
      this.isOpen = false;
    },
    readUser(userData) {
      this.userData = userData;
      console.log(userData);
    },
  },
  computed: {
    filtered() {
      if (this.selected === 'clothes') {
        return this.clothes;
      }
      if (this.selected === 'accessories') {
        return this.accessories;
      }
      return this.clothes.concat(this.accessories).sort((a, b) => b.isNew - a.isNew);
    },
    open() {
      if (this.isOpen) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.clothes = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        this.accessories = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style lang="scss">
    @import './scss/style.scss';
</style>
