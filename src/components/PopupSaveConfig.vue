<template>
  <div @click.self="handlerClosePopup" class="backdrop popup">
    <div class="popup-config">
      Сохарнить выбранные конфигурации?
      <div @click="handlerSave" class="popup-config__btn">
        Добавить в хранилище
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: "close"): void;
}>();

function handlerClosePopup() {
  emit("close");
}

function handlerSave() {
  console.log("сохранить");
  emit("close");
}
</script>
<style lang="scss">
.popup-config {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  height: 20%;
  max-height: 200px;
  background-color: aliceblue;
  border: 1px solid blue;
  &__btn {
    cursor: pointer;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: 1px solid blue;
    &:hover {
      background-color: teal;
      color: white;
    }
  }
}
</style>
