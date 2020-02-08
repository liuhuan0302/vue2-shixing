<template>
    <div class="PReview">
      <div class="content">
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
        <userReview/>
      </div>
        <PFooter/>
    </div>
</template>

<script>
import userReview from "./userReview";
import PFooter from "./PFooter";
export default {
    components:{
        userReview,
        PFooter
    }
}
</script>

<style  scoped>
.PReview{
    height:100%;
    width:100%
}
.content{
    width:100%;
    padding: 0 .4rem; 
}
</style>