<template>
  <el-header>
    <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleAside"></i>
    <i :class="[rotate?'go':'']" class="el-icon-refresh-right refresh" @click="refresh"></i>

    <div class="top-right">
      <i class="el-icon-full-screen fullscreen" @click="fullScreen"></i>
      <el-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        class="head"
        fit="fill"></el-image>
      <el-dropdown class="dropdown" trigger="hover">
        <span class="el-dropdown-link">
          {{username}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="goUser">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="goChangePass">修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
import { delStorage, getStorage } from '@/util/util'

export default {
  inject: ['reload'],
  data () {
    return {
      rotate: false,
      fullscreen: false,
      username: ''
    }
  },
  props: [
    'isCollapse'
  ],
  methods: {
    toggleAside () {
      this.$emit('handelCollapse', !this.isCollapse)
    },
    goUser () {
      this.$router.push({ path: '/user' })
    },
    goChangePass () {
      this.$router.push({ path: '/changepass' })
    },
    logout () {
      delStorage('token')
      this.$store.commit('SET_TOKEN', '')
      this.$router.push({ path: '/login' })
    },
    refresh () {
      const that = this
      that.rotate = true
      setTimeout(function () {
        that.reload()
      }, 500)
    },
    fullScreen () {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  },
  mounted() {
    this.username = JSON.parse(getStorage('user')).name
  }
}
</script>
<style scoped lang="stylus">
  .el-header
    background-color: #fff
    color: #333
    line-height: 60px
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
    .top-right
      float: right
      display: flex
      align-items: center
      .fullscreen
        margin-right: 15px
    .head
      width: 30px
      height: 30px
      margin-right: 10px
      border-radius: 100%
    .refresh
      margin-left: 20px
    .el-dropdown-link
      cursor: pointer
  .go
    transform:rotate(360deg);
    transition: all .5s;
</style>
