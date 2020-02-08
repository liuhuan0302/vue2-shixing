<template>
    <div class="classify">
       <HeaderC/>
       <ContentC/>
       <Footer/>
    </div>
</template>

<script>
import HeaderC from "./headerC.vue";
import ContentC from "./contentC.vue";
import Footer from "../public/footer.vue"
export default {
    components:{
        HeaderC,
        ContentC,
        Footer
    },
    mounted(){
        console.log(this.$store.state.name)
    }  
}
</script>

<style scoped>
.classify{
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
}
.contentC{
    width:100%;
    height:30rem;
    /* flex:1;   */
}

</style>