import RouterView from '@/views/Layouts/RouterView'

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      menu: {
        path: 'Home',
        text: '首页'
      }
    },
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
  },
  {
    path: '/componnets',
    name: 'Componnets',
    meta: {
      menu: {
        text: '组件'
      }
    },
    component: RouterView,
    children: [
      {
        path: 'layout',
        name: 'Layout',
        meta: {
          menu: {
            path: 'Layout',
            text: 'Layout 布局'
          }
        },
        component: () =>
          import(/* webpackChunkName: "Layout" */ '@/views/Components/Layout')
      },
      {
        path: 'container',
        name: 'Container',
        meta: {
          menu: {
            path: 'Container',
            text: 'Container 布局容器'
          }
        },
        component: () =>
          import(
            /* webpackChunkName: "Container" */ '@/views/Components/Container'
          )
      },
      {
        path: 'icon',
        name: 'Icon',
        meta: {
          menu: {
            path: 'Icon',
            text: 'Icon 图标'
          }
        },
        component: () =>
          import(/* webpackChunkName: "Icon" */ '@/views/Components/Icon')
      },
      {
        path: 'button',
        name: 'Button',
        meta: {
          menu: {
            path: 'Button',
            text: 'Button 按钮'
          }
        },
        component: () =>
          import(/* webpackChunkName: "Button" */ '@/views/Components/Button')
      },
      {
        path: 'link',
        name: 'Link',
        meta: {
          menu: {
            path: 'Link',
            text: 'Link 文字链接'
          }
        },
        component: () =>
          import(/* webpackChunkName: "Link" */ '@/views/Components/Link')
      },
      {
        path: 'input',
        name: 'Input',
        meta: {
          menu: {
            path: 'Input',
            text: 'Input 输入框'
          }
        },
        component: () =>
          import(/* webpackChunkName: "Input" */ '@/views/Components/Input')
      },
      {
        path: 'message',
        name: 'Message',
        meta: {
          menu: {
            path: 'Message',
            text: 'Message'
          }
        },
        component: () =>
          import(/* webpackChunkName: "Message" */ '@/views/Components/Message')
      }
    ]
  }
]

// 获取菜单信息
const getMenuInfo = menu => {
  const menuMeta = menu?.meta?.menu
  // isRender为false则不渲染
  if (menuMeta?.isRender === false) {
    return null
  }

  const info = {
    path: menuMeta?.path ?? menu.name,
    text: menuMeta?.text ?? menu.name
  }

  if (menu?.children) {
    const children = menu.children
      .map(child => getMenuInfo(child))
      .filter(child => child)

    if (children.length > 0) {
      info['children'] = children
    }
  }

  return info
}
// 获取渲染的菜单
export const getRenderMenu = () => {
  const menus = routes.map(route => getMenuInfo(route)).filter(menu => menu)

  return menus
}

export default routes
