<template>
       <div class="section">
           <Head title="文章详情" :isback=true></Head>
           <div class="main-warp" v-if="isloading">
                <div class="img">
                    <img :src="detailData.featuredImageUrl" alt="">
                </div>
               <div class="title">     
                    <h3>{{detailData.title}}</h3>
                    <div class="author">
                        <img :src="detailData.author.avatarUrl" alt="">
                        <div class="right">
                            <h4>{{detailData.author.nickname}}</h4>
                            <span class="tagline">{{detailData.author.tagline}}</span>
                            <span class="publishedAtDiffForHumans">{{detailData.publishedAtDiffForHumans}}</span>
                        </div>
                    </div>
               </div>
               <div>
                    <iframe :src="detailData.links.html" frameborder="0" id="show-iframe" width="100%" height="100%" ></iframe>
               </div>
               <div class="commnets">
                   <div class="header">
                       <span class="center">评论区</span>
                       <span class="write" @click="showComments"><i class="iconfont icon-xie"></i>写评论</span>
                   </div>
                   <div class="content"  v-if="comments.length>0">
                        <comments></comments>
                   </div>
               </div>
           </div>
            <acticleFooter></acticleFooter>
            <div v-transfer-dom>
                <popup v-model="popupVisible" position="bottom" >
                    <div style="padding: 15px;">
                        <x-button @click.native="insertComments" plain type="primary">发布</x-button>
                    </div>
                    <div class="textarea">
                         <group>
                            <x-textarea :max="20" autosize v-model="textareaValue"></x-textarea>
                        </group>
                    </div>
                </popup>
            </div>
       </div>
</template>
<script>
import { TransferDom, Popup, XButton, XTextarea, Group} from 'vux'
import {mapState,mapActions} from "vuex";
import acticleFooter from "../vuecomponent/acticleFooter.vue";
import comments from "../vuecomponent/comments.vue";
export default {
    directives: {
        TransferDom
    },
    components:{
        TransferDom, Popup, XButton,XTextarea,Group,
        acticleFooter,comments,
    },
    computed:{
        ...mapState(["detailData","isloading","comments"]),
        textareaValue:{//评论值
            get(){ return this.$store.state.textareaValue},
            set(value){this.$store.commit('updateTextareaValue',value)} 
        },
        popupVisible:{//控制下划框显示隐藏
            get(){ return this.$store.state.popupVisible},
            set(value){this.$store.commit('updatePopupVisible',value)} 
        }
    },
    created(){
        /*页面数据的渲染*/
        var acticleId=this.$route.params.acticleid; 
        this.updataDetial(acticleId);
    },
    methods:{
        ...mapActions(["updataDetial"]),
        insertComments(){//点击发布按钮
            this.$store.commit('updatePopupVisible',false);//关闭下拉滑框
            this.$store.dispatch('insertComments',{
                acticleId:this.$route.params.acticleid,
                userId:localStorage.getItem("id"),
                textareaValue:this.textareaValue,
                username:localStorage.getItem("username"),
            })
        },
        showComments(){//点击发布评论
             if(localStorage.getItem("username")==null||localStorage.getItem("username")==''){
                this.$router.push({name:"login"})
            }else{
                this.$store.commit('updatePopupVisible',true);
            }
        }
    },
    updated(){//详情页iframe的高度控制
    this.$nextTick(function () {
        const oIframe = document.getElementById('show-iframe');
        const deviceWidth = document.documentElement.clientWidth;
        const deviceHeight = document.documentElement.clientHeight;
        console.log(deviceWidth,deviceHeight)
        oIframe.style.width = deviceWidth + 'px';
        oIframe.style.height = deviceHeight + 'px';
      })
    },
}
</script>
<style lang="scss" scoped>
.img{
        width: 100%;
        height: 100%;
        padding-bottom: 60px;
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
.title{
    width: 100%;
    height: 100%;
    padding: 0 60px;
    box-sizing: border-box;
    h3{
        font-size: 48px;
        font-weight: 800;
        padding-bottom: 46px;
    }
    .author{
        overflow: hidden;
        img{
            width: 94px;
            height: 94px;
            border-radius: 50%;
            float: left;
            margin-right: 36px;
        }
        .right{
            float: left;
            h4{
                font-size: 40px;
                color: #7a7999;
            }
            span{
                font-size: 34px;
                color: #9a9a9a;
            }
        }


    }
}
.commnets{
    box-sizing: border-box;
    padding:0 60px;
    padding-bottom: 30px;
    overflow: hidden;
    
    .header{    
        overflow: hidden;
        border-bottom: 1px solid #e5e7ea;
        .center{
            color: #d6d9de;
            line-height: 116px;
            font-size: 44px;
            float: left;
        }
        .write{
            color: #9968b6;
            line-height: 116px;
            font-size: 44px;
            float: right;
            i{
                margin-right: 10px;
            }
        }
    }
    .content{
        min-height: 500px;
    }
}
</style>
