import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import List from './List.vue'
import ScrollBehavior from './page/ScrollBehavior.vue';
// jquery
import $ from 'jquery/dist/jquery';
// bootstrap
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// 必须写use，使用路由
Vue.use(VueRouter);

const Detail = {template: "<div>de</div>"};
const Tech = {template: "<div>te</div>"};

const routes = [
    {path: "/detail", component: Detail},
    {path: "/tech", component: Tech},
    {path: "/listParam", query: {userId: 111}, component: List},

    // 懒加载
    {path: "/list", component: resolve => require(['./List.vue'], resolve)},
    {path: "/ScrollBehavior", component: resolve => require(['./page/ScrollBehavior.vue'], resolve)},
    {path: "/GetData", component: resolve => require(['./page/GetData.vue'], resolve)},
    {path: "/demo_table", component: resolve => require(['./page/demo_table.vue'], resolve)},

    // 嵌套路由
    {
        path: "/index",
        component: App,
        children: [
            {path: "/detail", component: Detail},
            {path: "/tech", component: Tech}
        ]
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount("#app");