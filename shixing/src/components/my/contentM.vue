<template>
    <div class="contentM">
        <div class="user-order">
            <ul>
                <li>
                    <span class="iconfont icon-dingwei-"></span>
                    <p>全部订单</p>
                </li>
                 <li>
                    <span class="iconfont icon-daipeisong"></span>
                    <p>待配送</p>
                </li>
                 <li>
                    <span class="iconfont icon-daifahuo"></span>
                    <p>待自提</p>
                </li>
                 <li>
                    <span class="iconfont icon-31daipingjia
"></span>
                    <p>待评价</p>
                </li> <li>
                    <span class="iconfont icon-Group"></span>
                    <p>轻松退</p>
                </li>
            </ul>
        </div>
       <div class="user-detail">
           <ul>
               <li>
                   <span>0.00</span>
                   <p>余额</p>
               </li>
               <li>
                   <span>0.00</span>
                   <p>预付</p>
               </li>
                <li>
                   <span>0</span>
                   <p>积分</p>
               </li>
               <li>
                   <span>4</span>
                   <p>优惠券</p>
               </li>
           </ul>
        </div>
        <div class="user-links">
            <ul>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhou"></span>
                    <p>充值</p>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>

export default {
   
}
</script>

<style scoped>
.user-order{
    height:4.5rem;
    width:100%;
    padding:0 0.4rem;
}
ul{
    height:100%;
    width:100%;
    display: flex;
    flex-wrap:wrap;
   
    /* flex-direction: column;
    justify-items: center;
    align-items: flex; */
}
li{
   
    width:20%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size:.8rem;
    color:#333;
    
}
span{
    margin-bottom: 0.2rem;
}
.user-detail{
    height:5.1rem;
    width:100%;
    padding-top:0.6rem;
    background:#bbb;
}
.user-detail>ul>li{
    width:25%;
    height:100%;
    background:#fff;
}
.user-links{
    width:100%;
    background:#bbb;
    padding-top:0.6rem;
   
}
.user-links>ul>li{
    width:25%;
    height:4.5rem;
    background:#fff;
    border:0;
    border-bottom:0.1rem solid #bbb;
    float:left;
}
</style>