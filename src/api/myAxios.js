import Axios from 'axios'

const instance = Axios.create({
  baseURL:'/api',
  timeout:20000
})

instance.interceptors.request.use((config)=>{
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

instance.interceptors.response.use(
  (response)=>{
    console.log(response)
   return response.data
  },
  (error)=>{
    alert('请求错误',error.message)
    return new Promise(() => {})
  }
)
export default instance