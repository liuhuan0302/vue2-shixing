<template>
    <div class="headerCar">
        <div class="Car-top">
           <p>您还没有登录哦</p>
           <span @click="jumpLogin">请登录</span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        jumpLogin(){
            this.$router.push({path:"login"})
        }
    }
}
</script>

<style scoped>
.Car-top{
    height:4rem;
    width:100%;
    background:#ebf5e9;
    padding:0 0.4rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.Car-top>p{
    font-size:1rem;
    color:#49aa34;
}
.Car-top>span{
    height: 2rem;
    color: #49aa34;
    border: 1px solid #49aa34;
    border-radius: 5px;
    padding: 0 1.5rem;
    line-height: 2rem;
    text-align: center;
}

</style>