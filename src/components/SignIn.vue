<template>
    <div class="righthalf">
        <img id="kitty" src="@/assets/котик_1.png">
    </div>
    <div class="lefthalf">
        <h1 id="welcome">Регистрация</h1>
        <div class="container_input">
            <span id="span_p">Имя пользователя</span>
            <input type="text" placeholder="Ваше имя" id="name" v-model="name">
            <span id="span_p">Почта</span>
            <input type="text" placeholder="Example@email.com" id="pochta" v-model="email">
            <span id="span_ps">Пароль</span>
            <input type="password" placeholder="Пароль должен содержать минимум 8 символов" id="password" v-model="password">
        </div>
        <button class="button" @click="register">ГОТОВО</button>
    </div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Registration",
  data() {
    return {
      name:"",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.put(" https://todo-list.edu-playground.ru/api/v1/auth/signup", {
            formData: {
            name: this.name,
            email: this.email,
            password: this.password,
            confirm_password: this.password,
        }
        });
        const { token, userId } = response.data; 
        localStorage.setItem("token", token); 
        localStorage.setItem("userId", userId); 
        console.log(response.data);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style>
.righthalf {
    width: 50%;
    right: 0px;
    height: 50%;
    position: absolute;
}

.lefthalf {
    width: 50%;
    position: absolute;
    left: 0px;
    height: 100%;
}

#kitty {
    width: 86%;
    margin-left: 70px;
    margin-top: 100px;
    float: right;
}

#welcome {
    justify-content: center;
    margin-top: 130px;
    margin-left: 160px;
    font-family: "Montserrat Alternates", sans-serif;
    color: white;
    font-weight: bolder;
    font-size: 35px;
}

.container_input {
    display: grid;
}
#name {
    width: 60%;
    height: 100%;
    margin-left: 150px;
    border-radius: 5px;
    background-color: #F7FBFF;
    border-color: #D4D7E3;
    margin-top: 4px;
    font-family: "Montserrat Alternates", sans-serif;
    color: #D4D7E3;
    border-width: 1px;
}
#pochta {
    width: 60%;
    height: 100%;
    margin-left: 150px;
    border-radius: 5px;
    background-color: #F7FBFF;
    border-color: #D4D7E3;
    margin-top: 4px;
    font-family: "Montserrat Alternates", sans-serif;
    color: black;
    border-width: 1px;
}

#password {
    width: 60%;
    height: 200%;
    margin-left: 150px;
    border-radius: 5px;
    background-color: #F7FBFF;
    border-color: #D4D7E3;
    margin-top: 4px;
    font-family: "Montserrat Alternates", sans-serif;
    border-width: 1px;
    color: black;
}

#span_p {
    margin-left: 150px;
    color: white;
    font-family: "Montserrat Alternates", sans-serif;
    margin-top: 20px;
}

#span_ps {
    margin-left: 150px;
    color: white;
    font-family: "Montserrat Alternates", sans-serif;
    margin-top: 20px;
}

#hr {
    margin-top: 25px;
    margin-left: 370px;
    text-decoration: none;
    font-family: "Montserrat Alternates", sans-serif;
    color: white;
}

#hr:hover {
    color: rgb(208, 29, 184);
}

.button {
    width: 60%;
    height: 6%;
    margin-left: 150px;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: large;
    background-color: #162D3A;
    color: #F7FBFF;
    border-radius: 5px;
    border: none;
    margin-top: 40px;
}

.button:hover {
    background-color: rgb(208, 29, 184);
}

.sign {
    margin-top: 25px;
    margin-left: 20px;
}

#today_3 {
    justify-content: center;
    margin-left: 160px;
    color: white;
    font-family: "Montserrat Alternates", sans-serif;
    size: 5px;
    margin-top: 100px;
}

#hr_2 {
    text-decoration: none;
    font-family: "Montserrat Alternates", sans-serif;
    color: white;
}

#hr_2:hover {
    color: rgb(208, 29, 184);
}
@media (max-width: 760px) {
    #flower {
        position: fixed;
        top: 0;
        margin-left: -170px;
        width: 50%;
        height: 30%;
    }
    #welcome {
        margin-top: 220px;
        font-size: 30px;
    }
    #today {
        display: none;
    }
    #today_2 {
        display: none;
    }
    #today_4 {
        height: 60px;
        width: 60%;
        margin-left: 140px;
        text-align: center;
        display: flex;
    }
    #hr {
        margin-left: 150px;
    }
    #today_3 {
        display: none;
    }
    #hr_2 {
        margin-top: 20px;
        margin-left: 120px;
    }
}
</style>