<template>
    <div class="tabContent" v-if="pageLoad">
        <mt-swipe :auto="0">
            <mt-swipe-item class="mn-carousel-item home-shortcunicons">
               <div class="home-shortcunicons-item" v-for="(item,index) in showData" :key="item.id" v-show="index < 10" @click="jumpClassify">
                   <img :src="item.URL" alt="">
                   <p>{{item.Name}}</p>
               </div>
              
            </mt-swipe-item>
            <mt-swipe-item >
                 <div class="home-shortcunicons-item" v-for="(item,index) in showData" :key="item.id" v-show="index >= 10" @click="jumpClassify">
                   <img :src="item.URL" alt="">
                   <p>{{item.Name}}</p>
               </div>
              
            </mt-swipe-item>
        </mt-swipe>
    </div>
   
</template>

<script>

export default {
    data(){
        return {
            showData:[],
            pageLoad:false,
        }
    },
    created(){
        this.getShowList();
    },
    methods: {
      getShowList(){
          this.$axios("https://api1.34580.com/sz/Home/ShortcutIconRequest?accesstoken=01f70b79dabd4c72&customerguid=b780e3f1-78b1-4f45-aab6-cbf35a05a90e&sourcetype=9").then(res=>{
              const showData = res.data.Data.ShortcutIcons;
              this.showData = showData;
              this.pageLoad = true;
          })
      },
      jumpClassify(){
          this.$router.push({path:"classify"});
      }
    }
}
</script>

<style scoped>
.tabContent{
    height:11rem;
    width:100%;
    padding:.1rem .4rem;
  
}
.mn-carousel-item{
    display:flex;
}
.home-shortcunicons-item{
    float: left;
    height:4rem;
    width:20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top:0.5rem;
}
.home-shortcunicons-item>img{
    height:2.3rem;
    width:2.3rem;
    margin-bottom:0.2rem;
}
.home-shortcunicons-item>p{
    font-size:.75rem;
    color:#666;
}

</style>