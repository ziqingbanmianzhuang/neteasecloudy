// import { Apis } from '../../index'
import { cacheMap } from './index'
export default function resCache(res) {
    console.log('res cahce');
    
   /*  Apis.resMiddleware.push({
        onFulfilled: (res) => {
            //将响应结果进行缓存,并返回缓存结构
            cacheMap[res.config.url] = res
            console.log(cacheMap[res.config.url] );
            
            return cacheMap[res.config.url] 
        }
    }) */
    
    // 将响应结果进行缓存,并返回缓存结构
    cacheMap[res.config.url] = res;

    return cacheMap[res.config.url];
}