<template>
  <div>
    <z-title title="用户列表"/>
    <z-table
      :tableData="tableData"
      :columns="columns"
      @handleSelectionChange="handleSelectionChange"
      @rowClick="rowClick"
      @handleClick="handleClick"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      :total="total"
      :pageSize="pageSize"
     />
  </div>
</template>
<script>
import zTitle from '@c/page-title/page-title'
import zTable from '@/components/tables/tables.vue'
export default {
  components: {
    zTitle,
    zTable
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-01',
          name: '王小虎1',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎2',
          province: '北京',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎3',
          province: '西安',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎4',
          province: '深圳',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      columns: [
        {
          type: 'selection',
          fixed: 'left',
          width: '55'
        },
        {
          label: '日期',
          width: '150',
          prop: 'date',
          sortable: true
        },
        {
          label: '姓名',
          width: '120',
          prop: 'name'
        },
        {
          label: '省份',
          width: '120',
          prop: 'province'
        },
        {
          label: '市区',
          width: '120',
          prop: 'city'
        },
        {
          label: '地址',
          width: '300',
          prop: 'address'
        },
        {
          label: '邮编',
          width: '120',
          prop: 'zip'
        },
        {
          type: 'text',
          label: '跳转',
          fixed: false,
          prop: 'text',
          list: [{ id: 'jump', name: '跳转', type: 'text' }]
        },
        {
          type: 'button',
          label: '操作',
          fixed: 'right',
          width: '200',
          align: 'center',
          list: [
            {
              id: 'edit',
              name: '编辑',
              type: ''
            },
            {
              id: 'del',
              name: '删除',
              type: 'danger'
            }
          ]
        }
      ],
      total: 10,
      pageSize: 1
    }
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val)
    },
    rowClick(val) {
      console.log(val)
    },
    handleClick(val) {
      console.log(val)
    },
    handleSizeChange(val) {
      console.log(val)
    },
    handleCurrentChange(val) {
      console.log(val)
    }
  },
  created() {
  }
}
</script>
