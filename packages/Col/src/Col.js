import '../../styles/col.scss'
import { computed, h, inject } from 'vue'

export default {
  name: 'CCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24,
      validator: value => value % 1 === 0 && value > 0 && value <= 24
    },
    offset: {
      type: Number,
      default: 0,
      validator: value => value % 1 === 0 && value >= 0 && value <= 24
    },
    push: {
      type: Number,
      default: 0,
      validator: value => value % 1 === 0 && value >= 0 && value <= 24
    },
    pull: {
      type: Number,
      default: 0,
      validator: value => value % 1 === 0 && value >= 0 && value <= 24
    }
  },
  setup(props, { slots }) {
    const gutter = inject('gutter')

    const spanClass = computed(() =>
      props.span !== 24 ? `c-col-span-${props.span}` : ''
    )

    const style = computed(() => {
      const style = {}

      if (gutter) {
        style.paddingRight = style.paddingLeft = `${gutter / 2}px`
      }

      return style
    })
    const offsetClass = computed(() => {
      return props.offset ? `c-col-offset-${props.offset}` : ''
    })
    const pushClass = computed(() => {
      return props.push ? `c-col-push-${props.push}` : ''
    })
    const pullClass = computed(() => {
      return props.pull ? `c-col-pull-${props.pull}` : ''
    })

    return () =>
      h(
        props.tag,
        {
          class: [
            'c-col',
            spanClass.value,
            offsetClass.value,
            pushClass.value,
            pullClass.value
          ],
          style: style.value
        },
        slots.default()
      )
  }
}
