import { commonPost } from './base'
export function search (params) {
  return commonPost(`search`, {
    ...params
  })
}
