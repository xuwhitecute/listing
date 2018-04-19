<template>
    <div class="main">
        <Head title="登陆" :isback=true />
        <div class=" centerbox">
            <form id="loginFrom">
                <label for="phoneOrUsername" class="inputbox">
                    <input type="text" id="phoneOrUsername" name="phoneOrUsername" placeholder="请输入您的手机号/用户名" v-model="phoneOrUsername" />
                </label>
                <label class="inputbox" for="password">
                  <input type="password" id="password" name="password"  placeholder="请输入您的密码" v-model="password" />
                </label>
                <div class="submit">
                   <button type="button" @click="login">登陆</button>
                </div>
                <div class="loginNow">
                    <p><router-link :to="{name:'rigester'}">现在登陆</router-link></p>
                </div>
            </form>
        </div>
    </div>  
</template>
<script>
import { Toast } from 'mint-ui';
import { createNamespacedHelpers } from 'vuex';
const { mapState,mapActions} = createNamespacedHelpers('login');
export default {
  computed:{
    ...mapState([]),
    phoneOrUsername:{
      get(){ return this.$store.state.login.phoneOrUsername},
      set(newValue){ this.$store.commit('login/newphoneOrUsername', newValue)}
    },
    password:{
      get(){ return this.$store.state.login.password },
      set(newValue){ this.$store.commit('login/newPassword', newValue)}
    },
  },
  methods:{
    ...mapActions([]),
    /*注册按钮按下*/
    async login(){
      let  phoneOrUsernameReg=/\S/;  
      let  passwordReg=/^[a-zA-Z0-9_-]{6,14}$/;
      if(!phoneOrUsernameReg.test(this.phoneOrUsername)){
        Toast({message:'用户名不能位空',duration: 1000 });
      }else if(!passwordReg.test(this.password)){
        Toast({message:'密码格式不对',duration: 1000 });
      }else{
          let parmas={phoneOrUsername:this.phoneOrUsername,password:this.password};
          let {data}=await axios.post("/vue/login",parmas);
          switch(data.code){
                case "0":
                Toast({message:"用户没有注册",duration: 1000 });
                break;
                case "1":
                Toast({message:'登陆成功即将跳转',duration: 1000 });
                localStorage.setItem("username",data.username);
                localStorage.setItem("phone",data.phone);
                localStorage.setItem("id",data.id);
                this.$router.push({name:"listing"})
                break;
                case "2":
                Toast({message:'账号和密码不匹配',duration: 1000 });
                break;
            }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
}
.centerbox{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
button{
  outline: none;
}
#loginFrom{
  .inputbox{
    display: block;
    width: 717px;
    padding-top:83px;
    padding-bottom: 20px;
    border-bottom:1px solid #ccc;
    font-size: 30px;
    overflow: hidden;
    label{
      height: 30px;
      line-height: 90px;
    }
    input{
      outline: none;
      border:none;
      height: 40px;
      font-size: 30px;
      line-height: 90px;
    }
    .sendcode{
      border-radius: 15px;
      background-color: #6d439b;
      font-size: 30px;
      line-height: 60px;
      color: #fff;
      box-shadow: none;
      border:none;
      float: right;
      padding:0px 27px;
      width: 250px;
    }
    .sendcoded{
      border-radius: 15px;
      background-color: #eee;
      font-size: 30px;
      line-height: 60px;
      color: #ccc;
      box-shadow: none;
      border:none;
      float: right;
      padding:0px 27px;
      width: 250px;
    }
  }
  .loginNow{
    color: #884eaa;
  }
  .submit{
    width: 100%;
    height: 252px;
    vertical-align: middle;
    button{
      width: 100%;
      height: 120px;
      background-color: #884eaa;
      border-radius: 15px;
      border:none;
      margin-top: 70px;
      font-size: 40px;
      color: #fff;
    }
  }
  .textcenter{
    text-align: center;
  }
}
</style>

