
import retry from '../utils/retry'
import hasReqCache from '../utils/cache/req';
import limit from '../utils/limit';
import cancelReq from '../utils/cancel';

export default function createReqInterceptor(axiosInstance){
  axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    //配置支持重新请求
    retry()

    //请求之前判断是否有缓存,如果有的话就取消请求,返回请求配置对象
    // hasReqCache(config)
    limit(config)

    // cancelReq(config)
    //每个接口新增时间戳
    //put post delete方式提交的数据格式化
    //在发送请求之前,判断是否存在token,如果存在的话,则每个http header都加上token
    return config;
  }, function (error) {
    
    // Do something with request error
    return Promise.reject(error);
 });
}
  