<template>
  <div>
    <ul class="buttons-list control-btns__hot">
      <li
        class="buttons-list__item"
        :class="link.class"
        v-for="link in links"
        :key="link.class"
      >
        <a :href="link.href">{{ link.title }}</a>
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
        { title: 'Как получить баллы', href: '#', class: 'how-to-get' },
        { title: 'Подарить баллы', href: '#', class: 'gift-points' },
      ],
    };
  },
};
</script>
