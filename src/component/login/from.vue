<template>
  <div class="loginform">
    <img src="../../assets/logo.png">
    <el-form
      :model="loginForm"
      ref="loginForm"
      :rules="rules"
    >
      <el-form-item prop="username">
        <i class="el-icon-user"></i>
        <el-input
          v-model="loginForm.username"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <i class="el-icon-unlock"></i>
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button
      @click="login"
      class="submit"
      type="primary"
    >登录</el-button>
    <div class="password">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <router-link to=''>忘记密码</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginFrom",
  data() {
    return {
      checked: false,
      loginForm: {
        username: "admin",
        password: "111111"
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/user/login", this.loginForm)
        .then(response => {
          console.log(response);
          localStorage.setItem('token',response.data.data.token)//存储token
          this.$router.push('/home')//登录成功跳转主页
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
