<template>
    <div class="midContent">
        <div class="midContent-top">
            <div class="topImg">
                <img src="http://pic2.34580.cn/group1/M00/2F/24/wKgNY13SoAmANi4NAABxOMmFwpw70.jpeg" alt="">
            </div>
            <div class="topImg">
                <img src="http://pic2.34580.cn/group1/M00/1A/7D/wKgNYl3TJTKACtUyAAC9nsqmUYc49.jpeg" alt="">
            </div>
        </div>
        <div class="midContent-mid">
            <div class="midImg">
                <img src="http://pic2.34580.cn/group1/M00/1A/9C/wKgNYl3TupmAY2ByAABS3e5MTNk39.jpeg" alt="">
            </div>
            <div class="midImg">
                <img src="http://pic2.34580.cn/group1/M00/2E/A7/wKgNY13R_iuAJXDVAACmOCWJgKg58.jpeg" alt="">
            </div>
            <div class="midImg">
                <img src="http://pic2.34580.cn/group1/M00/1A/97/wKgNYl3TtAGAK2uxAAC9QutXAoY99.jpeg" alt="">
            </div>
        </div>
        <div class="midContent-bottom">
            <div class="btmImg">
                <img src="http://pic2.34580.cn/group1/M00/1A/43/wKgNYl3S2QqAZ3rwAACE_tgr3b8588.gif" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.midContent{
    padding:0 0.4rem;
    margin-bottom: 0.4rem;
}
.midContent-top{
    height:14rem;
    width:100%;
    display: flex;
    justify-content: space-between;
    
}
.topImg{
    height:14rem;
    width:49%;
}
img{
    height:100%;
    width:100%;
}
.midContent-mid{
    height: 10rem;
    width:100%;
    display: flex;
    justify-content: space-between;
    margin:0.4rem 0;
}
.midImg{
    height:100%;
    width:32%;
}
.btmImg{
    height:8rem;
    width:100%;
}
</style>