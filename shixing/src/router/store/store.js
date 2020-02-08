import Vuex from "vuex";//引入vuex 模块

//将store 赋值给一个变量
const createStore = ()=>{
    //实例化store 
    return new Vuex.Store({
        state:{
            name:'登录/注册',
        },
        //唯一修改数据的方式
        mutations:{
            //参数1:修改的状态 参数2:需要修改的值 (同步的方法)
            updateName(state,data){
                state.name = data;
                console.log(state.name);
            }
        },
        //行为 异步操作
        actions:{
            //store 全局的数据仓库 data:修改的值
            updateNameAsync(store,data){
                 store.commit("updateName",data);
            }
        },
        getters:{
            getUsersInfo(state){
                console.log(state.name)
                return state.name
            }
        },
        //配置后可以在开发人员不是正常修改数据的时候,进行报错提醒
        strict:true,
    })
}

//暴露仓库
export default createStore;