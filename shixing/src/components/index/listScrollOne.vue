<template>
    <div class="mn-card home-flashsale" v-show="pageLoad">
        <div class="home-flashsale-title" >
            <p>限时抢购</p>
            <span class="count-down">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAABGdBTUEAALGPC/xhBQAAA0pJREFUSA2tVM9rU0EQznt5MfFke1Bsoa30P6iiKBgh9CBU/HHx4EEhav0BUntLS2JCk5bSgqBFsGiPonizIt5iDilYClbBmwelBVushxZPsUmTft8289i3TUIsLrw3u998MzuzM7s+H0Ymk+kbGRk5x7nPnVTnNkYF4FellZ/HhCAYfylt/jD27QjzLzSFY1HRCe5aZ7kgmC6ug/Rgrgl8SqfTi+LeGR0d7SiXy0eSyeQxglifhljygbUpLJHEbMuy+gQQScyuVCrvCWCPj6IgZml75Klw9xCWGZUlClpubW0tw38RWAJyES6P0glkIBgMdg0NDS0LXyWMKMMugIl5CNQLZmOxCK8x5K9i0w31OfXkkS+11PU8rxKAeQ9oLrgtiJ7wTA71Et6eDsI1ouepqang+vr6Y8R+gWuc2tvOzs7BaDRa4JrDNWByIPSA/AHt/YxKNEc/sF5Mv6RSqR5iaiDGXzBYk7UpqSOHuIV7cRuensBDQIjAHsBzCEcbFwwGRex8zwF52nGcdlFQAutAaPt1LBQKdRUKhZ+qJvF4fFVXguzmJngsFlvhvGYRgde5oD6fIx5EojmvoDmvtba2HhBMl2qHsbGxNgFBfknywMDAH8EoJyYmVJ4OMr9TKpWWgalTwmntip8GSHiJXM7Z3s3XQVngp1U6C0/PideqtGd76SVwL9IAY7ZuL+3od/65XM6Zm5u7gWqn8LkHonP0OcrGOqbD4fBMJBLhvfIMT1RI5TicvgPjEL4SjGf8fn/abAbdA6uCaiRhdxM4S7sGm/OJRGJBeGoTRp7P5xdA5K34HQgETg4PD38Xksjq0ZzBceT1qyX68fHx7mKxOA8/B+HnMzI7wcwsGm5sbPyAog2KaVyGu2JkSlSaV7IfvBfgXTX1ssaJPIU/tscK+q3b5gNQ3SDbaANx0IykHwSSBbcdCTxit6uukHZqxkmTHPUQIYFL9S7tLj+8m4juOhWQ33YRGgDshll8fLD6IV+bXNThMpy+Qgf5oZvHGZ8177RpU13fooTtGxtG9zFZRVq9LFgNg01gD/lg4B041cwG1cLzrV5paWkZ/KcWrhGAB6rbwjprL5dxcnLyMF60FE6i8WXUN+L8fz8r29PJ6dc7N4MRAAAAAElFTkSuQmCC" alt="">
             
                <p>距结束&nbsp;&nbsp;</p>
                <span class="t">{{h}}</span>:
                <span class="t">{{m}}</span>:
                <span class="t">{{s}}</span>
            </span>
            </div>
            <div class="mn-card-item home-flashsale" ref="outDiv">
                <div class="lists">
                <div class="commodityShow"  v-for="item in oneList" :key="item.id"  @click="jumpProudcts(item.SsuId)">
                    <div class="freshes-image flashsale-img"><img :src="item.PictureIds" alt=""></div>
                    <div class="name">{{item.ProductName}}</div>
                    <div class="activity-label" v-if="item.ActivityLabel">{{item.ActivityLabel}}</div>
                    <div class="activity-none" v-else></div>
                    <div class="price">{{item.DefaultMoney}}<em>&nbsp;/ {{item.Unit}}</em></div>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    data(){
        return {
            oneList:[],
            pageLoad:false,
            h:"07",
            m:"07",
            s:"07",
            id:'',
        }
    },
    created(){
        // this.times();
        this.getProductsList();
    },
    methods:{
        times(){
            setInterval(_=>{
                var Time = new Date('2019/12/02');
                var nowTime = new Date();
                //计算两个日期差距的毫秒
                var ms = Time - nowTime;
                this.h = parseInt(ms%(24*60*60*1000)/(60*60*1000));
                this.m = parseInt(ms%(24*60*60*1000)%(60*60*1000)/(60*1000));
                this.s = parseInt(ms%(24*60*60*1000)%(60*60*1000)%(60*1000)/1000);
                 if(this.h < 10){
                    this.h = "0" + this.h;
                }
                if(this.s < 10){
                    this.s ="0" + this.s;
                }
                if(this.m < 10){
                    this.m = "0" + this.m;
                }
               
            })
        },
        getProductsList(){
            this.$axios("https://api1.34580.com/sz/Home/FlashSaleRequest?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype=9").then(res=>{
                const data = res.data.Data.FlashSaleProducts;
                const Data = data.map(item=>{
                    item.PictureIds = "http://picpro-sz.34580.com/sz/ImageUrl/" + item.PictureIds.slice(0,6) +"/160.jpeg";
                    return item;
                })
                this.oneList = Data;
                // console.log(this.oneList);
                this.pageLoad = true;
                
            })
        },
        jumpProudcts(id){
            // console.log(id);
            this.id = id;
            this.$router.push({name:"jumpProduct",query:{id:this.id}});
            
        }
    },
    mounted(){
        const scrDiv = this.$refs.outDiv;
        this.scroll = new BScroll(scrDiv,{
            //解决点击失效的问题
            tap:true,
            click:true,
            scrollX:true,
            probeType:3,
        })
    }
}
</script>

<style  scoped>
.mn-card{
    height:14rem;
    width:100%;
    padding: 0.2rem 0.4rem;
}

.home-flashsale-title{
    height:3rem;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
.count-down{
    display:block;
    height:1.2rem;
    width:10rem;
    display: flex;
}
.count-down>img{
    height:1rem;
    width:1rem;
    margin-right:0.4rem;

}
p{
    font-size:1rem;
}
.t{
    display:block;
    background:#000;
    height:1.3rem;
    width:1.3rem;
    color:#fff;
    line-height:1.3rem;
    text-align: center;
    font-size:0.8rem;
}
/* 最外层div */
.mn-card-item{
    overflow: hidden;
    height:11rem;
    width:100%;
   
}
/* 内部div */
.lists{
    display: inline-flex;
}
.commodityShow{
    height:100%;
    width:6.5rem;
    flex:0 0 auto;
    overflow: hidden;
    margin-right:.1rem;

}
.freshes-image{
    height:6rem;
    width:6rem;
}
.freshes-image>img{
    height:100%;
    width:100;
}
.name{
    font-size: .875rem;
    width: 100px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

}
.activity-label{
    text-overflow: ellipsis;
    padding: 1px .1rem;
    border-radius: 1rem;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    line-height: 1;
    color: #ff550f;
    font-size: .6875rem;
    border: 1px solid #ff550f;
    background-color: #fff;
    max-width: 100%;
}
.activity-none{
    height: 1.5625rem;
    width: 100%;
}
.price{
    margin-top:0.2rem;
    font-size:.6rem;
    color:red;
}
em{
    font-style:normal;
    font-size: .875rem;
    color: #aaa;
    width: 100px;
}
</style>