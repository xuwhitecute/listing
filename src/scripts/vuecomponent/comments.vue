<template>
    <div class="contain">
        <!-- 遍历评论的内容 -->
        <div class="comments" v-for="(item,idx) in comments" :key="idx">
            <div class="info">
                <h3>{{item.username}}</h3>
                <h4>{{item.times.split("T")[0]}}</h4>
                <p>{{item.textareaValue}}</p>
                <!-- 遍历回复的内容 -->
                <div class="Responed" v-if="item.Respondcomments" v-for="(respond,index) in item.Respondcomments " :key="index">
                    <div class="respond">
                        <h3>{{respond.Responder}}</h3>
                        <h4>{{respond.time}}</h4>
                        <div>
                            <span>回复:{{respond.Byreplyer}}</span>
                            <p>{{respond.textarea}}</p>
                        </div>
                        <div class="action">
                            <i @click="OthersPopupClick(respond.Responder)" class="iconfont icon-iconset0446"></i>
                            <i @click="clickPraise(respond.Responder)" class="iconfont icon-icon_good"></i>
                        </div>
                    </div>
                </div>
                 <!-- 遍历回复的内容结束 -->
            </div>
            <div class="action">
                <i @click="respondIclick(item.username)" class="iconfont icon-iconset0446"></i>
                <i @click="clickPraise(item.username)" class="iconfont icon-icon_good"></i>
            </div>
        </div>
         <!-- 遍历评论的内容结束 -->
         <!-- 点赞的弹出框开始-->
        <div v-transfer-dom>
            <popup v-model="showPraise" position="bottom" max-height="50%">
                <x-button @click.native="showPraise = false" plain type="primary">赞</x-button>
                <x-button @click.native="showPraise = false" plain type="primary">回复</x-button>
                <x-button @click.native="showPraise = false" plain type="primary">举报</x-button>
                <x-button @click.native="showPraise = false" plain type="primary">取消</x-button>
            </popup>
        </div>
         <!-- 点赞的弹出框结束 -->
         <!-- 评论的弹出框开始 -->
        <div v-transfer-dom class="othersComments">
            <div style="padding: 15px;">
                <x-button  plain type="primary">发布</x-button>
            </div>
            <popup v-model="OthersPopupVisible" position="bottom" >
                <div class="textarea">
                        <div>
                            <x-button @click.native="insertOhtersComments" action-type="button" >回复</x-button>
                        </div>
                        <group>
                        <x-textarea :max="20" autosize :placeholder="'回复：'+OthersName"   v-model="OhtersTextareaValue"></x-textarea>
                    </group>
                </div>
            </popup>
        </div>
        <!-- 评论的弹出框结束 -->
    </div>
</template>
<script>
import { TransferDom, Popup, XButton, XTextarea, Group,Cell} from 'vux'
import {mapState,mapActions} from "vuex";
export default {
    directives: {
        TransferDom
    },
    computed:{
        ...mapState(["comments","detailData"]),
        showPraise:{//点赞下滑框的显示
            get(){ return this.$store.state.showPraise},
            set(value){this.$store.commit('updateshowPraise',value)} 
        },
        OthersPopupVisible:{//控制回复其他人的按钮
            get(){ return this.$store.state.OthersPopupVisible},
            set(value){this.$store.commit('updateOthersPopupVisible',value)} 
        },
        OthersName:{//获取回复他人的名字
            get(){ return this.$store.state.OthersName},
            set(value){this.$store.commit('updateOthersName',value)} 
        },
        OhtersTextareaValue:{//回复其他人的值
            get(){ return this.$store.state.OhtersTextareaValue},
            set(value){this.$store.commit('updateOhtersTextareaValue',value)} 
        }
    },
    components:{
        TransferDom, Popup, XButton,XTextarea,Group,Cell
    },
    methods:{
        clickPraise(name){//点赞的弹出框
             if(localStorage.getItem("username")==null||localStorage.getItem("username")==''){
                this.$router.push({name:"login"})
            }else{
                this.showPraise=true;
                this.OthersName=name
            }
        },
        OthersPopupClick(name){//写评论的弹出框
            if(localStorage.getItem("username")==null||localStorage.getItem("username")==''){
                this.$router.push({name:"login"})
            }else{
                this.OthersPopupVisible=true;
                this.OthersName=name
            }
        },
        respondIclick(username){//回复他人的评论弹出框
            if(localStorage.getItem("username")==null||localStorage.getItem("username")==''){
                this.$router.push({name:"login"})
            }else{
            this.OthersPopupVisible=true;
            this.OthersName=username
            }
        },
        insertOhtersComments(){
            if(localStorage.getItem("username")==null||localStorage.getItem("username")==''){
                this.$router.push({name:"login"})
            }else{
                this.$store.commit('updateOthersPopupVisible',false);//关闭下拉滑框
                this.$store.dispatch("OhtersTextareaValue",{
                OthersName:this.OthersName,
                Responder:localStorage.getItem("username"),
                OhtersTextareaValue:this.OhtersTextareaValue,
                acticleId:this.detailData.id,
                })
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
.comments{
    position: relative;
    padding:46px 0px;
    border-bottom: 1px solid #e3e3e3;
    .info{
       
        h3{
            font-size: 36px;
            color: #000;
            margin-bottom:18px; 
        }
        h4{
            font-size: 27px;
            color:#bcbcbc;
            margin-bottom: 33px;
        }
        p{
            color: #585858;
            font-size: 40px;
            margin-bottom: 10px;
            
        }
    }
    .Responed{
        border-top: 1px solid #e3e3e3;
        padding-top:30px;
        .respond{
            position: relative;
        }
        div{
            span{
                color: #bcbcbc;
            }
        }
    }
    .action{
        position: absolute;
        top: 46px;
        right: 0;
        i{
            font-size: 40px;
            color: #7d5c95;
            margin-right: 46px;
        }
    }
 
}
</style>
