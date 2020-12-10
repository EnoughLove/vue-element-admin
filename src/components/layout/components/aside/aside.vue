<template>
  <el-menu :default-active="activeNav"
           class="el-menu-vertical"
           :collapse="isCollapse"
           :default-openeds="['1']"
           background-color="#20222A"
           text-color="#fff"
           ref="menu"
           router>
    <!--动态生成sideItem-->
    <template v-for="(item, parentIndex) in navList">
      <side-item :item="item" :index="parentIndex" :state="isCollapse" :key="parentIndex"></side-item>
    </template>
  </el-menu>
</template>
<script>
import sideItem from './sideItem'
export default {
  props: [
    'isCollapse'
  ],
  data () {
    return {
      navList: [
        {
          icon: 'el-icon-s-platform',
          title: '控制台',
          child: [
            {
              title: '主控制台',
              path: '/home'
            },
            {
              title: '个人档案',
              path: '/userlist'
            }
          ]
        },
        {
          icon: 'el-icon-setting',
          title: '基础设置',
          child: [
            {
              title: '设置导航',
              path: '/demo1'
            },
            {
              title: '设置个人信息',
              path: '/demo2'
            },
            {
              title: '404',
              path: '/404'
            }
          ]
        },
        {
          icon: 'el-icon-location',
          title: '文章分类',
          child: [
            {
              title: '富文本编辑器',
              path: '/quillEditor'
            },
            {
              title: '文章管理',
              path: '/articleManager'
            }
          ]
        },
        {
          icon: 'el-icon-chat-line-square',
          title: '留言管理',
          path: '/mail'
        },
        {
          icon: 'el-icon-coin',
          title: '基础演示',
          path: '/base',
          child: [
            {
              title: '滑块',
              path: '/slider'
            },
            {
              title: '文件上传',
              path: '/uploadFile'
            },
            {
              title: '卡片列表',
              path: '/cardList'
            },
            {
              title: '图片瀑布屏',
              path: '/waterfall'
            },
            {
              title: '步骤条（流程条）',
              path: '/steps'
            }
          ]
        },
        {
          icon: 'el-icon-error',
          title: '错误页面',
          path: '/error',
          child: [
            {
              title: '404页面',
              path: '/nofind'
            }
          ]
        }
      ]
    }
  },
  computed: {
    activeNav () {
      return this.$route.path
    }
  },
  components: {
    sideItem
  }
}
</script>
<style scoped lang="stylus">
  .el-menu
    border-right: 0
</style>
