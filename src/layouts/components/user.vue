<template>
  <a class="user">
    <img
        :src="$store.state.userData.avatarUrl"
        width="44" height="44"
        alt="Фото пользователя"
      >
    <div>
      <span class="user__name">{{ $store.state.userData.name }}</span><br>
      <span class="user__points">{{ $store.state.userData.score }} баллов</span>
    </div>
  </a>
</template>

<script>

export default {
  name: 'user-block',
  mounted() {
    this.$store.dispatch('updateUserData');
  },
};
</script>
