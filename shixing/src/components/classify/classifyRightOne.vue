<template>
  <div class="classify-right">
    <div class="right">
      <div class="out-title" v-for="item in dataTitle" :key="item.MetaKeywords">
        <div class="title">
          <p>{{item.MetaKeywords}}</p>
          <p>全部</p>
        </div>
        <div class="category-contents-container" v-for="items in item.SmallCategories"
          :key="items.Id"
        >
          <div class="category-square-item">
            <img :src="items.PictureId" alt />
          </div>
          <p>{{items.Name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../router/bus.js";
export default {
  data() {
    return {
      dataTitle: [],
      flag: 0,
      ID: "",
      url: ""
    };
  },
  created() {
    this.getHotCategoryList();
  },
  methods: {
    getHotCategoryList() {
      bus.$on("Id", id => {
        this.ID = id;
        if (this.ID == 9) {
          this.url =
            "https://api1.34580.com/sz/Products/HotCategoryRequest?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype=" +
            this.ID;
          // console.log(url);
        } else {
          this.url =
            "https://api1.34580.com/sz/Products/SubCategoryRequest?sourcetype=9&Id=" +
            this.ID;
          // console.log(url);
        }
        console.log(this.url);
        this.$axios(this.url).then(res => {
          // console.log(res);
          this.dataTitle = res.data.Data.SubCategories;
          // console.log(this.dataTitle);
          for (let i = 0; i < this.dataTitle.length; i++) {
            // console.log(this.dataTitle[i].SmallCategories)
            const items = this.dataTitle[i].SmallCategories.map(items => {
              items.PictureId =
                "http://picpro-sz.34580.com/sz/ImageUrl/" +
                items.PictureId +
                "/160.jpeg";
              return items;
            });
            this.dataTitle[i].SmallCategories.splice().push(items);
          }
          this.dataTitle = this.dataTitle;
        });
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.classify-right {
  height: 100%;
  width:100%;
  padding-left: 30%;
  position: absolute;
  right: 0;
  top: 0;
  padding-bottom: 3.2rem;
}
.right {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.out-title{
  margin-bottom: 0.3rem;
}
.title {
  height: 2.2rem;
  width: 100%;
  padding: 0.4rem 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title > p {
  font-size: 1rem;
  color: #bbb;
  line-height: 1.5rem;
}
li {
  height: 3rem;
  width: 100%;
  border-top: 0.1rem solid #bbb;
  font-size: 0.8rem;
  line-height: 3rem;
  text-align: center;
  color: #666;
  background: #f2f2f2;
}
.category-contents-container {
  height: 6.5rem;
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: left;
}
.category-square-item {
  height: 4.5rem;
  width: 4.5rem;
  padding: 0.2rem;
  margin-bottom: 0.3rem;
}
.category-square-item > img {
  height: 100%;
  width: 100%;
}
p {
  font-size: 0.8rem;
  color: #666;
}
</style>