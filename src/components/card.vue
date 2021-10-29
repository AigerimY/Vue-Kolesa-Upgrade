<template>
  <li class="products-list__item">
  <div class="item-photo">
    <img class="js-card-img"
      :src="item.mainImage"
      width="330" height="330"
      :alt="item.title"
    >
    <span
      v-if="item.isNew"
      class="badge js-badge"
    >
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
    <div v-if="item.sizes">
      <span
        v-if="item.sizes.length > 0"
        class="item-info__sizes js-item-info__sizes"
      >
          Размеры
      </span>
      <span v-else>Стандартный размер</span>
      <span
        v-for="(element, i) in item.sizes"
        :key="i"
        >
          {{ element }}
      </span>
    </div>
  </div>
    <button
      class="button products-list__button"
      type="button"
      @click="sendModal(item)"
    >
        Заказать
    </button>
  </li>
</template>

<script>
export default {
  name: 'card',
  props: {
    item: Object,
  },
  methods: {
    sendModal(item) {
      this.$emit('click', item);
    },
  },
};
</script>
