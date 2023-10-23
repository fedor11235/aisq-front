<template>
  <div @click.self="handlerOpenDropDawn" class="drop-down">
    {{ modelValue }}
    <div
      v-if="isOpenMenuSize"
      @click.self="handlerCloseDropDawn"
      class="backdrop"
    ></div>
    <div v-if="isOpenMenuSize" class="drop-down__menu">
      <div
        v-for="item of listItemFilter"
        :key="item"
        @click="handlerChangeValue(item)"
        class="drop-down__menu_item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const props = defineProps<{
  modelValue: string | number;
  listItem: string[] | number[];
}>();

const isOpenMenuSize = ref(false);

const listItemFilter = computed(() => {
  return props.listItem.filter((item) => item != props.modelValue);
});

function handlerOpenDropDawn() {
  isOpenMenuSize.value = true;
}

function handlerCloseDropDawn() {
  isOpenMenuSize.value = false;
}

function handlerChangeValue(item: string | number) {
  emit("update:modelValue", item);
  isOpenMenuSize.value = false;
}
</script>
<style lang="scss">
.drop-down {
  position: relative;
  background-color: aliceblue;
  width: 140px;
  height: 20px;
  cursor: pointer;
  border: 1px solid blue;
  text-align: left;
  padding: 0 8px;
  &__menu {
    position: absolute;
    left: -1px;
    z-index: 1;
    width: 156px;
    background-color: aliceblue;
    border: 1px solid blue;

    &_item {
      padding: 0 8px;
      &:hover {
        background-color: teal;
        color: white;
      }
    }
  }
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
