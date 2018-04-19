<template>
  <div class="footer-layout">
      <ul >
          <li v-for="(item,idx) in footerlist " :key="idx">
            <router-link :to="{name:item.pathname}">
              <i :class="'iconfont '+item.icon"></i>
              <span>{{item.name}}</span>
            </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('footer')
export default {
  computed:{
    ...mapState(["footerlist"])
  }
}
</script>
<style lang="scss" scoped>
.footer-layout{
  width: 100%;
  position: fixed;
  z-index: 500;
  bottom: 0;
  box-sizing: border-box;
  border-top: 1px solid #888;
  background-color: #fff;

  ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 15px;
    height: 150px;

    li{
        a{
          display: block;
          color: #b2b2b2;
          font-weight: 800;
        }
        .router-link-active{
          color: #040404;
        }
        i{
          display: block;
          font-size: 65px;
          line-height: 58px;
          padding:2px 0;
        }
        span{
          display: block;
          font-size: 26px;
          line-height: 58px;
        }
    }
  }
}
</style>
