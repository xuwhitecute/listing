export default {
    /*详情页加载时，页面的渲染*/
    updataDetial({commit},id){
        axios.get(`/vue/getDetial?id=${id}`)
            .then(res=>res.data)
            .then(data=>{
                console.log(data);
                commit("updataDetial",data)
            })
    },
    /*增加评论*/
    insertComments:async ({commit},pyload)=>{
        let {data}=await axios.post("/vue/insertcomments",{pyload});
        commit("insertComments",data);
    },
    /*回复其他人的评论*/
    OhtersTextareaValue:async ({commit},pyload)=>{
        let {data}=await axios.post("/vue/insertRespondcomments",{pyload});
        console.log(data);
        commit("insertComments",data);
    }
    
}