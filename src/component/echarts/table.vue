<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tabelData"
      @selection-change="handleChange"
      border
      style="margin-top:30px; box-shadow: 0 0 5px rgba(48, 65, 86, 0.3);"
    >
      <el-table-column
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        label="日期"
        prop="date"
        align="center"
      ></el-table-column>
      <el-table-column
        label="姓名"
        prop="name"
        align="center"
      ></el-table-column>
      <el-table-column
        label="地址"
        prop="address"
        align="center"
      ></el-table-column>
    </el-table>
    <el-button
      type="danger"
      style="margin:15px 0"
      @click="dete"
    >删除</el-button>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      selected: [],
      ids:[],
      tabelData: [
        {
          date: "2019-12-05",
          name: "张三",
          address: "深圳市福田区沙头街道沙尾西村9巷24号",
          id: 1
        },
        {
          date: "2019-12-05",
          name: "张三",
          address: "深圳市福田区沙头街道沙尾西村9巷24号",
          id: 2
        },
        {
          date: "2019-12-05",
          name: "张三",
          address: "深圳市福田区沙头街道沙尾西村9巷24号",
          id: 3
        }
      ]
    };
  },
  methods: {
    handleChange(val) {
      this.multipleSelection = val;
      console.log(val);
      this.selected=val
    },
    dete() {
        this.selected.map(item=>{
            //console.log(item.id)
             this.ids.push(item.id)
             console.log(this.ids)
        })
    }
  }
};
</script>

<style scoped>
</style>
