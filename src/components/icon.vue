<template>
  <i v-if="src" class="icon" v-html="src" />
</template>
<script>
import icons from '../assets/helpers/icon'
export default {
  props: {
    name: { type: String, default: '' },
    color: {
      type: String,
      default: '#4C6FFF',
    },
  },
  computed: {
    src() {
      if (this.name) {
        return icons[this.name]
      }
      return ''
    },
  },
  mounted() {
    if (this.color) {
      this.$el.firstElementChild.querySelectorAll('path')?.forEach((item) => {
        if ([...item.attributes].find((attr) => attr.localName === 'stroke')) {
          item.attributes.stroke.value = this.color
        }
        if ([...item.attributes].find((attr) => attr.localName === 'fill')) {
          item.attributes.fill.value = this.color
        }
      })
    }
  },
}
</script>

<style lang="scss">
.icon {
  display: inline-flex;
}
</style>
