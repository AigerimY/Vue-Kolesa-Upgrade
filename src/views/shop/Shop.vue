<template>
  <div>
  <modal
    v-if="open"
    @click="closeModal"
    :selected-card="selectedCard"
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

export default {
  name: 'Shop',
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
  mounted() {
    this.$store.dispatch('getClothes').then((response) => {
      this.clothes = response.data;
    });
    this.$store.dispatch('getAccessories').then((response) => {
      this.accessories = response.data;
    });
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
};
</script>
