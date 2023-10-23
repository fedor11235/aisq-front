<template>
  <div class="options-view">
    <UserConfiguration />
    <CoffeeMachine />
  </div>
</template>

<script lang="ts" setup>
import CoffeeMachine from "@/components/CoffeeMachine.vue";
import UserConfiguration from "@/components/UserConfiguration.vue";
</script>

<style lang="scss">
.options-view {
  position: fixed;
  top: 50%;
  translate: 0 -40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80vw;
  height: calc(70vh + 10px);
}
</style>
