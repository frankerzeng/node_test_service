import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

// 必须写use，使用路由
Vue.use(VueRouter);

const Detail = {template: "<div>de</div>"};
const Tech = {template: "<div>te</div>"};

const routes = [
    {path: "/detail", component: Detail},
    {path: "/tech", component: Tech},

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