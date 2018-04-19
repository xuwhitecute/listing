<template>
<div>
    <div class="swiperwarp" >
        <div v-for="(item,idx) in listdata0" :key="idx">
            <router-link :to="{name:'detailActicle',params:{acticleid:item.id}}" class="link">
            <div class="img" >
                <img :src="item.featuredImageUrl" alt="">
            </div>
            <div class="text">
                <h3>{{item.excerpt}}</h3>
                <p>{{item.title}}</p>
                <div class="tag">
                    <span class="categories">{{item.categories.name}}</span>
                    <span class="likes"><i class="iconfont icon-xin"></i>{{item.likeCount}}</span>
                    <span class="hitCount"><i class="iconfont icon-yanjing"></i>{{item.hitCount}}</span>
                </div>
            </div>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('listing')
export default {
  computed:{
      ...mapState(['listdata0'])
  },
}
</script>
<style <style lang="scss" scoped>
.swiperwarp{
    box-sizing: border-box;
    padding: 0  57px;
    .link{
        display: block;
        color: #000;
    }
    .img{
        img{
            width: 100%;
            height: auto;
        }
        padding-bottom: 45px;
    }
    .text{
        h3{
            line-height: 98px;
            font-size: 56px;
        }
        p{
            font-size: 30px;
            line-height: 54px;
            color: #c1c1c1;
        }
        .tag{
            font-size: 30px;
            line-height: 175px;
            color: #c1c1c1;
            vertical-align: middle;
            span{
             margin-right: 40px;
            }
        }
    }
}
</style>

