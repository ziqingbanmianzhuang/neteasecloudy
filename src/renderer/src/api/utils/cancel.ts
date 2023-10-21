//  2,支持取消请求
// import { Apis } from '../index'
import axios from 'axios'

const CancelToken = axios.CancelToken;

const cancelMap = {};

let cancel;

 /*    Apis.reqMiddleware.push({
        onFulfiled: (config) => {
            const source = axios.CancelToken.source()
            config.cancelToken = source.token
            cancelMap[config.url] = source
            return config
        }
}) */

export default function cancelReq(config) {
    config.cancelToken = new CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        cancel = c;
    });

    cancelMap[config.url] = true;

    if (cancelMap[config.url]) {
        //可以手动在cancelMap中设置想要取消的请求的路径,这样就可以自动取消掉你不想要发出去的请求了
        cancel('Request was canceled')
        delete cancelMap[config.url];
    }

    return config;
    }
   
       

    
