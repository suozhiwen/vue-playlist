<!--<template>-->
<!--  <el-container class="home-container">-->
<!--    &lt;!&ndash; 头部区域 &ndash;&gt;-->
<!--    <el-header>-->
<!--      <div>-->
<!--        <img src="../assets/img/logo.jpg" />-->
<!--        <span>电商管理系统</span>-->
<!--      </div>-->
<!--      <el-button type="info" @click="logout">退出</el-button>-->
<!--    </el-header>-->
<!--    &lt;!&ndash; 页面主题区域 &ndash;&gt;-->
<!--    <el-container>-->
<!--      &lt;!&ndash; 侧边栏 &ndash;&gt;-->
<!--      <el-aside :width="isCollapse ? '64px' : '200px'">-->
<!--        <div class="toggle-button" @click="toggleCollapse">|||</div>;-->
<!--        &lt;!&ndash; 侧边栏 菜单区&ndash;&gt;-->
<!--        <el-menu-->
<!--          background-color="#333744"-->
<!--          text-color="#fff"-->
<!--          active-text-color="#409EFF"-->
<!--          unique-opened-->
<!--          :collapse="isCollapse"-->
<!--          :collapse-transition="false"-->
<!--          :router="true"-->
<!--        >-->
<!--          &lt;!&ndash; 一级菜单 &ndash;&gt;-->
<!--          <el-submenu :index="item.path" v-for="item in menulist" :key="item.id">-->
<!--            &lt;!&ndash; 一级菜单的模板区 &ndash;&gt;-->
<!--            <template slot="title">-->
<!--              <i class="el-icon-location"></i>-->
<!--              <span style="padding-right: 60px">{{item.authName}}</span>-->
<!--            </template>-->

<!--            <el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.id">-->
<!--              <template slot="title">-->
<!--                &lt;!&ndash; <i class="el-icon-location"></i> &ndash;&gt;-->
<!--                <span>{{subItem.authName}}</span>-->
<!--              </template>-->
<!--            </el-menu-item>-->
<!--          </el-submenu>-->
<!--        </el-menu>-->
<!--      </el-aside>-->
<!--      &lt;!&ndash; 右侧内容主体 &ndash;&gt;-->
<!--      <el-main>-->
<!--        &lt;!&ndash; 路由占位符 &ndash;&gt;-->
<!--        <router-view></router-view>-->
<!--      </el-main>-->
<!--    </el-container>-->
<!--  </el-container>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'Home',-->
<!--  components: {},-->
<!--  data() {-->
<!--    return {-->
<!--      title: '这是我的第一个Vue脚手架项目',-->
<!--      isCollapse: false,-->
<!--      //左侧菜单数据-->
<!--      menulist: [],-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getMtnuList()-->
<!--  },-->
<!--  methods: {-->
<!--    logout() {-->
<!--      //清空 token值-->
<!--      window.sessionStorage.clear-->
<!--      this.$router.push('/login')-->
<!--    },-->
<!--    //获取所有的菜单-->
<!--    async getMtnuList() {-->
<!--      const { data: res } = await this.$http.get('menus')-->
<!--      console.log(res)-->
<!--      if (res.meta.status !== 200) {-->
<!--        return this.$message.error(res.mate.msg)-->
<!--      }-->
<!--      this.menulist = res.data-->
<!--    },-->
<!--    //点击按钮切换菜单的折叠与展开-->
<!--    toggleCollapse() {-->
<!--      this.isCollapse = !this.isCollapse-->
<!--    },-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="less">-->
<!--.home-container {-->
<!--  height: 100%;-->
<!--}-->
<!--.el-header {-->
<!--  background-color: #373d41;-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  padding-left: 0px;-->
<!--  align-items: center;-->
<!--  color: #fff;-->
<!--  font-size: 20px;-->
<!--  > div {-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    span {-->
<!--      margin-left: 15px;-->
<!--    }-->
<!--  }-->
<!--  img {-->
<!--    width: 60px;-->
<!--  }-->
<!--}-->

<!--.el-aside {-->
<!--  background-color: #333744;-->
<!--  .el-menu {-->
<!--    border-right: none;-->
<!--  }-->
<!--}-->


<!--.el-main {-->
<!--  background-color: #eaedf1;-->
<!--}-->
<!--.el-icon-location{-->
<!--  margin-right: 10px !important ;-->
<!--}-->
<!--.toggle-button {-->
<!--  background-color: #4a5064;-->
<!--  font-size: 10px;-->
<!--  line-height: 24px;-->
<!--  color: #fff;-->
<!--  text-align: center;-->
<!--  letter-spacing: 0.2em;-->
<!--  cursor: pointer;-->
<!--}-->
<!--</style>-->
