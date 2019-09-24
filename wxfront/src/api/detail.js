import { commonPost } from './base'
export function getdetailList (params) {
  return commonPost(`detail`, {
    ...params
  })
}
