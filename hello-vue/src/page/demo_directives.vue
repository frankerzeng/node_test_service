<template xmlns:v-zfl="http://www.w3.org/1999/xhtml">
    <div id="y">
        <div class="color" v-zfl:true.bg.ss="test">
            <div v-show="one">首付就是两地分居胜利大街方式了的会计分录</div>
            <button class="btn btn-primary" @click="one = !one">
                改变
            </button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    Vue.directive('zfl', function (el, binding) {
        let val = binding.value;            //  值
        let modifiers = binding.modifiers;  //  修饰符
        let arg = binding.arg;              //  参数

        console.log("val:" + val);
        for (let m in modifiers) {
            console.log("modifiers:" + m);
        }
        console.log("arg:" + arg);
    });
    export default {
        name: "one-y",
        data () {
            return {
                one: false,
                test: "test data"
            };
        },
        methods: {},
    };
</script>


<style lang="scss">
</style>
