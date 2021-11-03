<template>
  <a class="user">
    <img
        :src="user.avatarUrl"
        width="44" height="44"
        alt="Фото пользователя"
      >
    <div>
      <span class="user__name">{{ user.name }}</span><br>
      <span class="user__points">{{ user.score }} баллов</span>
    </div>
  </a>
</template>

<script>
import axios from '../../axios';

export default {
  name: 'user-block',
  data() {
    return {
      user: Object,
    };
  },
  mounted() {
    axios.get('templates/7ZW3y5GAuIge/data')
      .then((response) => {
        this.user = response.data;
        this.$emit('load', this.user);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
