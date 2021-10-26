<template>
    <div>
        <div class="modal js-modal">
            <div class="modal__content">
                <button class="modal__close js-modal__close" type="button">Закрыть</button>
                <div class="modal__layout">
                    <div class="modal__gallery">
                        <img class="js-modal-img"
                            width="330"
                            height="330"
                            alt="Толстовка Kolesa Team"
                            src="./img/product.jpg">
                        <div class="gallery">
                            <ul>
                                <li class="gallery__item">
                                    <img src="./img/previewImage1.jpg"
                                        width="50"
                                        height="50"
                                        alt="Бежевая толстовка">
                                </li>
                                <li class="gallery__item gallery__item--preview">
                                <img
                                    src="./img/previewImage2.jpg"
                                    width="50"
                                    height="50"
                                    alt="Бежевая толстовка">
                                </li>
                                <li class="gallery__item">
                                    <img
                                        src="./img/previewImage3.jpg"
                                        width="50"
                                        height="50"
                                        alt="Бежевая толстовка">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-info">
                        <h2 class="product-info__name js-title">
                            Футболка "Эволюционируй или сдохни"</h2>
                        <div class="product-info__block">
                            <div>
                                <p class="product-info__cost js-product-info__cost">100 баллов</p>
                                <a class="product-info__button button" href="#">Заказать</a>
                            </div>
                            <div class="product-info__balance">
                                <div>
                                    <span>Твой баланс:</span>
                                    <p>3 945 баллов</p>
                                </div>
                                <img
                                    src="./img/shoppingBags.png"
                                    width="40"
                                    height="40"
                                    alt="Шопинг эмоджи">
                            </div>
                        </div>
                        <form class="modal__form form" action="" method="POST">
                            <fieldset class="js-colors form-block form__fieldset">
                                <span>Цвета:</span>
                                <ul>
                                    <li class="form-block__color">
                                        <input type="radio" name="color" id="color1">
                                        <label class="form-block__radio" for="color1">
                                            <img class="color-preview"
                                                src="./img/color1.jpg"
                                                width="23"
                                                height="24">
                                            <span>Синий</span>
                                        </label>
                                    </li>
                                    <li class="form-block__color">
                                        <input type="radio" name="color" id="color2">
                                        <label class="form-block__radio" for="color2">
                                            <img class="color-preview"
                                                src="./img/color2.jpg"
                                                width="23"
                                                height="24">
                                            <span>Бежевый</span>
                                        </label>
                                    </li>
                                    <li class="form-block__color">
                                        <input type="radio" name="color" id="color3">
                                        <label class="form-block__radio" for="color3">
                                            <img class="color-preview"
                                                src="./img/color3.jpg"
                                                width="23"
                                                height="24">
                                            <span>Серый</span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                            <fieldset class="form-block form__fieldset">
                                <span>Размер:</span>
                                <ul>
                                    <li>
                                        <input type="radio" name="size" id="size1">
                                        <label class="form-block__radio" for="size1">
                                            <span>S</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="size" id="size2">
                                        <label class="form-block__radio" for="size2">
                                            <span>M</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="size" id="size3">
                                        <label class="form-block__radio" for="size3">
                                            <span>L</span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                        </form>
                        <div class="product-info__description js-product-info__description">
                            <h4>Детали:</h4>
                            <p class="js-description">Брендированная толстовка от Qazaq Republic.
                            Материал: Хлопок 80%, Вискоза 20%</p>
                        </div>
                        <div class="product-info__description js-product-info__description">
                            <h4>Как выбрать размер:</h4>
                            <p>Написать дяде Рику для уточнения.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h1 class="visually-hidden">Магазин Kolesa Team</h1>
            <div class="page-navigation">
                <div class="page-navigation__logo">
                    <img
                        src="./img/logo.svg"
                        width="215" height="35"
                        alt="Логотип Kolesa Group">
                </div>
                <nav>
                    <ul class="nav-list page-navigation__list">
                        <li class="nav-list__item">
                            <a href="#">Оргсхема</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="#">Kolesa Team</a>
                        </li>
                        <li class="nav-list__item nav-list__item--current">
                            <a href="#">Kolesa Shop</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="#">Картина компании</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="#">Новости</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="#">Education</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="#">Guidelines</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="#">Библиотека</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="content">
                <section class="content__header">
                    <h2 class="visually-hidden">Данные пользователя</h2>
                    <form class="search-form" action="" method="POST">
                        <button type="button">Найти</button>
                        <label>
                            <input type="text" placeholder="Поиск">
                        </label>
                    </form>
                    <a class="user">
                        <img
                            src="./img/avatar.jpg"
                            width="44" height="44"
                            alt="Фото пользователя">
                        <div>
                            <span class="user__name">Мортиджан</span><br>
                            <span class="user__points">300 баллов</span>
                        </div>
                    </a>
                </section>
                <section class="promo">
                    <h2 class="visually-hidden">Промо акция</h2>
                    <div class="promo__baner">
                        <p>Здесь может быть ваша реклама :-)</p>
                    </div>
                </section>
                <section class="control-btns">
                    <h2 class="visually-hidden">Управляй своими покупками</h2>
                    <div>
                        <ul class="buttons-list control-btns__hot">
                            <li class="buttons-list__item get-points">
                                <a href="#">Получить баллы</a>
                            </li>
                            <li class="buttons-list__item how-to-get">
                                <a href="#">Как получить баллы</a>
                            </li>
                            <li class="buttons-list__item gift-points">
                                <a href="#">Подарить баллы</a>
                            </li>
                        </ul>
                    </div>
                    <form class="form" action="" method="POST">
                        <fieldset class="form-block form__fieldset">
                            <ul>
                                <li class="form-block__radios">
                                    <input class="js-all"
                                        type="radio"
                                        name="item"
                                        id="item1-1"
                                        checked>
                                    <label class="form-block__radio" for="item1-1">
                                        <span>Все товары</span>
                                    </label>
                                </li>
                                <li class="form-block__radios">
                                    <input class="js-clothes" type="radio" name="item" id="item2-1">
                                    <label class="form-block__radio" for="item2-1">
                                        <span>Одежда</span>
                                    </label>
                                </li>
                                <li class="form-block__radios">
                                    <input class="js-accessories"
                                        type="radio"
                                        name="item"
                                        id="item3-1">
                                    <label class="form-block__radio" for="item3-1">
                                        <span>Аксессуары</span>
                                    </label>
                                </li>
                            </ul>
                        </fieldset>
                    </form>
                </section>
                <section class="catalog">
                    <h2 class="visually-hidden">Каталог товаров</h2>
                    <div>
                        <ul class="products-list catalog__list js-products-list">
                            <li class="products-list__item"
                            v-for="item in clothes" :key="item.id">
                                <div class="item-photo">
                                    <img class="js-card-img"
                                        v-bind:src="item.img"
                                        width="330" height="330"
                                        alt="Фото футболки 'Эволюционируй или сдохни'">
                                    <span v-if="item.isNew" class="badge js-badge">new</span>
                                </div>
                                <div class="item-info">
                                    <span class="item-info__points js-item-info__points">
                                        {{ item.price }} баллов</span>
                                    <p class="item-info__title js-item-info__title">
                                        {{ item.title }}</p>
                                    <span class="item-info__sizes js-item-info__sizes">
                                        Размеры {{ item.sizes }} </span>
                                </div>
                                <button class="button products-list__button" type="button">
                                    Заказать
                                </button>
                            </li>
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
  data() {
    return {
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
    };
  },
};
</script>

<style lang="scss">
    @import './scss/style.scss';
</style>
