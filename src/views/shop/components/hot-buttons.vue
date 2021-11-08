<template>
  <div>
    <ul class="buttons-list control-btns__hot">
      <li
        class="buttons-list__item"
        :class="link.class"
        v-for="link in links"
        :key="link.class"
      >
        <router-link :to="link.href">{{ link.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hot-buttons',
  data() {
    return {
      links: [
        { title: 'Получить баллы', href: '#', class: 'get-points' },
        { title: 'Как получить баллы', href: '/shop/how-to-get-score', class: 'how-to-get' },
        { title: 'Подарить баллы', href: '#', class: 'gift-points' },
      ],
    };
  },
};
</script>
