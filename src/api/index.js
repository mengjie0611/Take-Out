import axios from './myAxios'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude, latitude)=>  axios(`/position/${latitude},${longitude}`) 
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = ()=>  axios('/index_category') 
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = ({longitude, latitude})=> axios('/shops', {params: {longitude, latitude}})
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
// [5、获取一次性验证码](#5获取一次性验证码)<br/>
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
// export const reqPwdLogin = ({name,pwd,captcha}) => axios.post('/login_pwd', {name,pwd,captcha})
// // [7、发送短信验证码](#7发送短信验证码)<br/>
// export const reqSendCode = ({phone}) => axios.get('/sendcode', {params: {phone}})
// // [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
// export const reqSmsLogin = ({phone, code}) => axios.post('/login_sms', {phone, code})
// // [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
// // [10、用户登出](#10用户登出)<br/>
// 4. 发送短信验证码
export const reqSendCode = (phone) => axios.get('/sendcode', {
  // url: '/sendcode',
  params: {
    phone
  }
})

// 5.用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => axios.post('/login_pwd', {name, pwd, captcha})

// 6. 手机号验证码登陆
export const reqSmsLogin = ({phone, code}) => axios.post('/login_sms', {phone, code})

// 7. 自动登陆
export const reqAutoLogin = () => axios.get('/auto_login')