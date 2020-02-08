<template>
  <!-- download-top -->
  <div class="download-top" v-show="onOff">
    <div class="prefix-wrapper">
      <img @click="onOff=false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMAnfXcRBwCgGw1HhMM6OTUyrW0j1cScvYgAAAAc0lEQVQoz2XQSQ6EMAxE0Up6SBh6bt//qiAwKon/t29TtjT9J6HeZukVl9sZSkSTHmEyRJeu1WQod5kAJoAJYDKAAEkjIakmkBLQd4U6ipUVciHhU0k5N8cTfBfgIIAJYDLghwZS3wH0VtuA9NTcutjwGxaGkQtmpsT7GwAAAABJRU5ErkJggg==" alt />

      <img src="data:image/png;base64,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" alt="">
      <span>下载app，买菜更流畅</span>
    </div>
    <span>打开APP</span>
  </div>
</template>

<script>
export default {
    data(){
      return {
        onOff:true,
      }
    }
};
</script>

<style  scoped>
.download-top{
    padding:0 .625rem;
    height:3rem;
    background-color: rgba(0,0,0,.8);
    color: #fff;
    font-size: .8125rem;
    display: flex;
    align-items: center
}
.prefix-wrapper{
    display:flex;
    align-items: center;
}
.download-top img:nth-child(1){
   
    height:0.6rem;
    width:.6rem;
    margin-right:0.6rem;
}
.download-top img:nth-child(2){
    height:2rem;
    width:2rem;
    margin-right:0.6rem;
}
.download-top>span{
    margin-left: 6.3rem;
    width: 4rem;
    text-align: center;
    background-color: #49aa34;
    border-radius: 3px;
    line-height: 2;
}
   

</style>