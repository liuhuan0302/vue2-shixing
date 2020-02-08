<template>
  <div class="detailList">
    <navBar />
  </div>
</template>

<script>
import bus from "../../router/bus.js";

import navBar from "./navbar";
export default {
  components: {
    navBar
  },
  data(){
    return {
      id:''
    }
  },

  mounted() {
    bus.$on("ID", res => {
      // console.log(res);
    });
    this.id = this.$route.query.id
  } 
};
</script>

<style  scoped>
.detailList {
  display: flex;
  width: 100%;
}
</style>