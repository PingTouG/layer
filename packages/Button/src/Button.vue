<template>
  <button
    class="c-button"
    :class="[
      type ? `c-button--${type}` : '',
      size ? `c-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled || loading,
        'is-block': block
      }
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span class="c-button-loading" v-if="loading" />
    <i :class="`iconfont icon-${icon}`" v-if="icon" />
    <template v-if="!circle">
      <span class="c-button__text" v-if="!$slots.default">{{ text }}</span>
      <slot />
    </template>
  </button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    text: String,
    type: {
      type: String,
      validator: value =>
        ['primary', 'success', 'info', 'warning', 'danger', 'text'].indexOf(
          value
        ) !== -1
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: String,
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: value => ['medium', 'small', 'mini'].indexOf(value) !== -1
    },
    loading: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const handleClick = e => {
      emit('click', e)
    }

    return {
      handleClick
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/variables';
@import '../../styles/mixin';

.c-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid $border-color-lv1;
  color: $content-color;
  background: $white-color;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-size: 14px;
  border-radius: 4px;
  @include button-size;

  &__text {
    vertical-align: text-top;
  }

  &:hover {
    color: $primary;
    background-color: rgba($primary, 0.1);
    border-color: rgba($primary, 0.2);
  }

  &.is-plain:hover {
    color: $primary;
    border-color: $primary;
    background-color: $white-color;
  }

  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;

    &:hover {
      color: #c0c4cc;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }

  &.is-round {
    border-radius: 20px;
  }

  &.is-block {
    width: 100%;
  }

  @include is-circle();

  &--primary {
    @include button($primary);
    @include is-plain($primary);
    @include is-disabled($primary, button);
  }

  &--success {
    @include button($success);
    @include is-plain($success);
    @include is-disabled($success, button);
  }

  &--info {
    @include button($info);
    @include is-plain($info);
    @include is-disabled($info, button);
  }

  &--warning {
    @include button($warning);
    @include is-plain($warning);
    @include is-disabled($warning, button);
  }

  &--danger {
    @include button($danger);
    @include is-plain($danger);
    @include is-disabled($danger, button);
  }

  &--text {
    color: $primary;
    background-color: transparent;
    border-color: transparent;

    &:hover {
      color: $primary;
      background-color: transparent;
      border-color: transparent;
    }

    &.is-disabled {
      cursor: not-allowed;
      color: #c0c4cc;
      background-color: transparent;
      border-color: transparent;

      &:hover {
        color: #c0c4cc;
        background-color: transparent;
        border-color: transparent;
      }
    }
  }

  &-loading {
    animation: rotating 2s linear infinite;

    &::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
      color: $white-color;
      border: 1px solid $white-color;
      border-radius: 50%;
      vertical-align: -10%;
      clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%);
      animation: rotating 1s linear infinite;
    }
  }

  &--medium {
    @include button-size(10px);
  }

  &--small {
    @include button-size(9px, 15px);
  }

  &--mini {
    @include button-size(7px, 15px);
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
