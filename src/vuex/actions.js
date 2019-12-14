import {reqAddress,reqCategorys,reqShops} from '../api'
import {REQ_ADDRESS,REQ_CATEGORYS,REQ_SHOPS} from './mutations-types'
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
  }

}