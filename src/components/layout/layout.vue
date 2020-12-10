<template>
  <el-container style="height: 100%">

    <el-aside :width="isCollapse ? '64px' : '200px'">
      <div class="aside">
        <z-aside :isCollapse="isCollapse"></z-aside>
      </div>
    </el-aside>

    <el-container class="is-vertical">

      <z-header :isCollapse="isCollapse" @handelCollapse="handelCollapse"></z-header>

      <el-main>
        <div class="main">
          <router-view />
        </div>
      </el-main>

    </el-container>

  </el-container>
</template>
<script>
import zAside from './components/aside/aside'
import zHeader from './components/header/header'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handelCollapse (val) {
      this.isCollapse = val
    }
  },
  components: {
    zAside,
    zHeader
  }
}
</script>
<style scoped lang="stylus">
  .el-aside
    color: #333
    overflow: hidden
    background-color: #20222A
    .aside
      overflow-y: scroll
      margin-right: -17px
      height: 100%
  .el-main
    background-color: #F2F2F2
    padding: 15px
    .main
      padding: 10px 20px
      background-color: #ffffff
</style>
