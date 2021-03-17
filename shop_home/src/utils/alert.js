// 配置消息提示文件
import Vue from "vue";
const vm = new Vue()   //实例化一个vue

// 成功消息提示
export const successAlert = (msg)=>{
    // this.$message({    this指的是实例化的vue,即vm
        vm.$message({
        message: msg,
        type: 'success'
      });
}

// 警告消息提示
export const warningAlert = (msg)=>{
    // this.$message({    this指的是实例化的vue,即vm
        vm.$message({
        message: msg,
        type: 'warning'
      });
}

// 错误消息提示
export const errorAlert = (msg)=>{
    vm.$message.error(msg);
};