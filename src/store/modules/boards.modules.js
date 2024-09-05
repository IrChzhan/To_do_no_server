import axios from "axios";
export default {
  state: () => ({
    currentBoardId: 0,
    listBoards: null,
    load: false,
  }),
  mutations: {
    addBoards(state, data) {
      state.listBoards = data;
    },
    deleteBoard(state, index) {
      state.listBoards.splice(index, 1);
    },
    editBoard(state, data) {},
    setCurrentBoardId(state, data) {
      state.currentBoardId = data;
    },
  },
  actions: {
    async loadBoards(store, data) {
      try {
        const request = await axios.get(
          `https://todo-list.edu-playground.ru/api/v1/user/${store.rootState.auth.userId}/boards`,
          {
            headers: { "X-Base-Auth": store.rootState.auth.token },
          }
        );

        if (request.status == 200) {
          console.log(store);
          store.commit("addBoards", request.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async loadTasks(store, board_id) {
      try {
        const request = await axios.get(
          `https://todo-list.edu-playground.ru/api/v1/boards/${store.rootState.boards.currentBoardId}/tasks`,
          {
            headers: { "X-Base-Auth": store.rootState.auth.token },
          }
        );

        if (request.status == 200) {
          console.log(store);
          store.commit("setCurrentBoardId", board_id);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getCurrentBoardId(state) {
      return state.currentBoardId;
    },
  },
};
