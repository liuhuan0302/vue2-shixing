<template>
  <div class="fresh-app">
    <div class="headr-out">
      <div class="header">
        <!-- download-top -->
        <Download-top />
        <!-- navigation -->
        <Navigation />
      </div>
    </div>
    <Content />
    <Footer />
  </div>
</template>

<script>
import DownloadTop from "../public/download-top";
import Navigation from "./navigation";
import Content from "./content";
import Footer from "../public/footer";
export default {
  components: {
    DownloadTop,
    Navigation,
    Content,
    Footer
  }
};
</script>

<style  scoped>
.fresh-app{
  height:100%;
  width:100%;
  display: flex;
  flex-direction: column;
}
.headr-out {
  width: 100%;
  height: 6rem;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>