<template>
  <div>
    <img 
      src="@/assets/plus.svg" 
      alt="Добавить задачу" 
      class="add-task-icon" 
      @click="showModal=true"/>
    <ModalWindowColumn v-if="showModal" @columnSubmitted="addNewColumn" @closeModal="showModal = false" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ModalWindowColumn from '@/components/ModalWindowColumn.vue';

export default defineComponent({
  name: 'AddColumnButton',
  components: {
    ModalWindowColumn, 
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    addNewColumn(columnData) {
      this.$emit('columnSubmitted', columnData);
      this.showModal = false;
    },
  },
});
</script>
  
  <style>
  .add-column-icon:hover {
    cursor: pointer;
    opacity: .5;
  }
  </style>