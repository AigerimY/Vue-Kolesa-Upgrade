<template>
  <div>
  <modal
    v-if="open"
    @click="closeModal"
    :selected-card="selectedCard"
    :user="userData"
  />
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
</template>

<script>

import switchCategories from './components/switchCategories.vue';
import card from './components/card.vue';
import modal from './components/modal.vue';
import hotButtons from './components/hot-buttons.vue';
import axios from '@/axios';

export default {
  name: 'Shop',
  props: {
    userData: Object,
  },
  components: {
    switchCategories,
    card,
    modal,
    hotButtons,
  },
  data() {
    return {
      selected: 'all',
      isOpen: false,
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
