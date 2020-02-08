<template>
    <div class="headerM">
       <div class="user-information">
           <div class="avatar">
               <img src="data:image/png;base64,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" alt="">
           </div>
           <div class="information" @click="goLogin">
               <div class="name">{{$store.getters.getUsersInfo}}</div>    
               <div class="grade-wrapper">
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADhklEQVRIia2WW2wUVRjHf+fM2dntLtt7XUWKNK3UBB4QWSNyiYm3pEJCeOiLEXgyPpCYoBLgHWyIiYmJ8amE6AMRrQkRFWNilCIlQLkUlIay2QCmXMxSsduF7e7M+jBnlu52dnZb/SfnYb7zff/fZOZ85xzx6eU3qSIBrAPeANYAXUCTnpsArgEngaPAIFDwM1M+cxLYBuzWEC/F9FgDfKDhHwIHAbuSqZc6gFNAvw/MS1265pT2qAn4EnAaiM8BVK649lhfDfga8CPQ+h9grlqBn4DXKwG7ga8B83+AuTK1Z7cbcBeNAXwBRAFaQotpNJ8oVtmFPMnJ4flCF2jv1YDlArcy45/1tO8gaj76qlkrQ//o2/MFor23Af0Sp892z5w9NLyXr87v59L4cSfg21k1axcgFM5KKln6D0N3+DN/i7bsQs9KgcA0wrPiWWvKD9gFrFdAT/mMMiXKlBiGd5u+EOvl2daNs+K/jB/gj4mf/aA9CnjRL8NLo7dOk7k/zVMty1nU2E02n+HsjWPcnLpSeStxtFoBT88VeDd3DWvK4vklG7DsPIfP93F7+grBcABl+hKXKh5txDWrNbqQzR27CBhBjox8QkqOEWkM1lLa5Ld5e6pO1bNh8U7qVD0nEgMkHv5GKBIgGmjjraUfF/M+v/ou6VxqVr3COWJitcCUNOlp30FDMMal8V8Zuv0l3U+uZFnzy7RHlpXkFizPXpqQwFgtMCEkry7aTizcRTI1wrHEZ0QaTZZEnqOzPu7ZJh66qoAhYG21zHWPb6EjupK7k9f55vf9hJudv3HmxlEuJgeJmA1sXvFeNZshCXxXLSuowixvfoXM9H0Oj+wj1FRACGcuY/xFyhjjnkhWswH4XgLHcU5qX+WsLIfO7aWwYBIhRTFuBCRmyCDg3w5oxqDE2Sn7vDLsggWAZecYuPAR6eBNDFXVuJL6ANtti4PAO8Cqkle6d5bHgp2cTB7hH3WdYGjOXeRqWDMQM25tzwBncM4vAKycTfrvLOEGk4Bp+FvaknyqrvioWh6AtAHSOMfTKJTufKNALzDtBoyApKGtrjoMKAgb0TRZHAVho716XVg5kPdXDfwAbNJvNScJAYaSxSEEaWCT9ixq1grQCXGc7z5fDQPxchiU/sNyuRfhPUBnjaAEsA+fi7DfsrOBA7p4LbAR5+zspPSqn8C56n8LnKgEcvUvwdj0+NbCatQAAAAASUVORK5CYII=" alt="">
                   <span>注册会员</span>
               </div>
           </div>
            <div class="user-information-right">
                   <img src="data:image/png;base64,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" alt="">
                   <p>会员码</p>
               </div>
        </div>
    </div>
</template>

<script>
import Footer from "../public/footer.vue";
import bus from "../../router/bus.js";
import {mapState, mapGetters,mapActions,mapMutations} from "vuex"
export default {
    data(){
        return {
            
        }
    },
   methods:{
       goLogin(){
           this.$router.push({path:"login"})
       }
   },
   computed:{
    //    userName(){
    //        console.log(this.$store.state.name)
    //        return this.$store.getters.getUsersInfo;
          
    //    },
        // ...mapGetters(["getUsersInfo"]),
   },
   mounted(){
       
   console.log(this.$store.getters.getUsersInfo)
    // if(this.$store.state.name){
    //     this.username = this.$store.state.name;
    // }else{
    //     this.username = "登录/注册";
    // }
    //    if( this.$route.query.name){
    //        this.username = this.$route.query.name;
    //        localStorage.name = this.username;
    //        console.log(this.username)
    //    }else{
    //        if(localStorage.name){
    //            this.username = localStorage.name;
    //        }else{
    //            this.username = "登录/注册";
    //        }   
    //     }
          
       }
   }

</script>

<style  scoped>
.headerM{
    height:14rem;
    width:100%;
    background:green;
   
    
}
.user-information{
    padding:0 .6rem;
    height:100%;
    width:100%;
    display: flex;
    align-items: center;
}
.avatar{
    height:4.5rem;
    width:4.5rem;
    margin-right: 1rem;
}
.avatar>img{
    height:100%;
    width:100%;
}
.information{
    height:4.2rem;
    width:8rem;
   padding-top:0.6rem;
   margin-right:5rem;
}
.name{
    font-size:1.2rem;
    line-height:1.2rem;
    color:#fff;
}
.grade-wrapper{
    margin-top:.5rem;
    height:1.4rem;
    width:7rem;
    display: flex;
    font-size: 0.8rem;
    line-height: 1.4rem;
    border-radius: 1.2rem;
    background: rgba(0,0,0,.2);
    box-shadow: inset 0 1px 0 1px rgba(0,0,0,.2);
}
.grade-wrapper>span{
    margin:auto;
    font-size:0.8rem;
    color:#fff;
    line-height:1.4rem;
    
}
.grade-wrapper>img{
    height:1.3rem;
    width:1.3rem;
}
.user-information-right{
    height:3rem;
    width:3rem;
}
.user-information-right>img{
    display: block;
    margin:0 auto;
    height:1.5rem;
    width:1.5rem;
    margin-bottom: 0.2rem;
}
</style>