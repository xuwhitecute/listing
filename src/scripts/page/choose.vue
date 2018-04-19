<template>
  <div>
      <Head title="挑选" :isback=true></Head>
      <div class="main-warp">
        <search
        v-model="value"
        position="absolute"
        auto-scroll-to-top
        cel-text="取消"
        top="46px"
        ref="search"></search>
      </div>
  </div>
</template>
<script>
import {Search} from "vux";
export default {
  data(){
    return{
      value:"",
    }
  },
  components:{
    Search 
  }
}
</script>
<style lang="scss" >

</style>
