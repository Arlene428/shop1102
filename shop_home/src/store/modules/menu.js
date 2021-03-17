import {getMenu} from "../../utils/request";
// state存储数据
const state = {   
    menuList:[]        //初始化数据 
}

// 操作状态数据
const mutations = {
    // state是系统自动注入的参数
    changeMenuList(state,arr){
        state.menuList = arr;
    }
}

// 对接组件中的操作方法
const actions = {
    // context是系统自动注入的参数
    menuListActions(context){
    // 发起菜单列表请求
    getMenu({istree:true}).then(res=>{
      context.commit('changeMenuList',res.data.list)
    })
    }
}

// 获取数据并返回给组件
const getters = {
    menuList(state){
        return state.menuList
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}