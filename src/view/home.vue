<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
import Header from "../component/header";
export default {
  name: "Home",
  components: {
    Header
  },
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
