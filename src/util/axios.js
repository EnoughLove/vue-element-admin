import axios from 'axios'
import { Notification } from 'element-ui'
import config from '@/config'
import NProgress from 'nprogress'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      header: ''
    }
    return config
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      NProgress.start()
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(response => {
      NProgress.done()
      if (response.status === 200) {
        return Promise.resolve(response.data)
      } else {
        return Promise.reject(response.data)
      }
    }, (error) => {
      switch (error.response.status) {
        case 302:
          Notification.error({
            title: '提示',
            message: '重定向',
            showClose: false
          })
          break
        case 400:
          Notification.error({
            title: '提示',
            message: '错误请求',
            showClose: false
          })
          break
        case 403:
          Notification.error({
            title: '提示',
            message: '拒绝访问',
            showClose: false
          })
          break
        case 404:
          Notification.error({
            title: '提示',
            message: '请求错误,未找到该资源',
            showClose: false
          })
          break
        case 500:
          Notification.error({
            title: '提示',
            message: '服务器错误',
            showClose: false
          })
          break
        default:
          break
      }
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

  fetch (options) {
    const instance = axios.create()
    options.method = 'get'
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

  post (options) {
    const instance = axios.create()
    options.method = 'post'
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

  put (options) {
    const instance = axios.create()
    options.method = 'put'
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

  del (options) {
    const instance = axios.create()
    options.method = 'delete'
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
const axiosObj = new HttpRequest(baseUrl)
export default axiosObj
