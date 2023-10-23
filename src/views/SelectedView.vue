<template>
  <div class="configuration-list">
    <div
      v-for="coffee in rootStore.coffeeList"
      :key="coffee.id"
      class="configuration-list__items"
    >
      <div class="configuration-list__items_item">
        <div>Айди:</div>
        <div>{{ coffee.id }}</div>
      </div>
      <div class="configuration-list__items_item">
        <div>Размер:</div>
        <div>{{ coffee.size }}</div>
      </div>
      <div class="configuration-list__items_item">
        <div>Количество:</div>
        <div>
          <CounterNumber :id="coffee.id" :coffeCount="coffee.count" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from "@/store";
import CounterNumber from "@/components/CounterNumber.vue";

const rootStore = useRootStore();
</script>

<style lang="scss">
.configuration-list {
  position: fixed;
  top: 50%;
  translate: 0 -40%;
  width: 80%;
  height: calc(70% + 9.5px);
  border: 1px solid black;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: scroll;
  &__items {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    background-color: aliceblue;
    border: 1px solid blue;
    text-align: left;
    padding: 8px 16px;
    box-sizing: border-box;
    margin-bottom: 8px;
    &_item {
      display: grid;
      grid-template-columns: 200px 1fr;
    }
  }
}
</style>
