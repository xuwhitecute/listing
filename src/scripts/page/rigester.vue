<template>
    <div class="main">
        <Head title="注册" :isback=true />
        <div class=" centerbox">
            <form id="rigesterForm" ref="rigesterForm">
                <label for="phone" class="inputbox">
                    <span>+86 |</span>
                    <input type="text" id="phone" name="phone" placeholder="请输入您的手机号" v-model="phone" />
                </label>
                <label class="inputbox" for="username">
                  <input type="text" id="username" name="username"  placeholder="请输入您的昵称" v-model="username" />
                </label>
                <label class="inputbox" for="password">
                  <input type="password" id="password" name="password"  placeholder="请输入最少6位密码" v-model="password" />
                </label>
                <label class="inputbox" fro="sendcode">
                  <input type="text" id="sendcode" name="code"  placeholder="请输入您的验证码"  v-model="code"/>
                  <button :class="sendCodeClass?'sendcode':'sendcoded'" type="button"  @click="sendcode" :disabled="!sendCodeClass">{{sendCodeMsg}}</button>
                </label>
                <div class="submit">
                   <button type="button" @click="rigester">注册</button>
                </div>
                <div class="textcenter">
                  <p>注册即代表您同意清单的<a>「用户协议」</a></p>
                </div>
            </form>
        </div>
    </div>  
</template>
<script>
import { Toast } from 'mint-ui';
import { createNamespacedHelpers } from 'vuex';
const { mapState,mapActions} = createNamespacedHelpers('rigester');
export default {
  computed:{
    ...mapState(["sendCodeMsg","sendCodeClass","sendCodeED"]),
    phone:{
      get(){ return this.$store.state.rigester.phone},
      set(newPhone){ this.$store.commit('rigester/newPhone', newPhone)}
    },
    username:{
      get(){ return this.$store.state.rigester.username },
      set(newUsername){ this.$store.commit('rigester/newUsername',newUsername)}
    },
    password:{
      get(){ return this.$store.state.rigester.password },
      set(newPassword){ this.$store.commit('rigester/newPassword', newPassword)}
    },
    code:{
      get(){ return this.$store.state.rigester.sendcode },
      set(newSendcode){ this.$store.commit('rigester/newSendcode', newSendcode)}
    },
  },
  methods:{
    ...mapActions([]),
    /*发送手机验证码，并按钮效果*/
    async sendcode(){
        let  phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;  
        if(phoneReg.test(this.phone)){
            this.$store.dispatch("rigester/sendcode",this.phone);
            let {data}=await axios.post("/vue/sendcode",{phone:this.phone})
            switch(data.code){
                case "0":
                Toast({message:'短信发送失败',duration: 1000 });
                break;
                case "2":
                Toast({message:'短信发送成功',duration: 1000 });
                break;
            }
        }else{
            Toast({ message:'电话号码不符合规范', duration: 1000 });
        }
      },
    /*注册按钮按下*/
    async rigester(){
      let  phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;  
      let  usernameReg=/^[a-zA-Z0-9_-]{6,16}$/; 
      let  passwordReg=/^[a-zA-Z0-9_-]{6,14}$/;
      let  codeREg=/^\d{6}$/;
      if(!phoneReg.test(this.phone)){
        Toast({message:'手机格式不正确',duration: 1000 });
      }else if(!usernameReg.test(this.username)){
        Toast({message:'用户名为6到16位',duration: 1000 });
      }else if(!passwordReg.test(this.password)){
        Toast({message:'密码为6-14位',duration: 1000 });
      }else if(!codeREg.test(this.code)){
        Toast({message:'验证码为6位',duration: 1000 });
      }else{
          let parmas={phone:this.phone,username:this.username,password:this.password,code:this.code};
          let {data}=await axios.post("/vue/register",parmas);
          switch(data.code){
                case "1":
                Toast({message:'注册成功',duration: 1000 });
                this.$router.push({name:"listing"})
                break;
                case "-1":
                Toast({message:'验证码不匹配',duration: 1000 });
                break;
                case "-2":
                Toast({message:'电话已经注册',duration: 1000 });
                break;
                case "-3":
                Toast({message:'用户名已注册',duration: 1000 });
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
#rigesterForm{
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
  .submit{
    width: 100%;
    height: 252px;
    vertical-align: middle;
    button{
      width: 100%;
      height: 120px;
      background-color: #6d439b;
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
