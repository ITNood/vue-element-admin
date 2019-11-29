<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from　"./component/header"
export default {
  name: 'App',
  comments:{
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
