<template>
    <div class="righthalf">
        <img id="kitty" src="@/assets/котик_1.png">
    </div>
    <div class="lefthalf">
        <h1 id="welcome">Добро пожаловать!</h1>
        <div class="container_input">
            <span id="span_p">Почта</span>
            <input type="text" placeholder= "Example@email.com" id="pochta" v-model="email">
            <span id="span_ps">Пароль</span>
            <input type="password" placeholder="Пароль должен содержать минимум 8 символов" id="password" v-model="password">
        </div>
        <button class="button" @click.prevent="submit">Войти</button>
        <div class="sign">
            <span id="today_3">У меня нет аккаунта!</span>
            <a id="hr_2" v-on:click="auth" @click="redirectToSign">Зарегистрироваться</a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mapMutations, mapActions} from "vuex";

export default defineComponent({
  name: "Welcome",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
     ...mapActions(["login"]),
    async submit() {
      try {
        await this.login({email:this.email, password:this.password});
        console.log(this.router);
        this.$router.push("/boards");
      } catch {

      }
    },
  },
  setup() {
    const router = useRouter();

    const redirectToSign = () => {
      router.push("/sign-in");
    };

    return {
      redirectToSign,
    };
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

#pochta {
    width: 60%;
    height: 130%;
    margin-left: 150px;
    border-radius: 5px;
    background-color: #F7FBFF;
    border-color: #D4D7E3;
    margin-top: 4px;
    font-family: "Montserrat Alternates", sans-serif;
    color: #D4D7E3;
    border-width: 1px;
    
}

#password {
    width: 60%;
    height: 160%;
    margin-left: 150px;
    border-radius: 5px;
    background-color: #F7FBFF;
    border-color: #D4D7E3;
    margin-top: 4px;
    font-family: "Montserrat Alternates", sans-serif;
    border-width: 1px;
    color: #D4D7E3;
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
    margin-top: 20px;
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