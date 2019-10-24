import server from './server-config'

function request (url, method, params = {}) {
  return new Promise((resolve, reject) => {
    method = method.toLowerCase()
    let _params = method === 'get' ? { params } : params
    console.log(url)
    server[method](url, _params).then(res => {
      resolve(res.data)
    }).catch(e => {
      reject(e)
    })
  })
}
export default request
