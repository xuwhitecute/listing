import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
/*导入模块部分*/
import Guide from "../scripts/page/guide.vue";
import Layout from "../scripts/page/layout.vue";
import Listing from "../scripts/page/listing.vue";
import Choose from "../scripts/page/choose.vue";
import Mine from "../scripts/page/mine.vue";
import Login from "../scripts/page/login.vue";
import Rigester from "../scripts/page/rigester.vue";
import DetailActicle from "../scripts/page/detailActicle.vue";
/*导入模块结束*/

/*路由组件注册开始*/
const routes=[
    {path:"/",component:Guide,name:"guide"},
    {path:"/login",component:Login,name:"login"},
    {path:"/rigester",component:Rigester,name:"rigester"},
    {path:"/listing",component:Layout,children:[
        {path:"listing",component:Listing,name:"listing"},
        {path:"choose",component:Choose,name:"choose"},
        {path:"mine",component:Mine,name:"mine"},
        {path:"*",redirect:"/listing/listing"},
    ],redirect:"/listing/listing"},
    {path:"/detailActicle/:acticleid",component:DetailActicle,name:"detailActicle"},
    {path:"*",redirect:"/listing/listing"}
]
/*路由组件注册结束*/

const router=new VueRouter({
    routes,
    mode:"hash"
});

export default router;