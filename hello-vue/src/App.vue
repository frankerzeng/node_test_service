<template>
    <div id="app">
        <h1 v-if="!show">{{ msg }}</h1>
        <div id="demoContainId" v-if="!show">
            <h1 style="text-align: left">DEMO:</h1>
            <hr style="border: solid gray 1px">
            <div class="containDemoClass">
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
                <router-link to="/demo_event">demo_event</router-link>
                <br>
                <router-link to="/demo_contribution">demo_contribution</router-link>
                <br>
                <router-link to="/demo_components">demo_components 组件</router-link>
                <br>
                <router-link to="/demo_computed">计算属性</router-link>
                <br>
                <router-link to="/demo_directives" @click="clickF">自定义指令</router-link>
                <br>
                <router-link to="/demo_mixins" @click="clickF">demo_mixins 混合</router-link>
                <br>
                <button class="btn btn-normal" @click="clickF">
                    <router-link to="/demo_v2ex"><b>仿 V2EX</b></router-link>
                </button>
                <br>
            </div>
        </div>

        <!--路由匹配的组件渲染位置-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'hello Vue!',
                show: false
            };
        },
        methods: {
            clickF(){
                this.show = true;
            }
        }
    }
</script>

<style lang="scss">
    #demoContainId {
        border: 1px gray solid;
        margin-left: 20px;
        margin-right: 20px;
        padding-left: 30px;
        padding-right: 30px;

        .containDemoClass {
            text-align: left;
        }
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        padding: 0px;
        margin: 0px;
        a {
            text-decoration: none;
        }
    }

</style>
