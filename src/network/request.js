import axios from 'axios'



export function request(config) {
  const instance = axios.create({
    // baseURL:'http://www.blogry.cn/test/',
    baseURL:'http://123.207.32.32:8000/',
    timeout:5000
  })


  axios.interceptors.request.use(config => {
    console.log(config);
    // return config
  }, err => {
    console.log(err)
  })

  //axios设置响应拦截器
  axios.interceptors.response.use(response => {
    return  response.data //拦截处理响应结果，直接返回需要的数据
  }, err => {
    console.log(err)
  })


  return instance(config)

}

