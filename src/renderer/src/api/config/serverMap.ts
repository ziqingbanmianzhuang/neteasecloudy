//服务器相关配置的集合
export default {
    baseServer: {
        baseMap: {
            localprod: 'http://localhost:3000/',
            prod: 'http://localhost:3000/',
            stage: 'http://localhost:3000/',
            test: 'http://localhost:3000/',
            dev: 'http://localhost:3000/',
            local: 'http://localhost:3000/',
            baseURL: 'http://localhost:3000/'
        },
        default:true
    },
    'api-test': {
        baseMap: {
            localprod: 'http://localhost:3000/',
            prod: 'http://localhost:3000/',
            stage: 'http://localhost:3000/',
            test: 'http://localhost:3000/',
            dev: 'http://localhost:3000/',
            local: 'http://localhost:3000/',
            baseURL: 'http://localhost:3000/'
        },
        default:false
    }
}