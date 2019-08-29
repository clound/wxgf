import request from '@/libs/request'
// 公共post请求方法
export function commonPost (url, data) {
  return request({
    url,
    method: 'post',
    data
  })
}
// 公共get请求方法
export function commonGet (url, data) {
  return request({
    url,
    method: 'get',
    params: data
  })
}
// 公共put请求方法
export function commonPut (url, data) {
  return request({
    url,
    method: 'put',
    data
  })
}

// 公共delete请求方法
export function commonDel (url, data) {
  return request({
    url,
    method: 'delete',
    params: data
  })
}
