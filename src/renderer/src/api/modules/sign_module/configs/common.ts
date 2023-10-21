//一些公共的配置
export default {
    timeout:10000,
    withCredentials: false,
    // baseURL:BASE_URL,
    // responseType: 'blob', // 针对文件内容中文乱码的问题
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
}