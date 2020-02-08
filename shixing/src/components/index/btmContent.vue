// 首页最下面的版块
<template>
    <div class="btmContent">
        <btmBanner/>
        <btmList/>
        <btmBanner/>
        <btmList/>
        <btmBanner/>
        <btmList/>
        <btmBanner/>
        <btmList/>
        <Bottom/>
    </div>
</template>

<script>
import btmBanner from "./btmBanner.vue";
import btmList from "./btmLists.vue";
import Bottom from "./bottom";
export default {
    components:{
         btmBanner,
         btmList,
         Bottom,
    }
}
</script>

<style  scoped>

</style>