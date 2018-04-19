<template>
  <div class="wrap">
      <router-view></router-view>
      <Foot></Foot>
  </div>
</template>
<script>
import Foot from "../vuecomponent/footer.vue";
export default {
  components:{Foot}
}
</script>
<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  position: static;
}
</style>

