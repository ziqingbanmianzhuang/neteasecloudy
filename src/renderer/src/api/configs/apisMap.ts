//请求api的集合
export default {

    //相关歌单推荐
    getRelativeRecommendedSongs: {
        method: 'get',
        url:'/related/playlist'
    },

    //获取歌单分类
    getSongsType:{
        method: 'get',
        url:'/playlist/catlist'
    },

    //最新歌单
    getRelativeLatestSongs: {
        method: 'get',
        url:'/top/playlist'
    },

    //榜单
    // 2809577409
    getTopSongs: {
        method: 'get',
        url:'/playlist/detail'
    },

    //歌手列表
    getSingList: {
        method: 'get',
        url:'/top/artists'
    },

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
