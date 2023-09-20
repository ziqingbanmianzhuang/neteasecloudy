
import retry from '../utils/retry'
import hasReqCache from '../utils/cache/req';
import limit from '../utils/limit';
import cancelReq from '../utils/cancel';
import { Apis } from '../index';
export default function createReqInterceptor(axiosInstance){
  axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    //配置支持重新请求
    retry()
    //请求之前判断是否有缓存,如果有的话就取消请求,否则返回请求配置对象
    // hasReqCache(config)
    limit(config)
    // cancelReq(config)
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
 });
}
  