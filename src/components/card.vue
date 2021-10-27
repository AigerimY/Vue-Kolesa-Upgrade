<template>
  <li class="products-list__item">
    <div class="item-photo">
        <img class="js-card-img"
            v-bind:src="item.img"
            width="330" height="330"
            alt="Фото футболки 'Эволюционируй или сдохни'">
        <span v-if="item.isNew" class="badge js-badge">
          new
        </span>
    </div>
    <div class="item-info">
        <span class="item-info__points js-item-info__points">
            {{ item.price }} баллов
        </span>
        <p class="item-info__title js-item-info__title">
            {{ item.title }}
        </p>
        <span class="item-info__sizes js-item-info__sizes">
            Размеры {{ item.sizes }}
        </span>
    </div>
    <button
      class="button products-list__button"
      type="button"
      @click="sendModal(item)">
        Заказать
    </button>
</li>
</template>

<script>
export default {
  name: 'v-card',
  props: ['item'],
  methods: {
    sendModal(item) {
      this.$emit('clickOn', item);
    },
  },
};
</script>
