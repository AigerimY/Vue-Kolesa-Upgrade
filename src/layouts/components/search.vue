<template>
  <form class="search-form" action="" method="POST">
    <button type="button">Найти</button>
    <label>
      <input
        v-model="searchingItem"
        type="text"
        placeholder="Поиск"
        @change="startSearching(searchingItem)"
        >
    </label>
  </form>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      searchingItem: '',
    };
  },
  methods: {
    startSearching() {
      return this.searchingItem;
    },
  },
};
</script>
