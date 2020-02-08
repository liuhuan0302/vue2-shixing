<template>
    <div class="carousel-container">
        <mt-swipe :auto="4000" class="banner">
            <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/1A/44/wKgNYl3S2h6APbRlAAExdobA3Zk235.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/18/7E/wKgNY12lLseAXsiPAAJISZrH5x4270.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/2E/B1/wKgNY13SDFGAIWuTAAESzNn2KPo186.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/1A/78/wKgNYl3TGT2APZ_JAAJRwoYOAsk453.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/2F/2A/wKgNY13SqXaAb0-tAAF8D4jdQ0c455.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/1A/77/wKgNYl3TF7iALSmWAAKkFS3K77w949.gif" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/18/7E/wKgNY12lLseAXsiPAAJISZrH5x4270.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
       return {
            ImgData:[],
            pageLoad:false,
       }
    },
    created(){
        // this.getBanner();
    },
    methods:{
        getBanner(){
            this.$axios("https://api1.34580.com/sz/Home/AdvertisementPhotoshootRequest?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype=9&json=%7B%22TypeCode%22:1011,%22PlatForm%22:1500%7D").then(res=>{
                const ImgData = res.data.Data.PicUrl;
                this.pageLoad = true;
            })
        }
    }
}
</script>

<style  scoped>

.carousel-container{
    height:10rem;
    width:100%;
    padding:0 .5rem;
}
.banner{
    border-radius: .4rem;
}
img{
    height:100%;
    width:100%;
}
</style>