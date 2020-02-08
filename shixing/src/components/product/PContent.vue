<template>
  <div class="pcontent">
    <div class="inner_pcontent">
        <PContentTop/>
        <PContentBot/>
    </div>
  </div>
</template>

<script>
import PContentTop from "./PContentTop.vue";
import PContentBot from "./PContentBot.vue";
export default {
    components:{
       PContentTop,
       PContentBot 
    }
};
</script>

<style  scoped>
.pcontent{
    height:100%;
    width:100%;
    flex:1;
    overflow: scroll;
    margin-bottom: 3rem;
}

</style>