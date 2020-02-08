<template>
  <div class="content" v-show="pageLoad">
    <div class="product-detail">
      <div class="productBanner">
        <mt-swipe :auto="0" class="banner">
          <mt-swipe-item v-for="item in ImgList" :key="item.id">
            <img :src="item" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="product-information">
        <div class="product-information-title">
          <h3>{{dataList.productInfo.productName}}</h3>
          <p class="intro">{{dataList.productInfo.productSubtitle}}</p>
        </div>
        <div class="product-information-price">
          <em>¥{{dataList.productInfo.unitPeriodMoney}}</em>
          <em>&nbsp;/&nbsp;{{dataList.productInfo.unit}}</em>
        </div>
        <div class="product-sale-info">
          <span>
            <em>¥</em>
            <em>{{dataList.productInfo.unitDefaultMoney}}</em>
            <em>/{{dataList.productInfo.unit}}</em>
          </span>
          <p>已售12133</p>
        </div>
      </div>
      <div class="black"></div>
    </div>
    <div class="product-other">
      <div class="activity">
        <span class="tag">促销</span>
        <div class="activity-container">
          <span class="type-name">{{dataList.productActivityList[0].typeName}}</span>
          <span class="description">{{dataList.productActivityList[0].description}}</span>
        </div>
        <div class="more">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTkgNSI+CiAgPGcgaWQ9Im7ku7botbfllK4v5om+55u45Ly8IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9IjItbuS7tui1t+WUri3llYblk4Hor6bmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDAgLTUzNCkiPgogICAgICA8ZyBpZD0i5L+D6ZSA5qih5Z2XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxNCkiPgogICAgICAgIDxnIGlkPSJkZXRhaWxzX2ljb25fbW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwIDIwKSI+CiAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIxLjUiIGN5PSIyLjUiIHI9IjEuNSIgZmlsbD0iI0Q4RDhEOCIvPgogICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHkiIGN4PSIxNy41IiBjeT0iMi41IiByPSIxLjUiIGZpbGw9IiNEOEQ4RDgiLz4KICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGN4PSI5LjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzMzMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
            alt
          />
        </div>
      </div>
      <div class="service">
        <div class="tag">服务</div>
        <ul class="list">
          <li>轻松退&nbsp;•</li>
          <li>站点自提&nbsp;•</li>
          <li>全程冷链&nbsp;•</li>
          <li>食材质检&nbsp;</li>
          <li>•&nbsp;全场免运费</li>
        </ul>
        <div class="more">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTkgNSI+CiAgPGcgaWQ9Im7ku7botbfllK4v5om+55u45Ly8IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9IjItbuS7tui1t+WUri3llYblk4Hor6bmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDAgLTUzNCkiPgogICAgICA8ZyBpZD0i5L+D6ZSA5qih5Z2XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxNCkiPgogICAgICAgIDxnIGlkPSJkZXRhaWxzX2ljb25fbW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwIDIwKSI+CiAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIxLjUiIGN5PSIyLjUiIHI9IjEuNSIgZmlsbD0iI0Q4RDhEOCIvPgogICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHkiIGN4PSIxNy41IiBjeT0iMi41IiByPSIxLjUiIGZpbGw9IiNEOEQ4RDgiLz4KICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGN4PSI5LjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzMzMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
            alt
          />
        </div>
      </div>
    </div>
    <Review />
  </div>
</template>

<script>
import Review from "./review";
import bus from "../../router/bus.js";
export default {
  data() {
    return {
      dataList: [],
      ImgList: [],
      id: "",
      url: "",
      detailImg: [],
      pageLoad: false
    };
  },
  components: {
    Review
  },
  created() {
    this.id = this.$route.query.id;
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      //获取页面跳转时传递过来的id
      // console.log(this.$route.query);
      // this.id = this.$route.query.id;
      // console.log(this.id);
      this.url =
        "https://api1.34580.com/sz/productdetail/detail?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype=9&ssuId=" +this.id;
      // console.log(this.url)
      this.$axios(this.url).then(res => {
        this.dataList = res.data.Data;
        this.detailImg = this.dataList.productInfo.fullDescription;
        console.log(this.detailImg);
        console.log(this.dataList);
        this.ImgList = this.dataList.productInfo.banners;
        // console.log(this.ImgList);
        this.ImgList = this.ImgList.map(item => {
          item = "http://picpro-sz.34580.com/sz/ImageUrl/" + item + "/160.jpeg";
          return item;
         
        });
        //  console.log(this.ImgList);
         this.pageLoad = true;
      });
    }
  },
  mounted() {
    bus.$emit("ID", this.id);
  }
};
</script>

<style  scoped>

.content {
  min-height: 32rem;
  width: 100%;
}
.product-detail {
  height: 32rem;
  width: 100%;
}
.productBanner {
  height: 23.5rem;
  width: 100%;
}
img {
  height: 23.5rem;
  width: 100%;
}
.product-information {
  height: 8rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
}
.product-information-title {
  height: 3.4rem;
  width: 100%;
}
.product-information-title > h3 {
  margin-bottom: 0.3rem;
}
.product-information-title > p {
  font-size: 0.8rem;
  line-height: 1.1rem;
}
.product-information-price {
  height: 2rem;
  width: 100%;
  font-size: 1rem;
  line-height: 2rem;
}
.product-information-price > em:nth-child(1) {
  color: red;
  font-size: 1.2rem;
}
.product-sale-info {
  height: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #bbb;
}
em {
  font-style: normal;
  font-size: 1rem;
}
.black {
  height: 1rem;
  width: 100%;
  background: #bbb;
}
/* product-other */
.product-other {
  height: 6.2rem;
  width: 100%;
  padding: 0.3rem 0.6rem;
}
.activity{
    height:2.2rem;
    width:100%;
    display: flex;
    align-self: center;
    margin-bottom: 0.3rem;
}

.tag{
    align-self: flex-start;
    color: #999;
    font-size: .875rem;
    white-space: nowrap;
    margin-right:0.5rem;
   
}
.activity>.tag{
    line-height: 2.2rem;
}
.activity-container{
    margin-left:.3rem;
    height:2.2rem;
    width:18rem;
    display: flex;
    align-items: center; 
}
.type-name{
    display: block;
    font-size:0.8rem;
    height:1.3rem;
    width:2.5rem;
    border-radius: 30%;
    border:.1rem solid red;
    line-height:1.3rem;
    text-align: center;
    margin-right:0.5rem;
}
.description{
    font-size:0.8rem;
    color:#333;
}
.more{
    height: 1.2rem;
    width:1.2rem;
    margin-top:0.4rem;
}
.more>img{
    height:100%;
    width:100%;
}
.service{
    height:2.2rem;
    width:100%;
    display: flex;
    align-self: center;
}
.list{
    height:3rem;
    width:16rem;
    display: flex;
    flex-wrap:wrap; 
    margin-right:2.3rem; 
}
li{
    font-size:0.8rem;
    color:#333;
    margin-right:0.3rem;
}
.intro{
    text-overflow:ellipsis;
    overflow:hidden; 
    white-space:nowrap;
}
</style>