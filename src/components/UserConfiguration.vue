<template>
  <div class="configuration">
    <div>Ваша конфигурация:</div>
    <div class="configuration__config">
      Размер выбранного напитка: {{ rootStore.size }}
    </div>
    <div class="configuration__config">
      Количество напитков: {{ rootStore.count }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from "@/store";

const rootStore = useRootStore();
</script>
<style lang="scss">
.configuration {
  width: 80%;
  height: 20%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  &__config {
    width: 400px;
    text-align: left;
  }
}
</style>
