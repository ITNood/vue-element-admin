<template>
  <div>
    <el-table
      :data="data"
      border
      size="small"
    >
      <el-table-column
        fixed
        type="index"
        label="ID"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="shopname"
        label="商品名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="quality"
        label="商品属性"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="stock"
        label="库存数量"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        align="center"
      ></el-table-column>
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <el-button @click="edit(scope.$index,scope.row)">编辑</el-button>
          <el-button
            type="danger"
            @click="dele(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="page"
    >
    </el-pagination>
    <!--编辑-->
    <el-dialog
      title="编辑商品"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="50%"
    >
      <el-form
        :model="tabelForm"
        :ref="tabelForm"
        label-width="80px"
      >
        <el-form-item
          prop="shopname"
          label="商品名称:"
        >
          <el-input v-model="tabelForm.shopname"></el-input>
        </el-form-item>
        <el-form-item
          prop="quality"
          label="商品属性:"
        >
          <el-input v-model="tabelForm.quality"></el-input>
        </el-form-item>
        <el-form-item
          prop="stock"
          label="库存数量:"
        >
          <el-input v-model="tabelForm.stock"></el-input>
        </el-form-item>
        <el-form-item
          prop="remark"
          label="备注:"
        >
          <el-input v-model="tabelForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="submit()"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      tabelForm: {},
      dialogVisible: false,
      page: 100,
      i:'',
      data: [
        {
          shopname: "衬衫",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣1",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣2",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣3",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣4",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣5",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣6",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣7",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣8",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        },
        {
          shopname: "毛衣",
          quality: "白色、红色、蓝色、黑色",
          stock: 100,
          remark: "一等品"
        }
      ]
    };
  },
  methods: {
    edit(index, row) {
      console.log(index, row);
      this.dialogVisible = !this.dialogVisible;
      this.tabelForm=row
      this.i=index
      console.log(index)
    },
    dele(index, row) {
        console.log(index, row);
        this.$confirm('是否删除该消息？','提示',{
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            type:'warning',
            center:true,
        }).then(()=>{
            this.$message({
                type:'success',
                message:'删除成功！'
            })
            this.data.splice(index, 1);
        }).catch(()=>{
            this.$message({
                type:'info',
                message:'已取消删除'
            })
        })
    },
    submit(){
        this.dialogVisible=false
        this.data[i]=this.tabelForm
    }
  }
};
</script>

<style scoped>
</style>
