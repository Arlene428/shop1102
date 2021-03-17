<template>
  <div class="container">
     <div class="con">
         <h3>欢迎登录</h3>
         <el-input placeholder="请输入用户名"></el-input>
         <el-input type="password" placeholder="请输入密码"></el-input>
         <div>
             <el-button type="primary" @click="login">登录</el-button>
         </div>
     </div>
  </div>
</template>

<script>
export default {
methods:{
    login(){
        this.$router.push('/')
    }
}
}
</script>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#553443,#2F3D60);
    position: fixed;
    top: 0;
    left: 0;
}
.con{
    width: 350px;
    height: 250px;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;

}
h3{
    text-align: center;
    margin: 10px;
}
.el-input{
    width: 80%;
    margin: 10px 35px;
}
.el-button{
    width: 100px;
    position: absolute;
    left: 123px;
    margin-top: 10px;
}
</style>