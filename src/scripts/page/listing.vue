<template>
  <div class="section">
      <Head title="清单" :iscalendar=true :issearch=true></Head>
      <div class="main-warp listing">   
        <Tab :line-width=2 active-color='#000' v-model="index">
          <Tab-item class="vux-center" :selected="choosed === item" v-for="(item, index) in navName" @click="choosed = item" :key="index">
            {{item}}
          </Tab-item>
        </Tab>
        <Swiper v-model="index" :show-dots="false" :aspect-ratio="12">
          <Swiper-item v-for="(item, index) in navName" :key="index">
            <div class="tab-swiper vux-center">
              <show-list ></show-list>
            </div>
          </Swiper-item>
        </Swiper>
      </div>
  </div>
</template>
<script>
import { Tab, TabItem ,Scroller,Swiper, SwiperItem } from 'vux';
import { createNamespacedHelpers } from 'vuex';
import showList from "../vuecomponent/showList.vue";
const { mapState, mapActions } = createNamespacedHelpers("listing")
export default {
  computed:{
    ...mapState(["navName","choosed"]),
    index:{
      get(){ return this.$store.state.listing.index},
      set(newValue){ this.$store.commit('listing/updateInex', newValue)}
    }
  },
  created(){
    this.updatalistData();
  },
  methods:{
    async updatalistData(){
        var {data}=await axios.get("/vue/newlist");
        this.$store.commit("listing/updataListData",data);
    }
  },
  components: {
    showList,
    Tab,
    TabItem,
    Scroller,
    Swiper,
    SwiperItem,
    Scroller
  }
}
</script>
<style lang="less" >
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.listing{
  .swiper-slide{
        overflow: hidden;
    }
 
 .swiper-slide-active{
        overflow: auto !important;
    }
  .vux-tab-wrap{
    height: 88px;
  }
  .vux-tab .vux-tab-item.vux-tab-selected{
    color: #000;
  }
  .vux-tab .vux-tab-item{
    line-height: 90px;
  }
  .vux-tab,.vux-tab-container,.vux-tab-warp{
    height: 100px;
    line-height: 100px;
  }
    .navitem{
      width: 200px;
      line-height: 110px;
      font-size: 38px;
      text-align: center;
      color: #8f8f8f;
    }
  }

</style>
