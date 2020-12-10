<template>
  <div class="table">
    <el-table
      :data="tableData"
      :stripe="stripe"
      :border="border"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @row-click="rowClick"
      :header-row-class-name="tableRowClassName"
    >
      <template v-for="(item, index) of columns">
        <el-table-column
          v-if="item.type === 'button' || item.type === 'text'"
          :key="index"
          :fixed="item.fixed"
          :prop="item.type"
          :label="item.label"
          :align="item.align ? item.align : 'center'"
          :width="item.width"
          :sortable="item.sortable"
        >
          <!--if判断的是父组件传的表头是操作的id名-->
          <template slot-scope="scope">
            <el-button
              v-for="item2 in item.list"
              :key="item2.id"
              @click="handleClick(scope.row, item2.id)"
              size="mini"
              :type="item2.type"
            >{{ item2.name }}
            </el-button>
            <!--可以自行增加按钮，请改变点击事件的第二个参数，父组件会根据第二个参数判断当前点击的是什么按钮-->
          </template>
        </el-table-column>

        <el-table-column
          v-else
          :label="item.label"
          :key="index"
          :fixed="item.fixed"
          :prop="item.prop"
          :align="item.align ? item.align : 'center'"
          :width="item.width"
          :type="item.type"
          :sortable="item.sortable"
        >
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      // 表格数据源 默认为空数组
      type: Array,
      default: () => []
    },
    columns: {
      // 表格的字段展示 默认为空数组
      type: Array,
      default: () => []
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    // 正常
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', { val: val })
    },
    // 正常
    rowClick(row, column, event) {
      this.$emit('rowClick', { row: row, column: column, event: event })
    },
    // 操作
    handleClick(row, id) {
      this.$emit('handleClick', { row: row, id: id })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.$emit('handleCurrentChange', val)
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'warning-row'
      }
      return ''
    }
  }
}
</script>
<style lang="stylus">
  .el-pagination {
    margin-top: 10px;
  }

  // 修改table的表头的背景颜色；
  .warning-row .is-leaf {
    color: #1a68b5;
    background-color: #e3edf7 !important;
  }
</style>
