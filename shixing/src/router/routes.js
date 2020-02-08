//引入模块
// import Index from "../components/index/index.vue";
import Classify from "../components/classify/classify.vue";
import My from "../components/my/my.vue";
import Car from "../components/car/car.vue";
import Login from "../components/login/login.vue";
import classifyRight from "../components/classify/classifyRight.vue";
import Product from "../components/product/product.vue";
import DetailList from "../components/product/detailList.vue"; 
import PReview from "../components/product/Preview.vue";
import PContent from "../components/product/productIndex.vue";

export default[{
    //跟路径配置
    path:"/",
    redirect:"/index"
},{
    path:"/index/",
    component:require("../components/index/index.vue").default,
},{
    path:"/classify",
    component:Classify,
    // children:[{
    //     path:"classifyRight",
    //     component:classifyRight,
    // }]
},{
    name:"jumpCar",
    path:"/car",
    component:Car,
},{
    path:"/my",
    name:"jumpMy",
    component:My,
    meta:{
        keepAlive:true //需要被缓存的组件
    },
},{
    path:"/login",
    component:Login,
},{
    path:"/product",
    component:Product,
    children:[{
        name:"jumpProduct",
        path:"productIndex",
        component:PContent,
        meta:{
            pHeader:true,
        },
    },{
        path:"detailList",
        component:DetailList,
        meta:{
            pHeader:true,
        },
    },{
        path:"preview",
        component:PReview,
    }]
}]