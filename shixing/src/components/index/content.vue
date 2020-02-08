<template>
    <div class="fresh-row flex-1" ref="Content">
        <div class="mn-scroller-contents" >
                <!-- banner -->
                <Banner />
                <!-- point-wrapper -->
                <pointWrapper />
                <!-- sections -->
                <sections />
                <!-- tabContent 跳转按钮 -->
                <tabContent/>
                <div class="black"></div>
                <!-- listScrollOne -->
                <listScrollOne />
                <!-- midContent -->
                <midContent/>
                <!-- btmContent -->
                <btmContent/>
                <!-- goTop -->
                <goTop v-show="flag" />
            </div>
    </div>
</template>

<script>
import Banner from "./banner";
import pointWrapper from "./point-wrapper";
import sections from "./sections";
import tabContent from "./tabContent";
import listScrollOne from "./listScrollOne";
import midContent from "./midContent";
import btmContent from "./btmContent";
import goTop from "./goTop";
export default {
    data(){
        return {
            flag:false,
           
        }
    },
    components:{
        Banner,
        pointWrapper,
        sections,
        tabContent,
        listScrollOne,
        midContent,
        btmContent,
        goTop
    },
    methods:{
        goTopHide(){
            const appHeight = document.querySelector("#app").clientHeight;
            const scrollTop = this.$refs.Content.scrollTop;
            this.scrollTop = scrollTop;
            if(scrollTop >= 300){
                this.flag = true;
            }else{
                this.flag = false;
            }
        }
    },
    mounted(){
        this.$refs.Content.addEventListener("scroll",this.goTopHide);
    
    }
}
</script>

<style  scoped>
.fresh-row{
    width:100%;
    height:35.5rem;
    flex:1;
    overflow: scroll;
}
.mn-scroller-contents{
    height:100%;
    width:100%;
    margin-bottom:3rem;
}
.black{
    height:0.5rem;
    width:100%;
    background:#ccc
}
</style>