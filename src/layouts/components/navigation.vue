<template>
  <nav>
    <ul class="nav-list page-navigation__list">
      <li
        v-for="link in links"
        :key="link.title"
        class="nav-list__item"
      >
        <router-link
          :to="link.href"
          :exact="link.isExact"
          active-class="nav-list__item--current"
        >
          {{ link.title }}
        </router-link>
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
        { title: 'Оргсхема', href: '/', isExact: true },
        { title: 'Kolesa Shop', href: '/shop', isExact: false },
      ],
    };
  },
};
</script>
