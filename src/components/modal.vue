<template>
  <div class="modal js-modal">
      <div class="modal__content">
          <button class="modal__close js-modal__close" type="button"
          @click="sayCloseModal()">
            Закрыть
          </button>
          <div class="modal__layout">
              <div class="modal__gallery">
                  <img class="js-modal-img"
                      width="330"
                      height="330"
                      alt="Толстовка Kolesa Team"
                      src="../img/product.jpg">
                  <div class="gallery">
                      <ul>
                          <li class="gallery__item">
                              <img src="../img/previewImage1.jpg"
                                  width="50"
                                  height="50"
                                  alt="Бежевая толстовка">
                          </li>
                          <li class="gallery__item gallery__item--preview">
                          <img
                              src="../img/previewImage2.jpg"
                              width="50"
                              height="50"
                              alt="Бежевая толстовка">
                          </li>
                          <li class="gallery__item">
                              <img
                                  src="../img/previewImage3.jpg"
                                  width="50"
                                  height="50"
                                  alt="Бежевая толстовка">
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="product-info">
                  <h2 class="product-info__name js-title">
                      {{ selectedCard.title }}</h2>
                  <div class="product-info__block">
                      <div>
                          <p class="product-info__cost js-product-info__cost">
                            {{ selectedCard.price }} баллов
                          </p>
                          <a class="product-info__button button" href="#">Заказать</a>
                      </div>
                      <div class="product-info__balance">
                          <div>
                              <span>Твой баланс:</span>
                              <p>3 945 баллов</p>
                          </div>
                          <img
                              src="../img/shoppingBags.png"
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
                                          src="../img/color1.jpg"
                                          width="23"
                                          height="24">
                                      <span>Синий</span>
                                  </label>
                              </li>
                              <li class="form-block__color">
                                  <input type="radio" name="color" id="color2">
                                  <label class="form-block__radio" for="color2">
                                      <img class="color-preview"
                                          src="../img/color2.jpg"
                                          width="23"
                                          height="24">
                                      <span>Бежевый</span>
                                  </label>
                              </li>
                              <li class="form-block__color">
                                  <input type="radio" name="color" id="color3">
                                  <label class="form-block__radio" for="color3">
                                      <img class="color-preview"
                                          src="../img/color3.jpg"
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
</template>

<script>
export default {
  name: 'v-modal',
  props: ['selectedCard'],
  data() {
    return {
      close: true,
    };
  },
  methods: {
    sayCloseModal() {
      this.close = true;
      this.$emit('clickClose', this.close);
    },
  },
};
</script>
