<template>
    <div id="ttt">
        <table class="table">
            <div class="text-red">{{text}}</div>
            <button class="btn btn-danger" @click="change">BUTTON</button>
        </table>
    </div>
</template>

<script>
    let base = {
        data () {
            return {
                text: "hello   lll"
            };
        },
        methods: {
            change(){
                this.text += " www";
            }
        },
    };
    export default {
        name: "one-ttt",
        computed: {},
        mixins: [base]
    };
</script>


<style lang="scss">
</style>
