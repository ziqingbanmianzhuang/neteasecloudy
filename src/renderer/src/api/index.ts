import axios from 'axios'
//类Apis
 class Apis {
    public common
    public serverMap
    public apiMap
    public instance
    public baseURL
    public axiosInstance
    static resMiddleware
    static reqMiddleware

    constructor(serverMap, apiMap, common) {
        this.axiosInstance = axios.create(common)
        this.serverMap = serverMap
        this.apiMap = apiMap
        this.baseURL = this.getBaseURL()
        this.instance= {}
        this.combineRequest()
       
    }
    getBaseURL(){
        let baseURL = ''
        for (const key of Object.keys(this.serverMap)) {
            // 找到默认的配置值
            if (this.serverMap[key].default) {
                baseURL= this.serverMap[key].baseMap.baseURL
            }
        }
        if (!baseURL) console.error('apis,找不到默认的服务器配制')
        return baseURL

    }
     combineRequest() {
         for (const key of Object.keys(this.apiMap)) {
            this.instance[key] = (config)=>{
                let result = this.apiMap[key]
                if (!config) config = {}
                result = this.restCombine(result, config)
                return this.axiosInstance.request(result)
            }
        }
    }
    restCombine(result, config) {
        return result = {baseURL:this.baseURL,...this.common,...result,...config}
    }


    // 各种请求
    public get(url,config) {
        config = { ...config, method: 'GET' };
        return this.request(url,config)
    }
    public request(url,config) {
        const rest = config.rest || {}
        let path = url
        if (Object.keys(rest).length) path = this.restful(url, rest)
       const options = {baseURL:this.baseURL,...this.common,...config}
        return this.axiosInstance.request({
            ...options,
            url:path
        })
        
    }
    restful(url,rest) {
        const regex = /\:[^/]*/g
        return url.replace(regex, p => {
            //:id会返回id
            const key = p.slice(1)
            if (rest[key]) {
                return rest[key]
            }
            return p
        })
    }
}
//暴露创建api实例的createInstace函数
export default function createInstace(serverMap, apiMap, common) {
    const apis = new Apis(serverMap, apiMap, common)
    return apis.instance
}