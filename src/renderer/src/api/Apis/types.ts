//请求配置接口
interface resConfigType {
    ContentType?: string;
}
enum ContentType {
    JSON = 'application/json;charset=urf-8',
    FORM = 'application/x-www-form-urlencoded;charset=utf-8'
}