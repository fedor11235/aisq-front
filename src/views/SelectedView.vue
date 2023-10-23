<template>
  <div class="configuration-list"></div>
</template>

<script lang="ts" setup>
import { usePopupStore } from "@/store";

const popupStore = usePopupStore();
</script>

<style lang="scss">
.configuration-list {
  position: fixed;
  top: 50%;
  translate: 0 -40%;
  width: 80%;
  height: calc(70% + 9.5px);
  border: 1px solid black;
}
</style>
