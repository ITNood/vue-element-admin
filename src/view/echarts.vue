<template>
  <div  class="layout">
    <div class="echarts">
      <el-row :gutter="15">
        <el-col :lg="8" :md="12" :sm="24" :xs="24">
          <Echarts />
        </el-col>
        <el-col :lg="8" :md="12" :sm="24" :xs="24">
          <Echarts2/>
        </el-col>
        <el-col :lg="8" :md="12" :sm="24" :xs="24">
          <Echarts3/>
        </el-col>
      </el-row>
    </div>

    <!--tabel-->
    <Tabel/>
  </div>
</template>

<script>
import Echarts from "../component/echarts/index";
import Echarts2 from '../component/echarts/echarts'
import Echarts3 from '../component/echarts/echarts3'
import Tabel from '../component/echarts/table'
export default {
  components: { Echarts,Echarts2 ,Echarts3,Tabel},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
