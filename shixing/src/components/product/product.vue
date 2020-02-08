<template>
    <div class="product">
        <PHeader v-if="$route.meta.pHeader"/>
        <router-view></router-view>
        <PFooter/>
    </div>
</template>

<script>
import PHeader from "./PHeader.vue";
import PContent from "./PContent.vue";
import PFooter from "./PFooter.vue";
export default {
    props:["id"],
    components:{
        PHeader,
        PContent,
        PFooter,
    },
    mounted(){
        console.log(this.$route.meta);
    }
}
</script>

<style  scoped>
.product{
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
}
</style>