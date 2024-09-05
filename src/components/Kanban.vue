<script>
import { defineComponent } from "vue";
import Column from "@/components/Column.vue";
import AddTaskButton from "@/components/AddTaskButton.vue";
import ModalWindowColumn from "@/components/ModalWindowColumn.vue";
import axios from "axios";
import AddColumnButton from "@/components/AddColumnButton.vue";
import DeleteButton from "@/components/EditButton.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Kanban",
  components: {
    Column,
    AddTaskButton,
    ModalWindowColumn,
    AddColumnButton,
    DeleteButton,
  },
  data() {
    return {
       columns: [
         { id: 1, title: "Задачи", icon: "path_to_icon", tasks: [] },
         { id: 2, title: "В процессе", icon: "path_to_icon", tasks: [] },
         { id: 3, title: "Сделано", icon: "path_to_icon", tasks: [] },
       ],
    };
  },
  methods: {
    ...mapActions(['loadTasks']),
    addNewTask1(taskData) {
      const newTask = {
        id: this.tasks.length + 1,
        title: taskData.title,
        description: taskData.description,
        dueDate: taskData.dueDate,
        columnId: this.column.id,
      };
      this.tasks.push(newTask);
    },
    addNewColumn(columnData) {
  const newColumn = {
    id: this.columns.length + 1,
    title: columnData.title,
    icon: "@/assets/done.svg",
    tasks: [],
  };
  this.columns.push(newColumn);
  console.log(newColumn);
  
  this.$forceUpdate();
},
  },
  mounted() {
    this.loadTasks()
    console.log(this.$route);
  },
});
</script>

<template>
    <body>
    <header class="header">
      <div class="container header__container">
        <h1 class="header__title">Kanban Board</h1>
        <div class="header__option">
          <AddColumnButton @columnSubmitted="addNewColumn"/>
          <div class="header__user-icon">К.П</div>
        </div>
      </div>
      <div></div>
    </header>

    <main class="container">
      <div class="kanban" id="app">
        <div class="kanban__header-content">
          <Column 
            v-for="column in columns" 
            :key="column.id" 
            :column="column" 
          />
        </div>
      </div>
    </main>

    <footer class="footer">
      <p class="footer__text">To-Do-List-Kanban</p>
    </footer>
</body>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2b1887;
  color: white;
  min-height: 100vh;
  min-width: 380px;
}

html {
  min-width: 380px;
}

.header__container,
footer {
  background-color: #1c0e5e;
  text-align: center;
  padding: 10px 0;
  width: 500px;
  margin-left: 550px;
}

.header__title,
.footer__text {
  margin: 0;
  padding: 10px 0;
}

.container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
}

.kanban {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Определяем 3 колонки с равной шириной */
  grid-gap: 20px;
  /* Определяем промежуток между колонками и строками */
  margin-right: 150px;
  margin-bottom: 170px;
  margin: 500px;
}

.name_container {
  display: flex;
}

.image_edit {
  height: 20px;
}

header {
  margin-top: 10px;
}

.header__title {
  font-weight: 300;
}

.header__user-icon {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  width: 500px;
}

.header__title {
  font-weight: 300;
}

.header__option {
  display: flex;
  align-items: center;
  gap: 15px;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  color: black;
  font-size: 24px;
}

.cancel-button {
  padding: 10px 20px;
  background-color: rgb(255, 0, 64);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: darkred;
}
@media screen and (max-width: 768px) {
  .container {
    max-width: 540px;
    margin: 0;
    padding: 0;
  }
}

@media screen and (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media screen and (min-width: 992px) {
  .container {
    max-width: 960px;
  }

  .kanban__column {
    flex: 0 0 calc(33.333% - 20px);
  }
}

@media screen and (max-width: 992px) {
  .kanban {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 20px;
  }

  .kanban__column {
    width: 100%;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media screen and (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>