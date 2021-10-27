<template>
  <form class="switchCategories form" action="" method="POST">
      <fieldset class="form-block form__fieldset">
          <ul>
            <li
              v-for="(item, index) in categories"
              :key="index"
              class="form-block__radios">
              <input
                @change="toggleCat(selectedCategory)"
                :class="item.className"
                type="radio"
                name="item"
                v-model="selectedCategory"
                :value="item.value"
                :id="item.id"
                :checked="item.checked">
              <label class="form-block__radio" :for="item.id">
                  <span>{{ item.title }}</span>
              </label>
            </li>
          </ul>
      </fieldset>
  </form>
</template>

<script>
export default {
  name: 'v-switchCategories',
  data() {
    return {
      categories: [
        {
          id: 'item1-1',
          className: 'v-all',
          checked: true,
          title: 'Все товары',
          value: 'all',
        },
        {
          id: 'item2-1',
          className: 'v-clothes',
          checked: false,
          title: 'Одежда',
          value: 'clothes',
        },
        {
          id: 'item3-1',
          className: 'v-accessories',
          checked: false,
          title: 'Аксессуары',
          value: 'accessories',
        },
      ],
      selectedCategory: 'all',
    };
  },
  methods: {
    toggleCat(selectedCategory) {
      this.$emit('choose', selectedCategory);
    },
  },
};
</script>

<style>

</style>
