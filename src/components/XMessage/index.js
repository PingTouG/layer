const defaultClass = 'x-message'
const fadeInDownClass = `${defaultClass}__fade-in-down`
const fadeInUpClass = `${defaultClass}__fade-out-up`

// 最底部元素
let bottomMessage = null

// 创建message元素
function create(options) {
  const instance = window.document.createElement('div')
  instance.className = defaultClass
  instance.innerText = options?.message ?? options ?? ''
  document.querySelector('body').appendChild(instance)

  return instance
}

// 设置多个message的top偏移
function setOffsetTop(instance) {
  let messageList = document.querySelectorAll(`.${defaultClass}`)
  const count = messageList.length
  if (count > 1) {
    bottomMessage = messageList[count - 2]
    const top = bottomMessage.offsetTop + bottomMessage.offsetHeight + 10
    instance.style.top = `${top}px`
  }
}

// 合并配置
function setOptions(instance, options) {
  instance.classList.add(
    options?.type ? `${defaultClass}--${options.type}` : ''
  )
}

// 打开message
function open(options) {
  if (options instanceof Object) {
    if (options?.length !== undefined) {
      throw new Error(`期望参数是Object类型或String类型，得到的是Array`)
    }
  }

  const instance = create(options)

  // 显示message
  instance.classList.add(fadeInDownClass)
  instance.style.display = 'block'
  instance.style.left = `${document.body.clientWidth / 2 -
    instance.offsetWidth / 2}px`

  setOffsetTop(instance)

  if (options.constructor === Object) {
    setOptions(instance, options)
  }

  setTimeout(() => {
    close(instance)
  }, 3000)
}

// 关闭message
function close(instance) {
  if (instance) {
    // css动画结束处理
    const animationendEvent = () => instance.remove()

    instance.classList.remove(fadeInDownClass)
    instance.classList.add(fadeInUpClass)
    instance.addEventListener('webkitAnimationEnd', animationendEvent)
    instance.addEventListener('mozAnimationEnd', animationendEvent)
    instance.addEventListener('MSAnimationEnd', animationendEvent)
    instance.addEventListener('oanimationend', animationendEvent)
    instance.addEventListener('animationend', animationendEvent)
  }
}

export default function useMessage() {
  return {
    open
  }
}
