<template>
    <div class="cartList">
        <contentCar/>
        <cartFooter/>
    </div>
</template>

<script>
import cartFooter from "./cartFooter.vue";
import contentCar from "./contentCar.vue";
export default {
    components:{
        cartFooter,
        contentCar
    }
}
</script>

<style  scoped>

</style>