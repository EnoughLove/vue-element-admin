const Mock = require('mockjs')
const login = {
  status: 200,
  message: 'success',
  data: {
    name: '@cname',
    id: '@guid',
    token: Mock.Random.string('lower', 32)
  }
}
const userList = {
  status: 200,
  message: 'success',
  data: {
    total: 100,
    'list|10': [{
      id: '@guid',
      name: '@cname',
      'age|20-30': 23,
      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
    }]
  }
}
export default {
  'post|user/login': login,
  'post|user/getList': userList
}
