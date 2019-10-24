import http from './http/http'

// 动态获取url 下面的文件信息

const context = require.context('@/api/url/', true, /\.js$/)

const urlObj = {} // 所有接口集合
const methodForm = {} // 所有接口转换为方法集合
console.log(http)
context.keys().forEach(element => {
  console.log(element) // ./user.js  ./product.js
  let name = element.split('/')[1].split('.')[0]
  Object.assign(urlObj, require(`@/api/url/${name}`))
})

for (let key in urlObj) {
  let item = urlObj[key]
  Object.assign(methodForm, { [key]: (params = {}) => {
    return http(item.url, item.method, params)
  } })
}
/**  {
 *      login:function(params){
 *          .........
 *      }
 *     }
 *
 */

export default methodForm
