<template>
    <transition name="slide-fade">
        <div id="getDataId">
            <div class="loading" v-if="loading">
                Loading...
            </div>

            <div v-if="error" class="error">
                {{error}}
            </div>

            <div v-if="post" class="content">
                <div v-for="p in post">
                    <h2>{{p.key}}</h2>
                    <h2>{{p.value}}</h2>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
    import {getList} from './../http/getData';
    export default {
        name: 'getDataId',
        data () {
            return {
                loading: false,
                post: null,
                error: null
            };
        },
        // 组件创建完成后获取数据
        created(){
            this.fetchData();
        },
        watch: {
            '$route': "fetchData"
        },
        methods: {
            async fetchData(){
                this.error = this.post = null;
                this.loading = true;
                var rest = await getList(1).then(rest => {
                        console.log(rest);
                        this.loading = false;
                        this.post = rest;
                    }
                )
            }
        }
    }
</script>

<style lang="scss">
    div {
        height: 100%;
        left: 0;
        width: 100%;
        bottom: 1*100rem;
        background: #F5F5F5;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
