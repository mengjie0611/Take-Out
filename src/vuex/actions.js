import { Toast, MessageBox } from 'mint-ui'
import {reqAddress,reqCategorys,reqShops} from '../api'
import {REQ_ADDRESS,REQ_CATEGORYS,REQ_SHOPS,SAVEUSER,SAVRTOKEN} from './mutations-types'
export default{
  async getAddress({commit,state}){
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if(result.code == 0){
     const address = result.data
      commit(REQ_ADDRESS,address)
    }
  },
  async getCategorys ({commit}) {
    const result = await reqCategorys()
    if (result.code===0) {
      const categorys = result.data
      commit(REQ_CATEGORYS, categorys)
    }
  },
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if (result.code===0) {
      const shops = result.data
      commit(REQ_SHOPS, shops)
    }
  },
  saveUser ({commit}, user) {
    const token = user.token
    localStorage.setItem('token_key', token)
    delete user.token  
    commit(SAVEUSER, {user})
    commit(SAVRTOKEN, {token})
  },
  async autoLogin ({commit, state}) {

    if (state.token && !state.user._id) { // 必须要有token且没有user信息
      // 发送自动登陆的请求
      const result = await reqAutoLogin()
      if (result.code===0) {
        const user = result.data  // 没有token
        commit(RECEIVE_USER, {user})
      }
    }
    
  },

  logout ({commit}) {
    localStorage.removeItem('token_key')
    commit(RESET_USER)
    commit(RESET_TOKEN)
  }
}