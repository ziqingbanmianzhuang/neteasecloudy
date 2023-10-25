import axios from 'axios'
import pinia from "../../store/index";
import retry from '../utils/retry'
// import hasReqCache from '../utils/cache/req';
import limit from '../utils/limit';
// import cancelReq from '../utils/cancel';
import { useCancelRequestStore } from '../../store/cancelRequestStore/index';

//路由跳转不取消请求的白名单
const cancelWhiteList = [];

//cancelRequsetStore
const cancelRequestStore = useCancelRequestStore(pinia);

//cancelToken
const CancelToken = axios.CancelToken;;

export default function createReqInterceptor(axiosInstance){
  axiosInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    //存储请求-用于路由跳转前取消请求,可以设置白名单
    if (!cancelWhiteList.includes(config.url)) {
      config.cancelToken = new CancelToken(function executor(c) {
        cancelRequestStore.pushToken(c);//c就是取消请求的方法
      })
    }

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
  }, function (err) {
    //对请求错误做些什么

    //请求时候的错误,比如超时,断网,请求发送监控,弹出错误组件
    return Promise.reject(err);
    
 });
}
  