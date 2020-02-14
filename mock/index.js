const Mock = require('mockjs')

const Random = Mock.Random
const mock = Mock.mock

const proxy = {
  'GET /api/user/list': mock({
    'array|3': [
      {
        id: 1,
        username: 'kenny',
        sex: 'male'
      }
    ]
  }),
  'POST /api/login/account': (req, res) => {
    return res.json({
      status: 'ok',
      data: {
        id: Random.id(),
        userName: Random.cname(),
        city: Random.city()
      }
    })
  }
}

module.exports = proxy