<template>
  <div class="modal js-modal">
    <div class="modal__back" @click="sayCloseModal"></div>
    <div class="modal__content">
      <button
        class="modal__close js-modal__close" type="button"
        @click="sayCloseModal"
      >
        Закрыть
      </button>
      <div class="modal__layout">
        <div class="modal__gallery">
          <img
            class="js-modal-img"
            width="330"
            height="330"
            alt="Толстовка Kolesa Team"
            :src="selectedCard.mainImage"
          >
            <div
              v-if="selectedCard.images.length > 0"
              class="gallery"
            >
              <ul>
                <li
                  v-for="(image, index) in selectedCard.images"
                  :key="index"
                  class="gallery__item"
                >
                    <img
                      :src="image"
                      width="50"
                      height="50"
                      :alt="selectedCard.title + ' ' + `${index+1}`"
                    >
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
                  <button
                    v-if="$store.state.userData.score > this.selectedCard.price"
                    @click="solvePoints"
                    class="product-info__button button">
                      Заказать
                  </button>
                  <button
                    v-else
                    @click="askScore"
                    class="product-info__button yellow button">
                      Попросить {{ (this.selectedCard.price - $store.state.userData.score) }} баллов
                  </button>

              </div>
              <div class="product-info__balance">
                  <div>
                      <span>Твой баланс:</span>
                      <p>{{ $store.state.userData.score}} баллов</p>
                  </div>
                  <img
                      src="@/img/shoppingBags.png"
                      width="40"
                      height="40"
                      alt="Шопинг эмоджи">
              </div>
          </div>
          <form class="modal__form form" action="" method="POST">
              <fieldset
                class="js-colors form-block form__fieldset"
                v-if="selectedCard.colors"
              >
                <span>Цвета:</span>
                <ul>
                  <li
                    v-for="(color, index) in selectedCard.colors"
                    :key="index"
                    class="form-block__color"
                  >
                    <input type="radio" name="color" :id="`color${index}`">
                    <label class="form-block__radio" :for="`color${index}`">
                      <div
                        class="color color-preview"
                        :style="{ background: color.color }"
                      >
                      </div>
                      <span>{{ color.label }}</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
              <fieldset
                v-if="selectedCard.sizes"
                class="form-block form__fieldset"
              >
                <span v-if="selectedCard.sizes.lenght > 0">Размер:</span>
                <ul>
                    <li
                      v-for="(element, i) in selectedCard.sizes"
                      :key="i"
                    >
                        <input type="radio" name="size" :id="`size${i}`">
                        <label class="form-block__radio" :for="`size${i}`">
                            <span>{{ element }}</span>
                        </label>
                    </li>
                </ul>
              </fieldset>
          </form>
          <div
            v-if="selectedCard.description"
            class="product-info__description js-product-info__description"
          >
              <h4>Детали:</h4>
              <p class="js-description">{{ selectedCard.description }}</p>
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
  name: 'modal',
  props: {
    selectedCard: Object,
    user: Object,
  },
  data() {
    return {
      close: true,
    };
  },
  methods: {
    sayCloseModal() {
      this.close = true;
      this.$emit('click', this.close);
    },
    solvePoints() {
      if (this.$store.state.userData.score >= this.selectedCard.price) {
        this.$store.commit('withdrawCost', this.selectedCard.price);
        alert('Заявка отправлена');
      }
      return this.$store.state.userData.score;
    },
    askScore() {
      alert('Заявка отправлена');
      this.sayCloseModal();
    },
  },
};
</script>

<style>
  .color {
    width: 23px;
    height: 24px;
  }
  .yellow {
    background-color: #FFDD61;
    color: #1C1819;
  }
</style>
