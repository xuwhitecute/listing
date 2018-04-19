<template>
    <div class="header">
        <p>{{title}}</p>
        <i v-show="iscalendar" class="calendar iconfont icon-rili"></i>
        <i  v-show="issearch" class="search iconfont icon-fangdajing"></i>
        <i  v-show="isback" @click="back" class="calendar iconfont icon-xiangzuo"></i>
    </div>
</template>
<script>
export default {
    props:{
        title:{type:String,required:true},
        isback:{type:Boolean},
        issearch:{type:Boolean},
        iscalendar:{type:Boolean},
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        position: fixed;
        width: 100%;
        z-index: 100;
        height: 120px;
        box-sizing: border-box;
        background-color: #9198a8;
        p{
            font-size: 46px;
            line-height: 120px;
            color: #fff;
            text-align: center;
        }
        i{
            line-height: 120px;
            padding:0px 54px;
        }
        .calendar{
            position: absolute;
            left: 0;
            top: 0;
        }
        .search{
            position: absolute;
            right: 0;
            top: 0;
        }

    }
</style>
