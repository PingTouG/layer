import Mock from 'mockjs'
import { userSetup } from './modules'

export default function install() {
  Mock.setup({
    timeout: '100-6000'
  })

  userSetup()
}
