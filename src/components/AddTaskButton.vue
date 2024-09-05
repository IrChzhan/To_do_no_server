<template>
  <div>
    <img 
      src="@/assets/plus.svg" 
      alt="Добавить задачу" 
      class="add-task-icon" 
      
    />
    
  </div>
</template>

<script>
import { defineComponent } from 'vue';
 

export default defineComponent({
  name: 'AddTaskButton',
});
</script>

<style>
.add-task-icon:hover {
  cursor: pointer;
  opacity: .5;
}
</style>
 