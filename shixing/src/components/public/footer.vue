<template>
  <div class="footer">
    <router-link to="/index">
      <div>
        <p class="el-icon-s-home"></p>
        <span>首页</span>
      </div>
    </router-link>
    <router-link to="/classify">
      <div>
        <p class="el-icon-menu"></p>
        <span>分类</span>
      </div>
    </router-link>
    <router-link to="/car">
      <div>
        <p class="el-icon-shopping-cart-full"></p>
        <span>购物车</span>
      </div>
    </router-link>
    <router-link to="/my">
      <div>
        <p class="el-icon-s-custom"></p>
        <span>我的</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.footer {
  height: 3rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #fff;
}
.footer > a{
  display: block;
  float: left;
  width: 25%;
  height: 3rem;
  color:#aaa;
}
.footer > a > div {
  padding-top:0.5rem;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
p {
  display: block;
  margin-bottom: 0.1rem;
}
span {
  display: block;
  font-size: 1rem;
}
</style>