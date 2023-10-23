<template>
  <div class="nav">
    <RouterLink to="/options">Выбрать конфигурацию</RouterLink>
    <RouterLink to="/selected">Список позиций</RouterLink>
  </div>
</template>

<style lang="scss">
.nav {
  top: 60px;
  position: fixed;
  display: flex;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  width: 80vw;
  height: 10%;
  border: 1px solid black;
  box-sizing: border-box;
}
</style>
