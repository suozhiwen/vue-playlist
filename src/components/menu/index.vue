<template>
  <div class="aside_div_one">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>


    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse"  @select="handleSelect" :router="true">

      <template v-for="(item) in menuList">
        <el-submenu :index="String(item.menuId)">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.menuName }}</span>
          </template>
          <template v-if="item.sysMenuTreeVoList != null">
            <template v-for="(items) in item.sysMenuTreeVoList">
              <el-menu-item :unique-opened=true  :index="items.component">{{items.menuName}}</el-menu-item>
            </template>
          </template>
        </el-submenu>
      </template>
    </el-menu>


  </div>
</template>

<script>
import {listMenu, listMenuTree} from '@/api/system/menu';

export default {
  data() {
    return {
      menus: [
        {id:1,name:"11",sumap:[{id:1,name:"1-1"},{id:2,name:"2-1"},{id:3,name:"3-1"}]},
        {id:2,name:"22",sumap:[{id:1,name:"2-1"},{id:2,name:"2-2"},{id:3,name:"3-2"}]}
      ],
      menuList: [],
      isCollapse: false
    }
  },
  created() {
    console.log("menu1")
    this.getList();
  },
  methods: {
    getList() {
      console.log("menu2")

      listMenuTree().then(response => {
        console.log(response)
        console.log(response.data.data)
        this.menuList = response.data.data;
      })
    },
    handleOpen(key, keyPath) {
      console.log("1")
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("2")
      console.log(key, keyPath);
    },
    handleSelect(index,indexPath){
      console.log("3")
      console.log(index, indexPath);
    }
  },
}
</script>
<style lang="less">
.aside_div_one {
  text-align: left;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
