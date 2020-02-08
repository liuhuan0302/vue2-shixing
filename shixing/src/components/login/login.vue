<template>
  <div class="login">
    <div class="city-wrapper">
      <p>上海</p>
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCAxMyA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bG9naW5faWNvbl9hcnJvdzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSIxLeeZu+W9leazqOWGjOmhtS3mnKrovpPlhaXmiYvmnLrlj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDMuMDAwMDAwLCAtODAuMDAwMDAwKSIgZmlsbD0iIzMzMzMzMyI+CiAgICAgICAgICAgIDxnIGlkPSLln47luILliIfmjaIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4OS4wMDAwMDAsIDY0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4wMDAwMDAsIDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ0LjYyNTQ5NTEsMTEuNjI5MzU0NiBMMzkuNDk0NTkyNywxNi43NjAyNTcgQzM5LjE2ODEyMjgsMTcuMDg2NzI2OSAzOC42Mzg4MTA1LDE3LjA4NjcyNjkgMzguMzEyMzQwNiwxNi43NjAyNTcgQzM3Ljk4NTg3MDcsMTYuNDMzNzg3MSAzNy45ODU4NzA3LDE1LjkwNDQ3NDkgMzguMzEyMzQwNiwxNS41NzgwMDUgTDQyLjkxMTM1MDYsMTAuOTc4OTk1IEwzOC4zNTQzNTA2LDYuNDIxOTk1MDIgQzM4LjAyNzg4MDgsNi4wOTU1MjUxNCAzOC4wMjc4ODA4LDUuNTY2MjEyODcgMzguMzU0MzUwNiw1LjIzOTc0Mjk4IEMzOC42ODA4MjA1LDQuOTEzMjczMDkgMzkuMjEwMTMyOCw0LjkxMzI3MzA5IDM5LjUzNjYwMjcsNS4yMzk3NDI5OCBMNDQuNjg3NjU5NCwxMC4zOTA3OTk3IEM0NS4wMTQxMjkzLDEwLjcxNzI2OTYgNDUuMDE0MTI5MywxMS4yNDY1ODE4IDQ0LjY4NzY1OTQsMTEuNTczMDUxNyBDNDQuNjY3NjY3NSwxMS41OTMwNDM2IDQ0LjY0NjkxNTEsMTEuNjExODExMiA0NC42MjU0OTUxLDExLjYyOTM1NDYgWiIgaWQ9ImxvZ2luX2ljb25fYXJyb3ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxLjUwMDAwMCwgMTEuMDAwMDAwKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtNDEuNTAwMDAwLCAtMTEuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
        alt
      />
    </div>
    <div class="sign-brand">
      <img src="https://wechatx.34580.com/static/img/login_icon_logo%202.f2684c4.png" alt />
    </div>
    <div class="bottom">
      <div class="container">
        <input type="text" placeholder="请输入真实有效的手机号" ref="inputC" :value="Val" @input="change" />
      </div>
      <div class="input-clear" v-show="Val" @click="clear">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dpbl9pY29uX2Nsb3NlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjIt5omL5py65Y+36L6T5YWl5q2j56GuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMyLjAwMDAwMCwgLTIzOS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuaJi+acuuWPt+i+k+WFpeahhiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCAyMjIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibG9naW5faWNvbl9jbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzA2LjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS01IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC01IiBmaWxsPSIjREZERkRGIiBjeD0iOCIgY3k9IjgiIHI9IjgiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4xNjk0MTczOCw4LjEwODc1NzIxIEwxMS45OTc4NDQ1LDEwLjkzNzE4NDMgQzEyLjI5MDczNzcsMTEuMjMwMDc3NiAxMi4yOTA3Mzc3LDExLjcwNDk1MTMgMTEuOTk3ODQ0NSwxMS45OTc4NDQ1IEMxMS43MDQ5NTEzLDEyLjI5MDczNzcgMTEuMjMwMDc3NiwxMi4yOTA3Mzc3IDEwLjkzNzE4NDMsMTEuOTk3ODQ0NSBMOC4xMDg3NTcyMSw5LjE2OTQxNzM4IEw1LjI4MDMzMDA5LDExLjk5Nzg0NDUgQzQuOTg3NDM2ODcsMTIuMjkwNzM3NyA0LjUxMjU2MzEzLDEyLjI5MDczNzcgNC4yMTk2Njk5MSwxMS45OTc4NDQ1IEMzLjkyNjc3NjcsMTEuNzA0OTUxMyAzLjkyNjc3NjcsMTEuMjMwMDc3NiA0LjIxOTY2OTkxLDEwLjkzNzE4NDMgTDcuMDQ4MDk3MDQsOC4xMDg3NTcyMSBMNC4yMTk2Njk5MSw1LjI4MDMzMDA5IEMzLjkyNjc3NjcsNC45ODc0MzY4NyAzLjkyNjc3NjcsNC41MTI1NjMxMyA0LjIxOTY2OTkxLDQuMjE5NjY5OTEgQzQuNTEyNTYzMTMsMy45MjY3NzY3IDQuOTg3NDM2ODcsMy45MjY3NzY3IDUuMjgwMzMwMDksNC4yMTk2Njk5MSBMOC4xMDg3NTcyMSw3LjA0ODA5NzA0IEwxMC45MzcxODQzLDQuMjE5NjY5OTEgQzExLjIzMDA3NzYsMy45MjY3NzY3IDExLjcwNDk1MTMsMy45MjY3NzY3IDExLjk5Nzg0NDUsNC4yMTk2Njk5MSBDMTIuMjkwNzM3Nyw0LjUxMjU2MzEzIDEyLjI5MDczNzcsNC45ODc0MzY4NyAxMS45OTc4NDQ1LDUuMjgwMzMwMDkgTDkuMTY5NDE3MzgsOC4xMDg3NTcyMSBaIiBpZD0ic2VhcmNoX2J0bl9jbGVhciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          alt
        />
      </div>
      <div
        class="button-wrapper"
        :class="{'active':flag,'activeNum':off} "
        @click="getUser"
      >{{btnMsg}}</div>
    </div>
    <div class="sign-btn" @click="tab">{{tipMsg}}</div>
    <div class="tips">
      <p>未注册手机验证后即完成注册</p>
      <p>登录后：</p>
      <p>1、账号将关联微信账号，可快捷登录微商城/小程序/APP/团购等；</p>
      <p>2、可通过微信接受下单/取货等消息通知。</p>
    </div>
    <div class="pop" :class="{'activeNum':off}">
      <div class="pop-content">
        <p class="num">验证码:{{num}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnMsg: "获取验证码",
      tipMsg: "账号密码登录",
      onOff: true,
      Val: "",
      flag: false,
      message: "",
      num: "",
      off: false,
      name: ""
    };
  },
  methods: {
    tab: function() {
      if (this.onOff) {
        this.btnMsg = "获取验证码";
        this.tipMsg = "账号密码登录";
      } else {
        this.btnMsg = "输入登录密码";
        this.tipMsg = "验证码登录";
      }
      this.onOff = !this.onOff;
    },
    clear: function() {
      this.$refs.inputC.value = "";
      this.Val = "";
      this.flag = false;
    },
    change(e) {
      this.Val = e.target.value;
      this.name = this.Val;
      var reg = /^1[356789]{1}\d{9}$/;
      if (reg.test(this.Val)) {
        this.flag = true;
        //修改或传入state 中的值
        //参数1:"需要触发的事件" 参数2:修改的值s
        this.$store.commit("updateName",this.name);
        //异步修改数据
        // this.$store.dispatch("updateNameAsync",this.name)
         console.log(this.$store.getters.getUsersInfo)
      } else if (this.Val == "") {
        this.flag = false;
      }
    },
    getUser(e) {

      let _this = this;
      if ((this.flag = true && this.btnMsg == "获取验证码")) {
        // console.log("11");
        this.Random();
        this.off = true;
        this.Val = this.num;
        // console.log(this.name);
        if (this.Val == this.num) {
          this.btnMsg = "请输入验证码";
        }
      }
      if (this.Val == this.num && this.btnMsg == "请输入验证码") {
        e.srcElement.onclick = function() {
        // location.href = "http://localhost:8081/my";
          // _this.$router.push({path:"/my",query:{name:_this.name}})
         _this.$router.push({name:"jumpMy",query:{name:this.name}});
        };
        // if(this.Val == this.num){
        //      console.log(1111);
        //      this.$router.push({path:'/index'})
        // }
        setTimeout(() => {
          this.off = false;
        }, 5000);
      }
    },
    Random() {
      let str = "";
      for (var i = 0; i < 6; i++) {
        //获取随机数
        var num = this.randomNumber(48, 57);
        //判断随机数是否在条件之内
        if (num >= 48 && num <= 57) {
          str += String.fromCharCode(num);
        } else {
          //不满足条件
          i--;
        }
      }
      this.num = str;
    },
    randomNumber(m, n) {
      return parseInt(Math.random() * (n - m + 1) + m);
    }
  },
  mounted(){
     
  }
};
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
  padding: 0.5rem 0;
  background: #fff;
}
.city-wrapper {
  height: 1.5rem;
  width: 100%;
  padding-right: 0.8rem;
  display: flex;
  justify-content: flex-end;
}
.city-wrapper > p {
  font-size: 1.2rem;
  margin-right: 0.2rem;
}
.sign-brand {
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-brand > img {
  height: 2.2rem;
  width: 6.2rem;
}
.bottom {
  height: 9rem;
  width: 100%;
  margin-top: 2rem;
  padding: 0 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
}
.container {
  height: 3.5rem;
  width: 100%;
  border-bottom: 0.1rem solid #bbb;
}
input {
  height: 100%;
  width: 100%;
  border: #fff;
  outline: none;
}
.button-wrapper {
  margin-top: 2rem;
  height: 2.75rem;
  width: 95%;
  display: inline-block;
  color: #fff;
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  border-radius: 3rem;
  background: #666;
  pointer-events: none;
}
.sign-btn {
  margin-left: 1.4rem;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #666;
}
.tips {
  height: 8rem;
  width: 100%;
  padding: 0 0 0 0.9rem;
}
p {
  font-size: 0.9rem;
  color: #999;
  line-height: 1.3rem;
}
.input-clear {
  height: 1rem;
  width: 1rem;
  position: absolute;
  right: 1rem;
  top: 2rem;
}
.pop {
  height: 4.5rem;
  width: 100%;
  padding: 0.4rem;
  position: fixed;
  top: -6rem;
  left: 0;
}
.pop-content {
  height: 100%;
  width: 100%;
  padding: 0 0 0 1rem;
  border-radius: 0.5rem;
  /* border: 0.1rem solid #bbb; */
  background: #fff;
}
.num {
  font-size: 1rem;
  font-weight: bolder;
  line-height: 3.5rem;
  color: #000;
}
.activeNum {
  top: 0;
  transition: all 0.3s;
}
.active {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#25c949),
    to(#4aaa35)
  );
  background-image: linear-gradient(90deg, #25c949, #4aaa35);
  pointer-events: auto;
}
</style>