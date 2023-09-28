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
        cancel('Request was canceled')
        delete cancelMap[config.url];
    }

    return config;
    }
   
       

    
