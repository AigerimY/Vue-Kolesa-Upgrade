<template>
  <nav>
    <ul class="nav-list page-navigation__list">
      <li
        v-for="link in links"
        :key="link.title"
        class="nav-list__item"
      >
        <a :href="link.href">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation-block',
  data() {
    return {
      links: [
        { title: 'Оргсхема', href: '#' },
        { title: 'Kolesa Team', href: '#' },
        { title: 'Kolesa Shop', href: '#' },
        { title: 'Картина компании', href: '#' },
        { title: 'Новости', href: '#' },
        { title: 'Education', href: '#' },
        { title: 'Guidelines', href: '#' },
        { title: 'Библиотека', href: '#' },
        { title: 'FAQ', href: '#' },
      ],
    };
  },
};
</script>
