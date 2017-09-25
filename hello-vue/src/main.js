import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import List from './page/List.vue'
import VueResource from 'vue-resource';

// 引入jquery
import $ from 'jquery/dist/jquery';

// 引入bootstrap
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// 必须写use，使用路由
Vue.use(VueRouter);

// 使用vue resource 获得数据
Vue.use(VueResource);

// V2.0+ 已废弃过滤器
// 自定义过滤器
Vue.filter('uppercase', function (value) {
    return value.toUpperCase();
});

const Detail = {template: "<div>de</div>"};
const Tech = {template: "<div>te</div>"};

const routes = [
    {path: "/detail", component: Detail},
    {path: "/tech", component: Tech},
    {path: "/listParam", query: {userId: 111}, component: List},

    // 懒加载
    {path: "/ScrollBehavior", component: resolve => require(['./page/ScrollBehavior.vue'], resolve)},
    {path: "/GetData", component: resolve => require(['./page/GetData.vue'], resolve)},
    {path: "/demo_table", component: resolve => require(['./page/demo_table.vue'], resolve)},
    {path: "/vue_resource", component: resolve => require(['./page/demo_vue_resource.vue'], resolve)},
    {path: "/demo_event", component: resolve => require(['./page/demo_event.vue'], resolve)},
    {path: "/demo_contribution", component: resolve => require(['./page/demo_contribution.vue'], resolve)},

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