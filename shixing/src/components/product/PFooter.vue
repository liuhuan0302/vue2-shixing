<template>
    <div class="pfooter">
        <div class="footer">
            <div class="footer_left">
                <div>
                    <span class="iconfont icon-kefu"></span>
                    <p>客服</p>
                </div>
                <div  @click="onOff = !onOff" :class="{'color':onOff}">
                    <span class="iconfont icon-shoucang4"></span>
                    <p>收藏</p>
                </div>
                <div>
                    <mt-popup
                        v-model="popupVisible"
                        position="top">
                        ...
                    </mt-popup>
                    <span class="iconfont icon-gouwuche1"></span>
                    <span class="tip" v-if="num">{{num}}</span>
                    <!-- <router-link to="car"><router-link>     -->
                    <p class="catr" @click="jumpCart">购物车</p>
                </div>
            </div>
            <!-- <mt-popup  position="top" v-model="popupVisible" >
                <button class="cartBtn">加入购物车</button>
            </mt-popup> -->
            <button class="cartBtn" @click="count">加入购物车</button>
        </div>
        <div class="pop" :class="{'active':flag}" >
            <div class="pop-content" >
                <div class="top">
                    <span class="check">✔</span>
                    <p>操作成功</p>
                    <div class="cancel" @click="cancel">✖</div>
                </div>
                <div class="bottom">
                   <p>成功加入购物车</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { MessageBox } from 'mint-ui';

export default {
    data(){
        return {
            num:0,
            onOff:false,
            flag:false
        }
    },
    methods:{
        count(){
            this.num++;
            this.flag = true;
            setTimeout(()=>{
                this.flag = false;
            },3000)
           

        },
        jumpCart(){
            this.$router.push({name:"jumpCar"})
        },
        cancel(){
            this.flag = false; 
        }
    }
}
</script>

<style  scoped>
.pfooter{
    height:2.5rem;
    width:100%;
    position: fixed;
    left:0;
    bottom: 0;
    z-index:100;
    background:#fff;

}
.footer{
    height:100%;
    width:100%;
    padding:0 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer_left{
    height:100%;
    width:60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.footer_left>div{
    height:100%;
    width:33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size:0.8rem;
}
.cartBtn{
    height:2rem;
    width:30%;
    border-radius: 1.5rem;
    background: linear-gradient(90deg,#ff705b,#ff3f57);
    border:none;
    color:#fff;
    font-size:0.8rem;
}
.catr{
    position: relative;
}
.tip{
    height:1.2rem;
    width:1.6rem;
    border-radius:40%;
    background:red;
    color:#fff;
    border:0.05rem solid red;
    line-height: 1.2rem;
    text-align: center;
    position: absolute;
    top:-.3rem;
    right:9.8rem;
}
.color{
    color:red;
}
.pop{
    height:4.5rem;
    width:100%;
    padding: 0.7rem;
    position: fixed;
    top:-6rem;
    left:0;
}
.pop-content{
    height:100%;
    width:100%;
    background:#fff;
    border-radius: 0.5rem;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.top{
    height:1.5rem;
    width:100%;
    padding:0 0.2rem;
   
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
    
}
.check{
    display: block;
    height:1rem;
    width:1rem;
    border-radius: 50%;
    background:green;
    font-size:0.5rem;
    color:#fff;
    line-height:1rem;
    text-align: center;
    margin-right:0.5rem;
}
.bottom{

    height:1rem;
    width:100%;
 
}
p{
    font-size: 0.8rem;
}
.cancel{
    margin-left:16rem;
}
.active{
    top:0;
    transition: all 0.3s
}
</style>