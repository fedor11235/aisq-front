<template>
  <Transition name="move-top">
    <PopupSaveConfig
      v-if="popupStore.isPopupConfigOpen"
      @close="popupStore.isPopupConfigOpen = false"
    />
  </Transition>
  <HeaderNav />
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script lang="ts" setup>
import PopupSaveConfig from "@/components/PopupSaveConfig.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { usePopupStore } from "@/store";

const popupStore = usePopupStore();
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
