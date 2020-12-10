<template>
  <div class="widget-head">
    <div class="widget-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'page-title',
  props: {
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
  .widget-head
    padding: 12px 20px
    border-bottom: 1px solid #eef1f5
    margin-top: 10px
    margin-bottom: 20px
    .widget-title
      position: relative
      &:before
        content: ''
        position: absolute
        width: 4px
        height: 14px
        background: #00aeff
        top: 5px
        left: -12px
</style>
