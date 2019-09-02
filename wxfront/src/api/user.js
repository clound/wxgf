import { commonGet, commonPost } from './base'
export function signup (params) {
  return commonPost(`signup`, {
    ...params
  })
}
export function getcode (params) {
  return commonGet(`signup/getcap`)
}
export function getPhoneCode (params) {
  return commonPost(`signup/getphonecode`, {
    ...params
  })
}
