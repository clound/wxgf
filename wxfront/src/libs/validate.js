/* 手机号 */
export function validatePhone (str) {
  const reg = /^1[1-9][0-9]{9}$/
  return reg.test(str)
}
