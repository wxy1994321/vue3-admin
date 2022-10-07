import { createStore } from 'vuex'

import login from './modules/login';
import tableData from './modules/tableData';
import dashboardData from "./modules/dashboardData"

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    tableData,
    dashboardData
  }
})

export default store

export function refreshCache() {
  store.dispatch("login/refreshCache")
}

