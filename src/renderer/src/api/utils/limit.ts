// import axios from 'axios'
// import { Apis } from '../index'
//  3.支持接口限流
const limitNum = 5 //每秒1个请求
const interval = 5000//1秒
let tokens = limitNum
setInterval(() => { tokens = limitNum }, interval)
export default function limit(config) {
  
    
    // Apis.reqMiddleware.push({
    //     onFulfilled: (config) => {
    //         if (tokens > 0) {
    //             tokens--
    //             return config
    //         } else {
    //             throw new Error('Rate limit exceeded')
    //         }
    //     }
    // })
   
    
    if (tokens > 0) {
        tokens--
        console.log('limit');
        return config
    } else {
        console.log('Rate limit exceeded');
        throw new Error('Rate limit exceeded')
        }
    
    }