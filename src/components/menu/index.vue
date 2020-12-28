<template>
  <div class="aside_div_one">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>


    <el-menu router :default-active="this.$route.path" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse" @select="handleSelect">

      <template v-for="(item) in menuList">
        <el-submenu :index="String(item.menuId)">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.menuName }}</span>
          </template>
          <template v-if="item.sysMenuTreeVoList != null">
            <template v-for="(items) in item.sysMenuTreeVoList">
              <el-menu-item :unique-opened=true :index="items.path">{{ items.menuName }}</el-menu-item>
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
      menuList: [],
      isCollapse: false,
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
    handleSelect(index, indexPath) {
      console.log(index, indexPath);
      // this.$router.replace({
      //   path: "/welcome",
      //   query: {
      //     nextPath: index
      //   }
      // });
      this.$router.push({path:'/welcome',query:{name: index}})
      // this.$router.push(index)
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
