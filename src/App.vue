<template>
  <div id="app">
    <Header/>
    <router-view/>
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
