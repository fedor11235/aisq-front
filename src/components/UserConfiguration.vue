<template>
  <div class="configuration">
    <div>Ваша конфигурация:</div>
    <div class="configuration__config">
      Размер выбранного напитка: {{ rootStore.size }}
    </div>
    <div class="configuration__config">
      Количество напитков: {{ rootStore.count }}
    </div>
    <div @click="handlerOpenPopupSaveConfig" class="configuration__btn">
      Сохранить конфигурацию
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore, usePopupStore } from "@/store";

const rootStore = useRootStore();
const popupStore = usePopupStore();

function handlerOpenPopupSaveConfig() {
  popupStore.isPopupConfigOpen = true;
}
</script>
<style lang="scss">
.configuration {
  width: 100%;
  height: 20vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  &__config {
    max-width: 400px;
    width: 90%;
    text-align: left;
  }
  &__btn {
    background-color: aliceblue;
    border: 1px solid blue;
    max-width: 400px;
    width: 90%;
    padding: 8px 0;
    cursor: pointer;
    &:hover {
      background-color: teal;
      color: white;
    }
  }
}
</style>
