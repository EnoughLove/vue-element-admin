<template>
  <div ref="dom" :style="{'height': height}"></div>
</template>

<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
import { on, off } from '@/util/tools'

echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'charts',
  props: {
    option: Object,
    height: {
      type: String,
      default: '500px'
    }
  },
  data() {
    return {
      dom: null
    }
  },
  methods: {
    resize() {
      this.dom.resize()
    },
    initData() {
      var t = this
      this.$nextTick(() => {
        this.dom = echarts.init(this.$refs.dom, 'tdTheme')
        this.dom.setOption(t.option)
        on(window, 'resize', this.resize)
      })
    }
  },
  watch: {
    option: {
      handler() {
        // 监听获取ajax数据
        this.initData()
      },
      // 监听到数据变化时立即调用
      immediate: true
    }
  },
  beforeDestroy() {
    off(window, 'resize', this.resize)
  }
}
</script>
<style lang="stylus">
</style>
