const state = {
    phoneOrUsername:"",
    password:"",
}

const actions = {
     
}

const mutations = {
    newphoneOrUsername(state,newValue){state.phoneOrUsername=newValue}, //phone
    newPassword(state,newValue){state.password=newValue},//username
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