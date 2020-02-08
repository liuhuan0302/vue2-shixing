<template>
  <div class="pheader">
    <div class="outDiv">
      <div class="header">
        <router-link :to="{path:'/product/productIndex',query:{id:$route.query.id}}">
          <p :class="{'active':index == 1}" @click="index=1">商品</p>
        </router-link>

        <router-link :to="{path:'/product/detailList',query:{id:$route.query.id}}">
          <p :class="{'active':index == 2}" @click="index=2">详情</p>
        </router-link>

        <router-link :to="{path:'/product/Preview',query:{id:$route.query.id}}">
          <p :class="{'active':index == 3}" @click="index=3">评价</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../router/bus.js";
export default {
  data() {
    return {
      onOff: 1,
      on: "",
      index: 1
    };
  },
  methods: {},
  mounted() {
    // console.log(this.$route.query.id);
    // bus.$on("ID", res => {
    //   // console.log(res);
    // });
  }
};
</script>

<style  scoped>
.pheader {
  width: 100%;
  height: 2.5rem;
}
.outDiv {
  width: 100%;
  height: 2.5rem;
}
.header {
  height: 2.5rem;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fff;
}
a {
  display: block;
  height: 100%;
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
}
span {
  display: block;
  height: 100%;
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  height: 100%;
  width: 5rem;
  font-size: 1rem;
  text-align: center;
  line-height: 2.5rem;
}
.active {
  border-bottom: 0.2rem solid green;
}
</style>