<template>
  <div>
      <el-dialog :title="info.title" :visible.sync="info.show">
  <el-form :model="form">
    <el-form-item label="菜单名称" :label-width="formLabelWidth">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="上级菜单" :label-width="formLabelWidth">
      <el-select v-model="form.pid">
        <el-option label="请选择" disabled value=""></el-option>
        <el-option label="顶级菜单" :value="0"></el-option>
        <!-- 遍历菜单列表 -->
         <el-option v-for="item in list" :key="item.id" :label="item.title" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="菜单类型" :label-width="formLabelWidth">
         <template>
            <el-radio v-model="form.type" :label="1">目录</el-radio>
            <el-radio v-model="form.type" :label="2">菜单</el-radio>
         </template>
     </el-form-item>
      <el-form-item label="菜单图标" :label-width="formLabelWidth" v-if="form.type==1">
      <el-select v-model="form.icon">
        <el-option v-for="item in icons" :key="item" :label="item" :value="item"></el-option>     
      </el-select>
    </el-form-item>
     <el-form-item label="菜单地址" :label-width="formLabelWidth" v-else>
      <el-select v-model="form.url">
        <el-option v-for="item in urls" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="菜单状态" :label-width="formLabelWidth">状态
         <el-switch v-model="form.status" active-color="#13ce66"  inactive-color="grey" :active-value="1" :inactive-value="2">
         </el-switch>
     </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="confirm" v-if="info.isAdd">确 定</el-button>
    <el-button type="primary" @click="update" v-else>修 改</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import { successAlert } from '../../../utils/alert';
import {addMenue,oneMenu,updateMenu} from "../../../utils/request";
import {mapGetters,mapActions} from "vuex";
export default {
props:['info'],
data(){
    return{
        form: {
          pid: 0,
          title: '',
          icon: '',
          type: 1,   //类型   1目录   2菜单
          url: '',
          status: 1,  //状态   1正常   2禁用
        },
        formLabelWidth: '120px',
        // 所有图标
        icons:['el-icon-setting','el-icon-s-goods','el-icon-menu','el-icon-collection-tag','el-icon-coin'],
        // 所有菜单地址
        urls:['menu','home','role','manager','cate','spec','goods','member','banner','seckill']
    }
},
computed:{
...mapGetters({
  "list":"menu/menuList"
})
},
methods:{
  ...mapActions({
    "requestMenuList":"menu/menuListActions"
  }),
    cancel(){
        // 点击取消按钮，让弹框消失
        this.info.show = false;
        // 清空表单内容
        this.form = {
          pid: 0,
          title: '',
          icon: '',
          type: 1,   //类型   1目录   2菜单
          url: '',
          status: 1,  //状态   1正常   2禁用
        }
    },
    confirm(){
        // 添加数据上传
        // console.log(this.form);
        addMenue(this.form).then(res=>{
          // 只处理成功的结果
          successAlert(res.data.msg);
          this.cancel();
          this.requestMenuList();
        })
      },
    // 获取菜单详情方法
    getDetail(id){
      // 发起菜单详情
      oneMenu({id}).then(res=>{
        this.form = res.data.list;
        this.form.id = id;
        // this.requestMenuList();
        // this.cancel();
      })
    },
    // 修改菜单
    update(){
    //  发起修改菜单请求
    updateMenu(this.form).then(res=>{
      // 处理修改成功的结果
      successAlert(res.data.msg);
      this.cancel();
      this.requestMenuList();
    })
    }
},
mounted(){
  // 组件挂载完成时，获取菜单列表数据
  this.requestMenuList()
}
}
</script>

<style>

</style>