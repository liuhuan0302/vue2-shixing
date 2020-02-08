<template>
  <div class="classify-right">
    <div class="right">
      <div class="category-contents-container" v-for="items in DataTwo" :key="items.id">
        <div class="category-square-item">
          <img :src="items.PictureId" alt />
        </div>
        <p>{{items.Name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../router/bus.js";
export default {
    data() {
        return {
            DataTwo: [],
            flag: 0,
            ID:'',
            url:'',
        };
    },
    created() {
        this.getHotCategoryList();   
    },
    methods: {
        getHotCategoryList() {
            // bus.$on("Id",(id)=>{
            //    this.ID = id;
            //     if(this.ID == 9){
            //         this.url = "https://api1.34580.com/sz/Products/HotCategoryRequest?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype="+ this.ID ;
            //         // console.log(url);
            //     }else{
            //         this.url = "https://api1.34580.com/sz/Products/SubCategoryRequest?sourcetype=9&Id="+this.ID ;
            //         // console.log(url);
            //     }
            //     // console.log(this.url);
            // })
            this.$axios("https://api1.34580.com/sz/Products/HotCategoryRequest?sourcetype=9").then(res => {
                const data = res.data.Data.HotCategoryList;
                // console.log(data[0].PictureId);
                const DataTwo = data.map(item => {
                item.PictureId =
                    "http://picpro-sz.34580.com/sz/ImageUrl/" +
                    item.PictureId +
                    "/160.jpeg";
                return item;
                });
                this.DataTwo = DataTwo;
            });
            },
        },
        mounted(){
           
        },
    };
</script>

<style scoped>
.classify-right {
  height: 100%;
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