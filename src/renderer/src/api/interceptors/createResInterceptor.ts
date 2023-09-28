// import { Apis } from '../index';
import resCache from "../utils/cache/res";
export default function createResInterceptor(axiosInstance) {
    axiosInstance.interceptors.response.use(function (res) {
        //dong something before is sent
        let cache = resCache(res);
        
        return cache || res;
    }, function (err) {
        return Promise.reject(err);
    })
}
    



