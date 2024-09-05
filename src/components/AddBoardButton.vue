<template>
    <div>
      <img 
        src="@/assets/plus.svg" 
        alt="Добавить задачу" 
        class="add-task-icon" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AddButtonButton',
    data() {
      return {
        showModal: false,
      };
    },
  });
  </script>
    
    <style>
    .add-column-icon:hover {
      cursor: pointer;
      opacity: .5;
    }
    </style>