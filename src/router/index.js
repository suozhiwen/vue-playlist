import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../components/welcome.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login' //重定向到该链接
    },
    {
        path: '/login',
        component: Login
    },
    {path: '/header', component: () => import('../components/header/index.vue')}
    ,
    {
        path: '/welcome',
        component: Home,
        children: [
            {path: '/home', component: () => import('../components/home/index.vue')}
            ,
            {path: '/role', name: 'role', component: () => import('../views/system/role/index.vue')}
            ,
            {path: '/menu', name: 'menu', component: () => import('../views/system/menu/index.vue')}
            ,
            {path: '/dept', name: 'dept', component: () => import('../views/system/dept/index.vue')}
            ,
            {path: '/user', name: 'user', component: () => import('../views/system/user/index.vue')}
        ]
    },

]

// 路由配置
const RouterConfig = {
    mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes
}

const router = new VueRouter(RouterConfig)

// const router = new VueRouter({
//     routes
// })


//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to 将要访问的路径
    //from 代表从哪个路径跳转而来
    //next 是一个函数标识方形
    //  next()  放行     next('/login')  强制放行

    if (to.path === '/login') return next();
    //获取 token
    const tokenStr = window.sessionStorage.getItem('token');
    //tokenStr为空则跳转到登录
    if (!tokenStr) return next('/login');
    //tokenStr不为空则执行跳转
    next();
})



export default router;
