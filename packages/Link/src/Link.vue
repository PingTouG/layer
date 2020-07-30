<template>
  <a
    class="c-link"
    :class="[
      `c-link--${type}`,
      { 'is-disabled': disabled },
      { 'is-underline': !underline }
    ]"
    :href="href"
    :target="target"
  >
    <c-icon :name="icon" v-if="icon" />
    <span class="c-link__text">
      <slot />
    </span>
  </a>
</template>

<script>
import CIcon from '../../Icon'

export default {
  name: 'CLink',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value =>
        ['default', 'primary', 'success', 'warning', 'danger', 'info'].indexOf(
          value
        ) !== -1
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: String,
    icon: String,
    target: String
  },
  components: {
    CIcon
  }
}
</script>

<style lang="scss">
@import '../../styles/variables';
@import '../../styles/mixin';

.c-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: $main-color;

  &:hover {
    color: $primary;
    text-decoration: underline;
  }

  @include is-disabled($main-color, link);

  &.is-underline,
  &.is-underline:hover {
    text-decoration: none;
  }

  @each $type,
    $color
      in (
        (primary, $primary),
        (success, $success),
        (warning, $warning),
        (danger, $danger),
        (info, $info)
      )
  {
    &--#{$type} {
      color: $color;

      &:hover {
        color: rgba($color, 0.8);
      }

      @include is-disabled($color, link);
    }
  }
}
</style>
