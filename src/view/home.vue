<template>
  <div class="layout">
    <Table/>
  </div>
</template>

<script>
import Table from "../component/home/index";
export default {
  components: { Table },
  data() {
    return {
      username:'admin',
      password:'111111'
    };
  },
  mounted() {
    this.login()
  },
  methods: {
    login(){
      this.$axios.post('/user/login', {username:this.username,password:this.password}).then(response=>{
        console.log(response)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
