//请求api的集合
export default {
    //发送验证码
    sendCaptcha: {
        method: 'get',
        url:'/captcha/sent'
    },
    
    //注册
    signIn: {
        method: 'get',
        url:'/login/cellphone'
    }
}
