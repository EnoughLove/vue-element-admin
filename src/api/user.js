import http from '@/util/axios'
export const login = (params) => {
  return http.post({
    url: 'user/login'
  })
}
export const getUserInfo = () => {
  return http.post({
    url: 'user/getList'
  })
}
