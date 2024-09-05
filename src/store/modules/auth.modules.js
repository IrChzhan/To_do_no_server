import axios from "axios"
export default {
    state: () => ({
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("user"),
    }),
    mutations: {
        addToken(state, data) {
            state.token = data.token;
            state.userId = data.userId;
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", data.userId)
        },

    },
    actions: {
        async login(store, data) {
            console.log(store);
            try {
                const request = (
                    await axios.post(`https://todo-list.edu-playground.ru/api/v1/auth/signin`, {
                        formData: {
                            email: data.email,
                            password: data.password,
                        },
                    })
                );


                if (request.status == 201) {

                    console.log(store)
                    store.commit("addToken", { token: request.data.token, userId: request.data.userId });

                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    getters: {}
}