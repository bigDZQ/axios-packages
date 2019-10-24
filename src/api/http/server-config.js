import axios from 'axios'

const server = axios.create({
  baseURL: '/api', // 如果存在多个ip 则可以不写死，使用变量
  timeout: 5000
})

// 可以获取token等动作

server.interceptors.request.use(
  config => {
    // 可以手动配置 header信息，或者查看是否存在用户信息，则可以重定向等等操作
    // 一定要返回config
    return config
  }
)

server.interceptors.response.use(
  // 可以做一些错误拦截
  res => {
    console.log(res)
    return res
  }, error => {
    console.log(error)
    // return { code: 500, msg: '请求出错' }
  }
)

export default server
