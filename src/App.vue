<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./component/header";
export default {
  name: 'App',
    components: {
    Header
  },
}
</script>

<style>
</style>
