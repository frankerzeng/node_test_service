<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <p>
            <router-link to="/detail">detail</router-link>
            <br>
            <router-link to="/tech">tech</router-link>
            <br>
            <router-link to="/listParam">listParam</router-link>
            <br>
            <router-link to="/list">list</router-link>
            <br>
            <router-link to="/ScrollBehavior">ScrollBehavior</router-link>
            <br>
            <router-link to="/GetData">get_data</router-link>
            <br>
            <router-link to="/demo_table">bootstrap demo_table</router-link>
            <br>
            <router-link to="/vue_resource">vue_resource</router-link>
            <br>
        </p>

        <!--路由匹配的组件渲染位置-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your fdsfsdVue.js App'
            }
        }
    }
</script>

<style lang="scss">
    img {
        width: 20%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 100px;
    }

</style>
