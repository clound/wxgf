import { commonPost } from './base'
export function signup (params) {
  return commonPost(`signup`, {
    ...params
  })
}
