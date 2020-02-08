<template>
    <div class="goTop" @click="goTop">
        <p>^</p>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    methods:{
        goTop(){
          document.querySelector(".fresh-row").scrollTop = 0;
        }
    },
    mounted(){
      
    }
}
</script>

<style  scoped>
.goTop{
    height:3rem;
    width:3rem;
    border-radius: 50%;
    background:rgba(0,0,0,0.6);
    position: fixed;
    right:1.5rem;
    bottom: 5rem;
    z-index:100;
    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    font-size:2.5rem;
    color:#fff;
    text-align: center;
}
</style>