import {REQ_ADDRESS,REQ_CATEGORYS,REQ_SHOPS} from './mutations-types'
export default{
  [REQ_ADDRESS](state,address){
    console.log(address)
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
}