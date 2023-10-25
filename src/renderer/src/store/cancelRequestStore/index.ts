import { defineStore } from 'pinia'
export const useCancelRequestStore = defineStore('cancel-request', {
    state: () => {
        return {
            cancelTokens:[]
        }
    },
    getters: {
    },
    actions: {
        //添加取消请求的token
        pushToken(token) {
            this.cancelTokens.push(token)
        },
        //取消请求
        cancelReuquest() {
            if (this.cancelTokens.length === 0) return;
            this.cancelTokens.forEach(item => {
                item()
            })
            this.cancelTokens = []
        }
    },
})
