<template>
  <div
    class="c-textarea"
    :class="[{ 'is-disabled': disabled }]"
    v-if="type === 'textarea'"
    @mouseenter="focused = true"
    @mouseleave="focused = false"
  >
    <textarea
      class="c-textarea__inner"
      ref="textarea"
      v-bind="$attrs"
      :value="vModel"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <span class="c-textarea__suffix" v-if="isRenderSuffix">
      <span class="c-textarea__suffix-inner" v-show="isShowSuffix">
        <span
          class="c-textareat__count"
          v-if="showWordLimit && $attrs.maxlength"
        >
          <span class="c-textarea__count-now">{{ vModel.length }}</span>
          <span class="c-textarea__count-max" v-if="$attrs.maxlength"
            >/ {{ $attrs.maxlength }}</span
          >
        </span>
      </span>
    </span>
  </div>
  <div
    class="c-input"
    :class="[
      { 'is-disabled': disabled },
      { 'c-input--prefix': isRenderPrefix },
      size ? `c-input--${size}` : ''
    ]"
    @mouseenter="focused = true"
    @mouseleave="focused = false"
    v-else
  >
    <span class="c-input__prefix" v-if="isRenderPrefix">
      <span class="c-input__prefix-inner">
        <i :class="`iconfont icon-${prefixIcon} c-input__prefix-icon`" />
      </span>
    </span>
    <input
      class="c-input__inner"
      v-bind="$attrs"
      :style="suffixInnerPaddingRight"
      :type="nativeType"
      :value="vModel"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <span class="c-input__suffix" v-if="isRenderSuffix">
      <span class="c-input__suffix-inner" v-show="isShowSuffix">
        <i
          class="iconfont icon-close-circle c-input__clear"
          @click="handleClear"
          v-if="clearable"
          v-show="vModel"
        />
        <i
          class="iconfont icon-browse c-input__show-password"
          v-if="showPassword"
          v-show="isShowShowPasswordIcon"
          @click="handleToggleShowPassword"
        />
        <i
          class="iconfont icon-notvisible c-input__show-password"
          v-if="showPassword"
          v-show="!isShowShowPasswordIcon"
          @click="handleToggleShowPassword"
        />
        <span class="c-input__count" v-if="showWordLimit && $attrs.maxlength">
          <span class="c-input__count-now">{{ vModel.length }}</span>
          <span class="c-input__count-max" v-if="$attrs.maxlength"
            >/ {{ $attrs.maxlength }}</span
          >
        </span>
        <i
          :class="`iconfont icon-${suffixIcon} c-input__suffix-icon`"
          v-if="suffixIcon"
        />
      </span>
    </span>
  </div>
</template>

<script>
import { throttle } from '../../utils/tools'
import { ref, computed } from 'vue'

export default {
  name: 'CInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: [String, Number],
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: value => ['medium', 'small', 'mini'].indexOf(value) !== -1
    },
    disabled: Boolean,
    autocomplete: {
      type: String,
      default: 'off',
      validator: value => ['on', 'off'].indexOf(value) !== -1
    },
    suffixIcon: String,
    prefixIcon: String
  },
  setup(props, { attrs, emit }) {
    const vModel = ref(props.modelValue ?? '')
    const focused = ref(false)
    const hovering = ref(false)
    const isShowPassowrd = ref(false)
    const nativeType = ref(props.type)
    const autoScrollTop =
      props.type === 'textarea'
        ? throttle(() => {
            this.$refs['textarea'].scrollTop = this.$refs[
              'textarea'
            ].scrollHeight
          }, 200)
        : null

    const isRenderSuffix = computed(() => {
      return (
        !props.disabled &&
        (props.clearable ||
          props.showPassword ||
          props.showWordLimit ||
          props.suffixIcon)
      )
    })
    const isRenderPrefix = computed(
      () => props.prefixIcon && props.type === 'text'
    )
    const isShowSuffix = computed(
      () => props.suffixIcon || focused.value || hovering.value
    )
    const isShowShowPasswordIcon = computed(
      () => props.type === 'password' && isShowPassowrd.value
    )
    const suffixInnerPaddingRight = computed(() => {
      let right = 5

      if (props.clearable) {
        right += 20
      }

      if (props.showPassword) {
        right += 20
      }

      if (props.showWordLimit) {
        right += 50
      }

      if (attrs.maxlength > 99) {
        right += 15
      }

      if (vModel.value.length > 99) {
        right += 5
      }

      if (props.suffixIcon) {
        right += 20
      }

      return {
        'padding-right': `${right}px`
      }
    })

    const handleInput = e => {
      if (autoScrollTop) {
        autoScrollTop()
      }
      vModel.value = e.target.value
      emit('update:modelValue', e.target.value)
    }
    const handleChange = e => emit('change', e.target.value)
    const handleClear = () => {
      vModel.value = ''
      emit('input', '')
      emit('clear')
    }
    const handleToggleShowPassword = () => {
      isShowPassowrd.value = !isShowPassowrd.value
      nativeType.value = isShowPassowrd.value ? 'text' : 'password'
    }
    const handleFocus = () => {
      hovering.value = true
      emit('focus')
    }
    const handleBlur = () => {
      hovering.value = false
      emit('blur')
    }

    return {
      vModel,
      focused,
      hovering,
      isShowPassowrd,
      nativeType,

      isRenderSuffix,
      isRenderPrefix,
      isShowSuffix,
      isShowShowPasswordIcon,
      suffixInnerPaddingRight,

      handleInput,
      handleChange,
      handleClear,
      handleToggleShowPassword,
      handleFocus,
      handleBlur
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin';
$height: 40px;

.c-input {
  @include input(40px, 0, 15px);

  &--medium &__inner {
    @include input-size(#{$height - 4});
  }

  &--small &__inner {
    @include input-size(#{$height - 4 * 2});
  }

  &--mini &__inner {
    @include input-size(#{$height - 4 * 3});
  }
}

.c-textarea {
  @include input(auto, 5px, 5px, 15px, 5px, textarea);
}
</style>
