import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1551,
    secondCount: 5,
    arr: [1, 2, 3, 4, 5],
  },
  mutations: {
    increment: (state) => state.secondCount++,
    addToArr: (state, item) => {
      return state.arr.push(item);
    },
  },
  actions: {
    fetchStuff() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((data) => console.log(data.data));
    },
    add() {
      this.commit("increment");
    },
    addToList({ commit }, data) {
      commit("addToArr", data);
    },
  },
  modules: {},
  getters: {
    summary(state) {
      console.log(state);
      return state.count + state.secondCount;
    },
    printArr: (state) => state.arr,
  },
});
