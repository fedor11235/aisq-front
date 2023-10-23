<template>
  <div class="options-view">
    <UserConfiguration />
    <CoffeeMachine />
  </div>
</template>

<script lang="ts" setup>
import CoffeeMachine from "@/components/CoffeeMachine.vue";
import UserConfiguration from "@/components/UserConfiguration.vue";
import { useRootStore } from "@/store";
</script>
<style lang="scss">
.options-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
}
</style>
