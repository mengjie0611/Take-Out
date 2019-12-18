
import {REQ_ADDRESS,REQ_CATEGORYS,REQ_SHOPS,SAVEUSER,SAVRTOKEN,RESET_TOKEN,RESET_USER,SAVEGOOS,SAVEINFO,SAVERATINGS} from './mutations-types'
export default{
  [REQ_ADDRESS](state,address){
    state.address = address
  },
  [REQ_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [REQ_SHOPS] (state, shops) {
    state.shops = shops
  },
  [SAVRTOKEN] (state, {token}) {
    state.token = token
  },
  [SAVEUSER] (state, {user}) {
    state.user = user
  },
  [RESET_TOKEN] (state) {
    state.token = ''
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  [SAVEGOOS] (state,{goods}) {
    state.goods = goods
  },
  [SAVERATINGS] (state,{ratings}) {
    state.ratings = ratings
  },
  [SAVEINFO] (state,{info}) {
    state.info = info
  },
}