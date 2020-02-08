<template>
    <div class="product-unit">
        <div class="mn-card-item">
            <span>商品名称</span>
            <p>大青菜1000g/份</p>
        </div>
        <div class="mn-card-item">
            <span>编号</span>
            <p>3301000001403</p>
        </div>
        <div class="mn-card-item">
            <span>规格</span>
            <p>1000g/份</p>
        </div>
        <div class="mn-card-item">
            <span>产地</span>
            <p>江苏省</p>
        </div>
        <div class="mn-card-item">
            <span>储存方式</span>
            <p>冷藏</p>
        </div>
        <div class="mn-card-item">
            <span>税收分类</span>
            <p> 白菜类蔬菜（用于开具发票</p>
        </div>
         <div class="mn-card-item">
            <span>截单时间</span>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.product-unit{
    width:100%;
    min-height:16rem;
}
.mn-card-item{
    height:3.5rem;
    width: 100%;
    border-bottom:0.05rem solid #bbb;
    display: flex;
    align-items: center;
    padding-left:1rem;
}
span{
    display: block;
    width:7rem;
    font-size:1rem;
    color:#999;
}
p{
    font-size:1rem;
    color:#333;
}
</style>