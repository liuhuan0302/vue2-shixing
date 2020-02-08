<template>
  <div class="pContentBot">
      <div class="product-recommend">
          <div class="product-recommend-title">-----您可能会喜欢</div>
          <div class="products">
              <div class="product_show" v-for="item in dataList" :key="item.id">
                  <img :src="item.PictureId" alt="">
                  <div class="name">{{item.ProductName}}</div>
                  <div class="info">{{item.PvStandard}}</div>
                  <div class="action">¥ {{item.PeriodMoney}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            dataList:[],
        }
    },
    created(){
        this.getProductInfo();
    },
    methods:{
        getProductInfo(){
            this.$axios("https://api1.34580.com/sz/Recommends/ProductRecommendRequest?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype=9&json=%7B%22PageSize%22:10,%22PageIndex%22:1,%22RecommendType%22:0%7D").then(res=>{
            
                this.dataList = res.data.Data;
                // console.log(this.dataList); 
                // console.log(this.ImgList);
                 this.dataList = this.dataList.map(item=>{
                    item.PictureId = "http://picpro-sz.34580.com/sz/ImageUrl/" +
                    item.PictureId +
                    "/160.jpeg";
                    return item;
                 })
                //  console.log(this.dataList);
            })
        }
    }
};
</script>

<style  scoped>
.pContentBot{
    width:100%;
    min-height:20rem;
}
.product-recommend{
    width:100%;
    min-height:8rem;
    padding:0.2rem 0.4rem;

}
.product-recommend-title{
    height:3rem;
    width:100%;
    text-align: center;
    line-height: 3rem;
    font-size:1rem;
    color:#333;
}
.products{
    min-height:50rem;
    width:100%;
    /* display: flex;
    justify-content: space-between;
    flex-wrap: wrap; */
}
.product_show{
    height:16rem;
    width:48%;
    margin-right:.45rem;
    margin-bottom: .8rem;
    float: left;
    background:#fff;

}
.product_show>img{
    height:11rem;
    width:100%;
}
.name{
    padding: .5rem .5rem 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info{
    font-size:0.8rem;
    line-height: 1.2rem;
    margin-bottom: .4rem;
    padding-left:0.3rem;
}
.action{
    font-size:1rem;
    line-height: 1.2rem;
    color:red;
     padding-left:0.3rem;
}
</style>