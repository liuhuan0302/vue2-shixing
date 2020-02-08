<template>
    <div class="my">
        <HeaderM/>
        <ContentM />
        <Footer/>
    </div>
</template>

<script>
import HeaderM from "./headerM.vue";
import ContentM from "./contentM.vue";
import Footer from "../public/footer.vue";
export default {
    components:{
        HeaderM,
        ContentM,
        Footer
    }  
}
</script>

<style scoped>
.my{
    height:100%;
    width:100%;
}
</style>