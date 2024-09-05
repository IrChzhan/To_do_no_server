<template>
    <div>
        <div class="modal">
            <div class="modal__container">
                <a href="#" class="close-modal">✖</a>
                <form>
                    <input
                       v-model="name"
                       type="text"
                       id="name-board"
                       name="name"
                       placeholder="Введите название доски"
                        />
                    <textarea
                        v-model="description"
                        type="text"
                        id="description-board"
                        name="description"
                        placeholder="Введите описание доски"
                    ></textarea>
                    <button type="submit" @click="submitBoard">Добавить</button>
                    <button type="button" class="cancel-button"  @click="$emit('close')">Отмена</button>
                </form>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  export default defineComponent ({
    name: 'ModalWindowBoard',
    data() {
      return {
        showModal: false,
        name: "",
        description: "",
      };
    },
    methods: {
      submitBoard(e) {
        e.preventDefault();
        this.$emit('boardSubmitted',{name: this.name, description:this.description});
        this.$emit('close');
      },
    },
  });
  </script>
  
  <style>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(255 255 255 / 33%);
    backdrop-filter: blur(15px);
  }
  
  .modal__container {
    display: flex;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    width: 430px;
  }
  
  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
  
  input[type="text"],
  input[type="date"],
  textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  textarea {
    resize: vertical; 
  }
  
  button[type="submit"] {
    padding: 10px 20px;
    background-color: #2d41a7;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: darkblue;
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
  </style>