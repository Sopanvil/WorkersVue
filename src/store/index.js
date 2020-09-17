import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personnel: ''
  },
  mutations: {
    updateWorkers(state, workers) {
      state.personnel = workers
    },
    addWorker(state, newWorker) {
      state.personnel.workers.push(newWorker)
    },
    deleteWorker(state, newWorker) {
      state.personnel.workers.slice(newWorker)
    },
    removeFromPersonnel(state, index){
      state.personnel.workers.splice(index, 1)
    }
  },
  actions: {
    async fetchWorkers({commit}) {
      let workers = await axios.get('http://localhost:8080/dataFile/allWorkers.json')
      workers = workers.data
      commit('updateWorkers', workers)
    },
    async deleteFromPersonnel({commit}, index) {
      commit('removeFromPersonnel', index)
    }
  },
  modules: {
  },
  getters: {
    allWorkers(state) {
      return state.personnel.workers
    }
  }
})
