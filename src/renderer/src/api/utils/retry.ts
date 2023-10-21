import axios from 'axios'
import { Apis } from '../Apis/index'
import { log } from 'console';
export default function retry() {
let __retryCount = 0;
Apis.reqMiddleware.push({
    onFulfilled: 0,
    onRejected: function axiosRetryInterceptor(err) {
        const config = err.config;

        if (!config || !config.retry) return Promise.reject(err)
        config.retry || (config.retry = 3);

        // 已经尝试retry的次数
        if (__retryCount >= config.retry) {
            return Promise.reject(`retry次数已经用完,${err.config.url}`);
        }
        
        __retryCount += 1;
        
        // 等待多少秒之后进行retry
        const backoff = new Promise(function (resolve) {
            setTimeout(function () {
                resolve('ok')
            }, config.retryDelay || 3000)
        });

        return backoff.then(function () {
            return axios(config);
        }).then(function (res) { return res }, function (err) {
            return Apis.reqMiddleware[0].onRejected(err);
        });

}
})
}