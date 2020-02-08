<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
ul,li{
  list-style: none;
}
html,body{
  height:100%;
  width:100%;
  background: #f2f2f2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
  width:100%;
}
.router-link-active{
  color:#000 !important
}
    
.router-link-exact-active{
  color:red !important
}  
.active9{
  color:green !important
}
</style>
