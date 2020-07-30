import Mock from 'mockjs'

export default function setup() {
  Mock.mock('/api/login', ({ body }) => {
    const { username, password } = JSON.parse(body)
    if (username === 'admin' && password === 'admin') {
      return {
        code: 200,
        data: {
          userInfo: {
            name: 'admins',
            avatar: 'https://avatars0.githubusercontent.com/u/56482447'
          },
          token: Mock.mock('@string("upper",100)')
        }
      }
    } else {
      return {
        code: 500,
        message: '账号或密码错误'
      }
    }
  })
}
