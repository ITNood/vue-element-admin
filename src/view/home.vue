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
    return {};
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
