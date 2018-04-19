<template>
  <div>
      <div class="img">
        <div>
          <img src="http://placehold.it/50x50" alt="">
          <button v-if="!show" class="btn" @click="login">立即登陆</button>
          <button v-else  class="btn" @click="loginout">退出</button>
          <p class="username">{{username}}</p>
        </div>
      </div>
      <div class="list">
          <ul>
            <li><i class="iconfont icon-shangpin"></i><span>喜欢的商品</span></li>
            <li><i class="iconfont icon-wenzhangshoucang"></i><span>喜欢的文章</span></li>
            <li><i class="iconfont icon-shangpinfenxiang"></i><span>拥有的商品</span></li>
            <li><i class="iconfont icon-xie"></i><span>我的点评</span></li>
          </ul>
      </div>
      <div class="mine">
        <div><i class="iconfont icon-gerenxinxi"></i><span>个人资料</span><i class="iconfont icon-you"></i></div>
        <div><i class="iconfont icon-gerenxinxi"></i><span>账号绑定</span><i class="iconfont icon-you"></i></div>
        <div><i class="iconfont icon-gerenxinxi"></i><span>修改密码</span><i class="iconfont icon-you"></i></div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      show:false,
      username:"",
    }
  },
  methods:{
    login(){
      this.$router.push({name:"login"})
    },
    loginout(){
      localStorage.removeItem("username");
      localStorage.removeItem("phone");
      this.username="";
      this.show=false;
    }
  },
  mounted(){
    let name=localStorage.getItem("username");
    if(name){
        this.show=true;
        this.username=name;
    }
  }
}
</script>
<style lang="scss" scoped>
.img{
  width: 100%;
  height: 636px;
  background-color: #bbbbbb;
  background-image: url();
  display: flex;
  align-content: center;
  justify-content: center;
 
  img{
    display: block;
    border-radius: 50%;
    width: 190px;
    height: 190px;
    margin: 183px auto 46px ;
  }
  .btn{
    width: 272px;
    height: 100px;
    border:3px solid #fff;
    color: #fff;
    border-radius: 15px;
  }
  .username{
    color: #fff;
    line-height: 100px;
    text-align: center;
  }
}
.list{
   padding-bottom: 52px;
  ul{
    overflow: hidden;
    li{
      width: 50%;
      height: 206px;
      box-sizing: border-box;
      border:2px solid #e6e6e6;
      float: left;
      display: flex;
      justify-content: space-around;
      align-content: center;
      flex-direction: column;
      padding-top: 9px;
      i{
        font-size: 54px;
        font-weight: 800;
        text-align: center;
      }
      .icon-shangpin{
        color: #e9bacc;
      }
      .icon-wenzhangshoucang{
        color: #8e8dc0;
      }
      .icon-shangpinfenxiang{
        color: #9594c5;
      }
      .icon-xie{
        color: #eec95e;
      }
      span{
        color: #999999;
        font-size: 36px;
        text-align: center;
      }
    }
  }
}
.mine{
  margin-top: 53px;
  div{
    box-sizing: border-box;
    width: 100%;
    height: 120px;
    padding:0px 52px;
    font-size: 42px;
    span{
      margin: 0px 32px;
      color: #6c6c6c;
    }
    .icon-you{
      float: right;
    }
  }
}
</style>
