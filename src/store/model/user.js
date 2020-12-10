import { login, getUserInfo } from '@/api/user'
import { setStorage, getStorage } from '@/util/util'

const user = {
  state: {
    token: getStorage('token') || ''
  },
  mutations: {
    SET_TOKEN (state, token) {
      setStorage('token', token)
      state.token = token
    }
  },
  getters: {
    token: state => {
      return state.token
    }
  },
  actions: {
    login ({ commit }, params) {
      return new Promise((resolve, reject) => {
        login(params).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getUserInfo ({ commit }, params) {
      return new Promise((resolve, reject) => {
        getUserInfo(params).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default user
