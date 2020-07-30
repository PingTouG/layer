import '../../styles/row.scss'
import { computed, h, provide } from 'vue'

export default {
  name: 'CRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      validator: value => value === 'flex'
    },
    justify: {
      type: String,
      default: 'start',
      validator: value =>
        ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(
          value
        ) !== -1
    },
    align: {
      type: String,
      default: 'top',
      validator: value => ['top', 'middle', 'bottom'].indexOf(value) !== -1
    }
  },
  setup(props, { slots }) {
    provide('gutter', props.gutter)
    const style = computed(() => {
      const style = {}

      // 此操作是因为col根据gutter设置padding，通过此操作矫正两边间距
      if (props.gutter) {
        style.marginRight = style.marginLeft = `-${props.gutter / 2}px`
      }

      return style
    })
    const typeClass = computed(() =>
      props.type === 'flex' ? `c-row--${props.type}` : ''
    )
    const justifyClass = computed(() =>
      props.justify !== 'start' ? `is-justify-${props.justify}` : ''
    )
    const alignClass = computed(() =>
      props.align !== 'top' ? `is-align-${props.align}` : ''
    )

    return () =>
      h(
        props.tag,
        {
          class: [
            'c-row',
            typeClass.value,
            justifyClass.value,
            alignClass.value
          ],
          style: style.value
        },
        slots.default()
      )
  }
}
