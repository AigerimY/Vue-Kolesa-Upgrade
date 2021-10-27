<template>
    <div>
      <modal
        v-if="open && close"
        @clickClose="closeModal"
        :selectedCard="selectedCard" />
        <div class="container">
            <h1 class="visually-hidden">Магазин Kolesa Team</h1>
            <div class="page-navigation">
                <div class="page-navigation__logo">
                    <img
                        src="./img/logo.svg"
                        width="215" height="35"
                        alt="Логотип Kolesa Group">
                </div>
              <navigation />
            </div>
            <div class="content">
                <section class="content__header">
                    <h2 class="visually-hidden">Данные пользователя</h2>
                    <search />
                    <user />
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
                    <switch-categories
                      @choose="choosedCategory"
                     />
                </section>
                <section class="catalog">
                    <h2 class="visually-hidden">Каталог товаров</h2>
                    <div>
                        <ul class="products-list catalog__list js-products-list">
                          <card v-for="(item, index) in filtered"
                            :key="index"
                            :item="item"
                            @clickOn="openModal" />
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <footer class="page-footer">
            <div class="footer-container">
                <div class="social">
                    <span class="copyright">© Kolesa Group</span>
                    <ul class="social-list">
                        <li class="social-list__item">
                            <a href="#">
                                <img
                                    src="./img/icon-insta.svg"
                                    width="18"
                                    height="18">
                            </a>
                        </li>
                        <li class="social-list__item">
                            <a href="#">
                                <img
                                    src="./img/icon-youtube.svg"
                                    width="18"
                                    height="13">
                            </a>
                        </li>
                        <li class="social-list__item">
                            <a href="#">
                                <img
                                    src="./img/icon-vk.svg"
                                    width="18"
                                    height="11">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="feedback">
                    <p class="feedback__text">
                    Есть идеи что улучшить?<br>Не знаешь, с кем решить проблему?
                    </p>
                    <a class="feedback__button button" href="#">Написать</a>
                </div>
            </div>
        </footer>
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

const img1 = require('./img/product-tshirt.jpg');
const img2 = require('./img/product.jpg');
const img3 = require('./img/beige-sweatshirt-min.jpg');
const img4 = require('./img/beige-sweatshirt.jpg');
const img5 = require('./img/black-sweatshirt.jpg');
const img6 = require('./img/gray-sweatshirt.jpg');
const img7 = require('./img/gray-sweatshirt-min.jpg');

const img8 = require('./img/bottle.jpg');
const img9 = require('./img/bottle-min.jpg');
const img10 = require('./img/socks.jpg');
const img11 = require('./img/socks-min.jpg');
const img12 = require('./img/gray-backpack.jpg');
const img13 = require('./img/gray-backpack-min.jpg');
const img14 = require('./img/blue-backpack.jpg');
const img15 = require('./img/blue-backpack-min.jpg');

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
  },
  data() {
    return {
      selected: 'all',
      close: false,
      clothes: [
        {
          id: 1,
          title: 'Футболка "Эволюционируй или сдохни"',
          price: 220,
          isNew: false,
          img: img1,
          sizes: 'S/M/L',
          details: 'Брендированная ыутболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 2,
          title: 'Детский свитшот QR, чёрный',
          price: 320,
          isNew: true,
          img: img2,
          sizes: 'S/M/L',
          details: 'Стильный свитшот для ребёнка сотрудника компании',
        },
        {
          id: 3,
          title: 'Свитшот оверсайз бежевый',
          price: 520,
          isNew: false,
          img: img4,
          sizes: 'S/M/L',
          details: 'Брендированный свитшот от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 4,
          title: 'Свитшот оверсайз бежевый, без логотипа',
          price: 450,
          isNew: false,
          img: img3,
          sizes: 'S/M/L',
          details: 'Минималистичный свитшот. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 5,
          title: 'Свитшот оверсайз чёрный',
          price: 720,
          isNew: true,
          img: img5,
          sizes: 'S/M/L',
          details: 'Брендированный свитшот от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 6,
          title: 'Свитшот оверсайз серый',
          price: 520,
          isNew: false,
          img: img6,
          sizes: 'S/M/L',
          details: 'Брендированный свитшот от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 7,
          title: 'Свитшот оверсайз серый, без логотипа',
          price: 450,
          isNew: false,
          img: img7,
          sizes: 'S/M/L',
          details: 'Минималистичный свитшот. Материал: Хлопок 80%, Вискоза 20%',
        },
      ],
      accessories: [
        {
          id: 8,
          title: 'Бутылка для воды',
          price: 100,
          isNew: true,
          img: img8,
          sizes: '1л/1.5л',
        },
        {
          id: 9,
          title: 'Бутылка для воды обычная',
          price: 80,
          isNew: false,
          img: img9,
          sizes: '1л/1.5л',
        },
        {
          id: 10,
          title: 'Носки с сердечками',
          price: 120,
          isNew: true,
          img: img10,
          sizes: '35-42',
          details: 'Мимимишные носки с сердечками и логотипом Kolesa Teams',
        },
        {
          id: 11,
          title: 'Носки обычные',
          price: 50,
          isNew: false,
          img: img11,
          sizes: '35-42',
        },
        {
          id: 12,
          title: 'Рюкзак серый',
          price: 550,
          isNew: false,
          img: img12,
          sizes: '30см на 41см',
        },
        {
          id: 13,
          title: 'Рюкзак серый минималистичный',
          price: 550,
          isNew: false,
          img: img13,
          sizes: '30см на 41см',
        },
        {
          id: 14,
          title: 'Рюкзак синий',
          price: 500,
          isNew: false,
          img: img14,
          sizes: '30см на 41см',
        },
        {
          id: 15,
          title: 'Рюкзак синий минималистичный',
          price: 560,
          isNew: false,
          img: img15,
          sizes: '30см на 41см',
        },
      ],
      selectedCard: '',
    };
  },
  methods: {
    choosedCategory(selectedCategory) {
      this.selected = selectedCategory;
      this.clothes.sort((a, b) => b.isNew - a.isNew);
      this.accessories.sort((a, b) => b.isNew - a.isNew);
      return this.selected;
    },
    openModal(selectedProduct) {
      this.selectedCard = selectedProduct;
      this.close = true;
      return this.selectedCard;
    },
    closeModal(close) {
      this.close = false;
      return close;
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
      if (this.selectedCard) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
    @import './scss/style.scss';
</style>
