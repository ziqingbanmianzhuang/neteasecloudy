import { defineStore } from 'pinia'
export const useMessageToastStore = defineStore('message-toast', {
    state: () => {
        return {
            toastList: [
                // { isShowMessageToast: false,messageToastTitle: '温馨提示',messageToastContent:'哎呀,出了一点点问题'}
            ]
        }
    },
    getters: {
      getToastList:(state)=>state.toastList
    },
    actions: {
        async addToToastList(payload) {
        this.toastList.push(payload as never)
        },
        deleteToastList(id) {
           let flag = this.toastList.findIndex((item, index, arr) => {
                if (item.id  === id) {
                    return true
               }
               return false;
            })
            this.toastList.splice(flag,1)
        }
    },
})