<template>
  <div class="contentC">
    <classifyLeft/>
    <classifyRight v-if="onOff == 9"/>
    <classifyRightOne v-else/>
  </div>
</template>

<script>
import classifyLeft from "./classifyLeft";
import classifyRight from "./classifyRight";
import classifyRightOne from "./classifyRightOne"
import bus from "../../router/bus.js";
export default {
  data(){
    return {
      onOff:9,
    }
  },
  components:{
    classifyRight,
    classifyLeft,
    classifyRightOne
  },
  created(){
  },
  methods:{
  
  },
  mounted(){
    bus.$on("Id",data=>{
      this.onOff = data;
    })
  }
};
</script>

<style scoped>
.contentC{
  width:100%;
  flex:1;
  position: relative;
  overflow: hidden;
}


</style>