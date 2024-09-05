<template>
    <div @click="$emit('edit')">
        <img src="@/assets/edit.svg" class="image_edit">
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'EditButton',
});
</script>

<style>
.image_edit:hover {
  cursor: pointer;
  opacity: .5;
}
</style>