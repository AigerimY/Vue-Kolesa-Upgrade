<template>
  <footer class="page-footer">
  <div class="footer-container">
    <div class="social">
      <span class="copyright">© Kolesa Group</span>
      <ul class="social-list">
        <li
          class="social-list__item"
          v-for="social in links"
          :key="social.title"
        >
          <a :href="social.href">
            <img
                :src="social.img"
                :width="social.width"
                :height="social.height"
                :alt="social.title"
              >
          </a>
        </li>
      </ul>
    </div>
    <div class="feedback">
      <p class="feedback__text">
        Есть идеи что улучшить?<br>Не знаешь, с кем решить проблему?
      </p>
      <a class="feedback__button button" href="#">Написать</a>
    </div>
  </div>
  </footer>
</template>

<script>

const instaIcon = require('../img/icon-insta.svg');
const youtubeIcon = require('../img/icon-youtube.svg');
const vkIcon = require('../img/icon-vk.svg');

export default {
  name: 'page-footer',
  data() {
    return {
      links: [
        {
          title: 'Наш инстаграм',
          img: instaIcon,
          width: 18,
          height: 18,
          href: '#',
        },
        {
          title: 'Наш ютуб канал',
          img: youtubeIcon,
          width: 18,
          height: 13,
          href: '#',
        },
        {
          title: 'Наша группа в ВК',
          img: vkIcon,
          width: 18,
          height: 11,
          href: '#',
        },
      ],
    };
  },
  methods: {},
};
</script>
