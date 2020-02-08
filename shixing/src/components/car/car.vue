<template>
  <div class="Car">
    <div >
      <HeaderCar />
      <ContentCar />
    </div>
    <cartList v-show = "false"/>
    <Footer/>
  </div>
</template>

<script>
import HeaderCar from "./headerCar.vue";
import ContentCar from "./contentCar.vue";
import Footer from "../public/footer.vue";
import cartList from "./cartList.vue";
export default {
  components: {
    HeaderCar,
    ContentCar,
    Footer,
    cartList
  }
};
</script>

<style scoped>
</style>