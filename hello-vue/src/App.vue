<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2>Essential Ldddinks</h2>
        <p>
            <router-link to="/detail">detail</router-link>
            <router-link to="/tech">tech</router-link>
            <router-link to="/list">list</router-link>
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
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 100px;
    }

</style>
