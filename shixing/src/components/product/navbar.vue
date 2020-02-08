<template>
  <div class="nav-bar" >
    <mt-navbar v-model="selected" class="tab-bar" >
      <mt-tab-item id="1">介绍</mt-tab-item>
      <mt-tab-item id="2">规格</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <Intro/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <productUnit/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Intro from "./introduction";
import productUnit from "./productUnit";
export default {
    data(){//绑定数据(关联tab和内容)
        return {
            selected :"1",//注意此处为字符串(关联到1 就是tab1的内容)
        }
    },
    components:{
        Intro,
        productUnit,
    },
};
</script>

<style  scoped>
  .nav-bar{
    width:100%; 
    flex:1;
    margin-bottom: 3rem;
    padding:3rem 0 0 0;
  } 
  .tab-bar{
      border-bottom:0.01rem solid #bbb;
      height:2.5rem;
      width: 100%;
      position:fixed;
      top:2.5rem;
      left:0;
      z-index:10;
      float: left;
  } 
</style>
