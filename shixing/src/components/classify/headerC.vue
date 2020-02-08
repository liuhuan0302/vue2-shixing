<template>
    <div class="headerC">
        <div class="fresh-search-bar-control">
            <div class="keyword-wrapper">
                <span class="el-icon-search"></span>
                <span>羊肉低至34.5元/斤</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.headerC{
    height:3rem;
    width:100%;
}
.fresh-search-bar-control{
    height:3rem;
    width:100%;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0 .4rem;
    background:#fff;
    z-index:10;
}
.keyword-wrapper{
    height:2rem;
    width:100%;
    background:rgba(51,51,51,.06);
    border-radius:1rem; 
    font-size:.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.el-icon-search{
    margin-right:0.4rem;
    font-size:1rem;
}
</style>