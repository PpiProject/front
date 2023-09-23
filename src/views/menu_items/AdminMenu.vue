<template>
<nav class="left-menu">
  <a class="link-menu" href="#">Панель администратора</a>
  <a class="link-menu" href="#">Редактирование расписания</a>
</nav>
</template>

<script>
export default {
  name: "AdminMenu"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap');
  .left-menu{
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100vh;
    background: linear-gradient(-65deg, #515050, #1f6d17);
    background-blend-mode: luminosity;
  }

  .link-menu{
    padding-top: 1rem;
    text-decoration: none;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: white;
  }
</style>