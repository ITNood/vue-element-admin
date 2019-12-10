<template>
  <div>
      <div class="login">
          <Particles/>
          <LoginFrom />
      </div>
      
  </div>
</template>

<script>
import Particles from "../../component/login/particles";
import LoginFrom from '../../component/login/from'
export default {
  components: { Particles ,LoginFrom},
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
