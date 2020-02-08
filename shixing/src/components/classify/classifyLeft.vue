<template>
    <div class="classify-left">
      <ul class="left" >
        <li :class="flag == 'a' ? 'active' : ''" @click="change">推荐分类</li>
        <li v-for="(item,index) in DataOne"  :key="item.id"  :class="{'active':flag === index}"  @click="change(index,$event)" :id="item.Id">{{item.Name}}
        </li>
      </ul>
    </div>
</template>

<script>
import bus from "../../router/bus.js";
export default {
  data(){
    return {
      DataOne:[],
      flag:"a",
      Id:"",
    }
  },
  components:{
   
  },
  created(){
    this.getCategoryAd();
   
  },
  methods:{
    getCategoryAd(){
      this.$axios("https://api1.34580.com/sz/Products/BigCategoryRequest?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype=9").then(res=>{
        const DataOne = res.data.Data;
        console.log(DataOne[0].Id);
        this.DataOne = DataOne;
      
      })
    },
    change(index,e){      
        if(typeof index == "number"){
            this.flag = index;
            this.Id = e.srcElement.id;
            this.Id = this.Id;
        }else{
            this.flag = "a";
            this.Id = 9;
        }
        bus.$emit("Id",this.Id);
    }
  }
};
</script>

<style scoped>
.classify-left {
  height: 100%;
  width: 30%;
  position: absolute;
  top:0;
  left: 0;
  z-index: 10;
}
.left {
  height: 100%;
  width: 100%;
  border-right: 0.1rem solid #bbb;
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
.active{
  background:#fff;
  color:green;
  border-left:0.2rem solid green;
}

</style>