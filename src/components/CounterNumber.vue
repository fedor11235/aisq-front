<template>
  <div class="counter-number">
    <div @click="handlerReduceCount" class="counter-number_control">-</div>
    <div class="counter-number_value">{{ count }}</div>
    <div @click="handlerIncreaseCount" class="counter-number_control">+</div>
  </div>
</template>

<script lang="ts" setup>
import { toRef } from "vue";
import coffeeServices from "@/services/coffee";

const props = defineProps<{
  id: number;
  coffeCount: number;
}>();

const count = toRef(props.coffeCount);

async function handlerReduceCount() {
  count.value -= 1;
  await coffeeServices.updateConfigsCoffeeCount({
    id: props.id,
    count: count.value,
  });
}

async function handlerIncreaseCount() {
  count.value += 1;
  await coffeeServices.updateConfigsCoffeeCount({
    id: props.id,
    count: count.value,
  });
}
</script>
<style lang="scss">
.counter-number {
  display: grid;
  grid-template-columns: 20px 40px 20px;
  text-align: center;
  &_control {
    cursor: pointer;
    border: 1px solid blue;
    &:hover {
      background-color: teal;
      color: white;
    }
  }
  &_value {
    background-color: white;
  }
}
</style>
