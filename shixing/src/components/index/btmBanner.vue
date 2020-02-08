// 首页最下面的版块中的banner图
<template>
  <div class="btmBanner">
    <div class="outDiv" ref="outDiv">
      <ul class="btmImg" ref="btmImg">
       <li>
            <img src="http://pic2.34580.cn/group1/M00/18/66/wKgNYl3PNzKAIWC5AACyLlyYnns084.jpg" alt />
       </li>
        <!-- <li>
            <img src="http://pic2.34580.cn/group1/M00/18/66/wKgNYl3PNzKAIWC5AACyLlyYnns084.jpg" alt />
        </li> -->
      </ul>
    </div>
    <div class="btmCircle dots">
        <div class="mn-carousel-indicator is-active dot" v-for="(item, index) of dots"  :key="index"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    data(){
        return {
            dots:[1],
        }
    },
    props: {
    // 是否循环播放
        loop: {
        type: Boolean,
        default: false
        },
        // 是否自动播放
        autoPlay: {
        type: Boolean,
        default: true
        },
        // 播放间隔
        interval: {
        type: Number,
        default: 3000
        }
    },
    watch:{
        
    },
    methods:{
        // 设置btmImg的宽度
        setSliderWidth: function (isResize) {
            // 获取btmImg里的所有的子元素
            this.children = this.$refs.btmImg.children
            // console.log(this.$refs.btmImg)
            // 计算宽度  = 图片个数+每张图片的宽度
            let width = 0
            // 获取手机屏幕的宽度
            let sliderWidth = this.$refs.outDiv.clientWidth
            // console.log(sliderWidth);
            for (let i = 0; i < this.children.length; i++) {
                // 获取children里的每一项内容 
                let child = this.children[i]
        
                child.style.width = sliderWidth + 'px'
                width += sliderWidth
            }
            if (this.loop) {
                width += 2 * sliderWidth
            }
            this.$refs.btmImg.style.width = width + 'px'
        },
        // 设置宽度以后初始化outDiv
        initSlider: function () {
            this.slider = new BScroll(this.$refs.outDiv, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    loop: this.loop,
                    threshold: 0.3,
                    speed: 400
                },
                click: true
            })
        },
        play: function () {
            let playPage = this.currentPageIndex + 1
            if (playPage === this.children.length - 2) {
                playPage = 0
            }
            setTimeout(() => {
                this.slider.goToPage(playPage, 0, 400)
            }, this.interval)
        },
        getCurrentPage:function(){
            this.slider.on('scrollEnd', () => {
                let page = this.slider.getCurrentPage().pageX
                this.currentPageIndex = page
                // 当滚动结束以后 如果是自动播放的话 那么首先要清除定时器(防止手动拖动轮播图以后图片无法正确显示)然后再次执行方法 才能实现轮播
                if (this.autoPlay) {
                clearTimeout(this.timer)
                this.play()
                }
            })
        }
    },
    mounted(){
        // const outDiv = this.$refs.outDiv;
        // console.log(outDiv);
        // this.scroll = new BScroll(outDiv,{
        //     scrollX:true,
        //     probeType:3,
        //     snap: {  // 滑动切换的一些配置
        //         speed: 800,  // 滑动切换的速度
        //         easing: {  // 滑动切换的动画效果
        //             style: 'ease-in'
        //         },
        //         threshold: 0.5,  // 滑动切换到超过一半时切换到下一屏
        //         stepX: 375,  // 横向切换距离为轮播图宽度
        //     }
        // }),

        //轮播图
        setTimeout(() => {
            this.setSliderWidth()
            this.initSlider()
        }, 20)
    }
};
</script>

<style  scoped>
.btmBanner{
    height:10rem;
    width:100%;
   
}
.outDiv{
    height:8rem;
    width:100%;
    overflow: hidden;

}
.btmImg{
    height: 100%;
    min-width:101%;
    display: inline-flex;
}
li{
    height:100%;
    width:375px;
}
.btmImg>li>img{
    display: block;
    float: left;
    height:100%;
    width:100%;
}
.btmCircle{
    height:2rem;
    width:100%;
    background:#ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mn-carousel-indicator{
    width: .8rem; 
    height: .5rem;
    background: #ff2d55;
    border-radius: .25rem;
    margin: 0 .25rem;
   
}
</style>