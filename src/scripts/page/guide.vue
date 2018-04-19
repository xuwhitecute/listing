<template>
  <div>
      <swiper :options="swiperOption" ref="mySwiper"  >
        <swiper-slide v-for="(img,idx) in imgList" :key="idx">
           <img :src="img" alt="" class="img" @click="gotoIndex(idx)">
        </swiper-slide>
      </swiper>
  </div>
</template>


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import p1 from "../../assets/guid.png"
import p2 from "../../assets/guid.png"
import p3 from "../../assets/guid.png"
import p4 from "../../assets/guid.png"

import router from "../../router";
import { setTimeout } from 'timers';
export default {
  data(){
    return {
      swiperOption:{
        loop:false,
        autoplay: false,
        speed:1500,
        direction:"horizontal",
        onSlideChangeEnd(){
        }
      },
      // imgList:[p1,p2,p3,p4]
      imgList:[p1]
    }
  },
  methods:{
    gotoIndex(id){
      console.log(id);
      if(id==this.swiper.slides.length-1){
          // this.$router.push("/app");
          router.push("/app/home");
      }
    }
  },
  computed:{
    swiper:{
      get(){
        return this.$refs.mySwiper.swiper;
      },
      set(newVal){

      }
    }
  },
  mounted(){
    setTimeout(()=>{
        router.push("/app/home");
      },3000)
  },
  beforeRouteEnter(to,from,next){
    if(localStorage.vueCount){
      setTimeout(()=>{
        router.push("/app/home");
      },3000)
    }else{
      localStorage.vueCount = 1;
      next();
    }
    
  }
}

</script>
<style scoped>
.img{
  width:100%;
  height:100%;
}
</style>