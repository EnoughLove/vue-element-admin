import Cookies from 'js-cookie'

export const setStorage = (key, value) => {
  Cookies.set(key, value, { expires: 1 })
}

export const getStorage = (value) => {
  const values = Cookies.get(value)
  if (values) return values
  else return false
}

export const delStorage = (value) => {
  Cookies.remove(value)
}
