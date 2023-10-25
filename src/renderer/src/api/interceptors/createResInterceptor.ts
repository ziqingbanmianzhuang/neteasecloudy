// import { Apis } from '../index';
import pinia from "../../store/index";
import { nanoid} from 'nanoid'

import { useMessageToastStore } from "../../store/message_toast_store/index";
// import resCache from "../utils/cache/res";

//messageToastStore
const messageToastStore = useMessageToastStore(pinia);

export default function createResInterceptor(axiosInstance) {
    axiosInstance.interceptors.response.use(function (res) {
        //对响应数据做些什么
        
        //统一成功情况下的不同返回码对应的处理
        if (res.status === 200) {
            switch (res.data.code) {
                case 102:
                    //弹窗组件提示...
                    console.log('操作过快102');
                    break;
                case -5:
                    //弹窗组件提示...
                    console.log('未登录-5');
                    break;
            }
        }
        //隐藏loading组件
        //下载类型特殊处理文件名
        const type = res.request.responseType || '';
        if (type.includes('blob')) {

            let fileName = ''

            let downloadUrl = ''

            downloadUrl = window.URL.createObjectURL(new Blob([res.data]))

            const link = document.createElement('a')

            link.style.display = 'none'
            link.href = downloadUrl

            if (fileName) {
                link.setAttribute('download',fileName)
            } else {
                let disposition = res.headers['content-disposition']
                if (disposition && disposition.indexOf('filename') !== -1) {

                    //针对文件名有中文,文件名有空格的问题,从content-disposition中获取到的filename进行decodeURI处理
                    fileName = decodeURI(disposition.substring(disposition.indexOf('filename=') + 9, disposition.length))
                    //
                    res.data.fileName = fileName
                }
                link.setAttribute('download',fileName)
            }
            document.body.appendChild(link)
            link.click()
        }
        return  res;
    }, async function (err) {
        //对响应错误做点什么

        //统一失败情况的不同返回码对应的处理
        console.log('errresponse', err);
        if (!err.response) {
            if (err.message.includes('timeout')) {
                await messageToastStore.addToToastList({ id: nanoid(), isShowMessageToast: true, messageToastTitle: '客户端请求错误', messageToastContent: `${err.config.url}'timout! ! !'` })
            }
            return Promise.reject(err);
        }
        
        switch (err.response.status) {
            case 400:
               await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'请求错误'})
                break;
            case 401:
                await  messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true, messageToastTitle: '哎呀,出错了', messageToastContent: '未授权,请登录' })
                break;
            case 403:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true, messageToastTitle: '哎呀,出错了', messageToastContent: '拒绝访问' })
                break;
            case 404:
                await messageToastStore.addToToastList({ id:nanoid(),isShowMessageToast: true, messageToastTitle: '哎呀,出错啦', messageToastContent: `请求地址出错,${err.response.config.url}` })
            console.log('messageToastStore', messageToastStore.toastList);
                break;
            case 408:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'请求超时'})
                break;
            case 500:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'服务器内部错误'})
                break;
            case 501:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'服务未实现'})
                break;
            case 502:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'网关错误'})
                break;
            case 503:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'服务不可用'})
                break;
            case 504:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'网关超时'})
                break;
            case 505:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'HTTP版本不受支持'})
                break;
            default:
                await messageToastStore.addToToastList({id:nanoid(),isShowMessageToast: true,messageToastTitle: '哎呀,出错了',messageToastContent:'未知错误'})
        }
        return Promise.reject(err);
    })
}
    



