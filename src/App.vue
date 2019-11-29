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
</style>
