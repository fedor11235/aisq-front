<template>
  <div class="options-view">
    <div class="coffee-machine">
      <div>Кофе машина</div>
      <img
        :class="[
          'coffee-machine__product',
          {
            'coffee-machine__product_big': size === 'Увеличиный',
          },
        ]"
        src="@/assets/coffee.jpg"
        alt="coffe"
      />
      <div class="coffee-machine__options">
        <div class="coffee-machine__options_opt">
          Выберите размер:
          <DropDawnControler v-model="size" :listItem="listSizeMenu" />
        </div>
        <div class="coffee-machine__options_opt">
          Выберите количество:
          <DropDawnControler v-model="count" :listItem="listCountMenu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DropDawnControler from "@/components/DropDawnControler.vue";

const listSizeMenu = ["Стандартный", "Увеличиный"];
const listCountMenu = [6, 8, 12];

const size = ref("Стандартный");
const count = ref(6);
</script>
<style lang="scss">
.options-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.coffee-machine {
  width: 80%;
  height: 70%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  &__product {
    height: 30%;
    width: 80%;
    object-fit: contain;
    &_big {
      scale: 1.1;
    }
  }
  &__options {
    width: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    &_opt {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
