// 首页最下面的版块list
<template>
  <div class="btmList" v-show="pageLoad">
    <div class="mn-card-item home-flashsale" ref="outDiv">
      <div class="lists">
        <div class="commodityShow" v-for="item in oneList" :key="item.id">
          <div class="freshes-image flashsale-img">
            <img :src="item.PictureIds" alt />
          </div>
          <div class="name">{{item.ProductName}}</div>
          <div class="activity-label" v-if="item.ActivityLabel">{{item.ActivityLabel}}</div>
          <div class="activity-none" v-else></div>
          <div class="price">
            <span class="cart"><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICB2aWV3Qm94PSIwIDAgNzIgNzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyIDcyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTQ1NTI4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI0LjEwMSwyMy45NDVoMy4wMzNjMCwwLDEuMTE2LDAuMjExLDEuMTE2LDEuNzI4CiAgICBsMi4yNjUsMTYuODE3YzAsMCwwLjA2OSwwLjc3NiwxLjA0NSwwLjc3NmgxNS44NTkiLz4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNFNDU1MjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjguNTUxLDI3LjkyaDE4Ljg2OGMwLDAsMS40NjUtMC4wMjcsMS40NjUsMS4zMTMKICAgIGMwLDAtMC42ODUsNS43OTUtMS43MDksNy44MjdjMCwwLTAuNjU5LDEuODMzLTMuMzExLDIuMTg4YzAsMC0xMy41OTMsMS42MTUtMTMuNTkzLDEuNDMyTDI4LjU1MSwyNy45MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNMzIuNTcxLDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzMKICAgIGMtMC45NDcsMC0xLjcxNS0wLjc3NS0xLjcxNS0xLjczM0MzMC44NTYsNDYuNDU2LDMxLjYyNCw0NS42ODIsMzIuNTcxLDQ1LjY4MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNNDMuOTg3LDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzNzLTEuNzE1LTAuNzc1LTEuNzE1LTEuNzMzCiAgICBDNDIuMjcyLDQ2LjQ1Niw0My4wNCw0NS42ODIsNDMuOTg3LDQ1LjY4MnoiLz4KPC9nPgo8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ExQTFBMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iMzYuNDkyIiBjeT0iMzYuNTQ3IiByPSIyNS42NjciLz4KPC9zdmc+Cg==" alt=""></span>
            {{item.DefaultMoney}}
            <em>&nbsp;/ {{item.Unit}}</em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      oneList: [],
      pageLoad: false
    };
  },
  created() {
    // this.times();
    this.getProductsList();
  },
  methods: {
    getProductsList() {
      this.$axios(
        "https://api1.34580.com/sz/Home/FlashSaleRequest?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype=9"
      ).then(res => {
        const data = res.data.Data.FlashSaleProducts;
        const Data = data.map(item => {
          item.PictureIds =
            "http://picpro-sz.34580.com/sz/ImageUrl/" +
            item.PictureIds.slice(0, 6) +
            "/160.jpeg";
          return item;
        });
        this.oneList = Data;
        this.pageLoad = true;
      });
    }
  },
  mounted() {
    const scrDiv = this.$refs.outDiv;
    this.scroll = new BScroll(scrDiv, {
      scrollX: true,
      probeType: 3
    });
  }
};
</script>

<style  scoped>
.btmList {
  height: 12rem;
  width: 100%;
  padding: 0.2rem 0.4rem;
}

/* 最外层div */
.mn-card-item {
  overflow: hidden;
  height: 11rem;
  width: 100%;
}
/* 内部div */
.lists {
  display: inline-flex;
}
.commodityShow {
  height: 100%;
  width: 6.5rem;
  flex: 0 0 auto;
  overflow: hidden;
  margin-right: 0.1rem;
}
.freshes-image {
  height: 6rem;
  width: 6rem;
}
.freshes-image > img {
  height: 100%;
  width: 100;
}
.name {
  font-size: 0.875rem;
  width: 100px;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.activity-label {
  text-overflow: ellipsis;
  padding: 1px 0.1rem;
  border-radius: 1rem;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  line-height: 1;
  color: #ff550f;
  font-size: 0.6875rem;
  border: 1px solid #ff550f;
  background-color: #fff;
  max-width: 100%;
}
.activity-none {
  height: 1.5625rem;
  width: 100%;
}
.cart{
    display: block;
    height:1.5rem;
    width:1.5rem;
    margin-right:0.2rem;
}
.cart>img{
    height:100%;
    width:100%;
}
.price {
  margin-top: 0.2rem;
  font-size: 0.6rem;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}
em {
  font-style: normal;
  font-size: 0.875rem;
  color: #aaa;
  width: 100px;
}
</style>