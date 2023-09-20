// import { Apis } from '../../index'
import { cacheMap } from './index'
import axios from 'axios'
const CancelToken = axios.CancelToken;
let cancel;
export default function hasReqCache(config) {
    console.log('reqcache');
    
//     Apis.reqMiddleware.push({
//     onFulfilled: (config) => {
//         //如果请求路径含有对应的缓存,则直接取消请求,否则返回请求的配置对象
//         if (cacheMap[config.url]) {
//             throw new axios.Cancel('request was cached')
//         }
//         return config || {}
//     }
    // })
    //  如果请求路径含有对应的缓存,则直接取消请求并返回缓存,否则返回请求的配置对象
    if (cacheMap[config.url]) {
        config.cancelToken=new CancelToken(function executor(c) {
            // An executor function receives a cancel function as a parameter
            cancel = c;
        })
        cancel();
        return cacheMap[config.url]
        }
       
        
            // throw new axios.Cancel('request was cached')
        return config || {}
    }