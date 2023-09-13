import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => ({ isLogin: false }),
    getters: {
      getLogin: (state) => state.isLogin,
    },
    actions: {
     setLogin() {
        this.isLogin = true
      },
    },
})