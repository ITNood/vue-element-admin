<template>
  <div>
    <el-table
      :data="dataInterface"
      border
    >
      <el-table-column
        align="center"
        type="index"
        label="序号"
      ></el-table-column>
      <el-table-column
        align="center"
        label="接口地址"
        prop="url"
      ></el-table-column>
      <el-table-column
        align="center"
        label="名称"
        prop="name"
      ></el-table-column>
      <el-table-column
        align="center"
        label="参数"
        prop="prams"
      ></el-table-column>
      <el-table-column
        align="center"
        label="请求方式"
        prop="request"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.$index,scope.row)">修改</el-button>
          <el-button @click="dete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Tabel",
  data() {
    return {
      dataInterface: [
        {
          url: "/user/login",
          name: "登录",
          prams: "username password (token)",
          request: "post",
          id:'01'
        },
        {
          url: "/user/loginout",
          name: "退出登录",
          prams: "Not",
          request: "post",
          id:'02'
        }
      ]
    };
  },
  methods:{
    edit(index,row){
      console.log(index,row)
    },
    dete(index,row){
      console.log(index,row)
    }
  }
};
</script>

<style scoped>
</style>
