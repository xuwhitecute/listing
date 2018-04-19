const state = {
    phone:"",
    username:"",
    password:"",
    sendcode:"",
    sendCodeMsg:"获取验证码",
    sendCodeClass:true,
}

const actions = {
     sendcode({commit},phone){       
        commit("changeSendCodeBackground");
        commit("changeSendCodeMsg");
    }
}

const mutations = {
    /*改变验证码按钮变灰色*/
    changeSendCodeBackground(state){
        state.sendCodeClass=false;
        state.sendCodeED=true;
    },
    /*验证码倒计时*/
    changeSendCodeMsg(state){
        let count=10;
        clearTimeout(timer);
        let timer=setInterval(()=>{
            if(count==0){ 
                clearTimeout(timer);
                state.sendCodeClass=true;
                state.sendCodeMsg="获取验证码"}
            else{ 
                state.sendCodeMsg=--count+"s" 
            }
        },1000)
    },
 
    newPhone(state,newPhone){state.phone=newPhone}, //phone
    newUsername(state,newUsername){state.username=newUsername},//username
    newPassword(state,newPassword){state.password=newPassword}, //password
    newSendcode(state,newSendcode){state.sendcode=newSendcode},//sendcode

    }

const getters = {
    
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}