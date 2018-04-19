

const state = {
    navName:["最新","个护","数码","彩妆","厨房","运动"],
    index:0,
    choosed:"最新",
    listdata0:{},
    listdata1:{},
    listdata2:{},
    listdata3:{},
    listdata4:{},
    listdata5:{},
}

const actions = {
    
}

const mutations = {
    updateInex(state,value){state.index=value},
    updataListData(state,value){
        for(var i in value){
            state[i]=value[i]
        }
    }
        
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