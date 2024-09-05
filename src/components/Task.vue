<script>
import DeleteButton from "./EditButton.vue";
import ModalWindow from "./ModalWindow.vue";
import  EditButton from "./EditRealButton.vue";
export default {
    components: {
    DeleteButton,
    ModalWindow,
    EditButton,
},
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      this.$emit('editTask', this.task);
    },
    deleteTask() {
        const index = this.$parent.tasks.findIndex(task => task.id === this.task.id);
        if (index !== -1) {
            this.$parent.tasks.splice(index, 1);
        }
    },
    editTask() {
        this.isModalOpen = true;
        const index = this.$parent.tasks.findIndex(task => task.id === this.task.id);
        if (index !== -1) {
        this.$parent.tasks.splice(index, 1); // Удаляем существующую задачу
    // Создаем новую задачу
        const newTask = {
            id: this.$parent.tasks.length + 1,
            title: "Новый заголовок", // Замените на нужный заголовок
            description: "Новое описание", // Замените на нужное описание
            dueDate: "Новая дата", // Замените на нужную дату
            columnId: this.column.id,
        };

         this.$parent.tasks.push(newTask); // Добавляем новую задачу
  }
    }
  },
};
</script>

<template>
    <div class="task-item" :data-task-id="task.id">
        <div class="name_container">
            <h3 class="task-item__title">{{ task.title }}</h3>
            <EditButton @click="openModal"/>
            <DeleteButton @click="deleteTask"/>
        </div>
        <p class="task-item__description">{{ task.description }}</p>
        <div class="task-item__complexity">
            <div class="task_container">
                <div class="figures">
                    <div :class="['complexity__dot', 'complexity__dot--' + task.complexity]"></div>
                    <div :class="['complexity__dot', 'complexity__dot--' + task.complexity]"></div>
                    <div :class="['complexity__dot', 'complexity__dot--' + task.complexity]"></div>
                </div>
                <p class="task-item__client">{{ task.dueDate }}</p>
            </div>
        </div>
        <ModalWindow v-if="isModalOpen===true" @close="()=>isModalOpen=false"/>
    </div>
</template>

<style>
.task-item {
    background-color: #f4f2ff;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.task-item__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.task-item__complexity {
    display: flex;
    align-items: center;
    margin-right: 15px;
}

.complexity__dot {
    width: 24px;
    height: 12px;
    flex-shrink: 0;
    background-color: #d9d9d9;
    border-radius: 0px 10px 10px 24px;
    display: inline-block;
    margin-right: 5px;
}

.complexity__dot--medium {
    background-color: #FDE047;
}

.complexity__dot--high {
    background-color: #e42c5f;
}

.complexity__dot--low {
    background-color: #2ce49d;
}

.complexity__dot--done {
    background-color: #2d41a7;
}

.task-item__title {
    flex-grow: 1;
    font-weight: 600;
    color: #333;
}

.task-item__description {
    color: gray;
    font-size: 12px;
    margin: 10px 0;
}

.task-item__client {
    font-size: 14px;
    color: #4F46E5;
    margin-left: 225px;
}

.task_container {
    display: flex;
}
</style>