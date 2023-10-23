<template>
  <div class="coffee-machine">
    <div>Кофе машина</div>
    <img
      :class="[
        'coffee-machine__product',
        {
          'coffee-machine__product_big': rootStore.size === 'Увеличиный',
        },
      ]"
      src="@/assets/coffee.jpg"
      alt="coffe"
    />
    <div class="coffee-machine__options">
      <div class="coffee-machine__options_opt">
        Выберите размер:
        <DropDawnControler
          v-model="rootStore.size"
          :listItem="rootStore.listSizeMenu"
        />
      </div>
      <div class="coffee-machine__options_opt">
        Выберите количество напитков:
        <DropDawnControler
          v-model="rootStore.count"
          :listItem="rootStore.listCountMenu"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DropDawnControler from "@/components/DropDawnControler.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();
</script>
<style lang="scss">
.coffee-machine {
  width: 80%;
  height: 50%;
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
    max-width: 500px;
    width: 90%;
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
