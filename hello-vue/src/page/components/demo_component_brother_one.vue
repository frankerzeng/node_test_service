<template>
    <div id="brother_one">
        兄弟1：<input type="text" placeholder="发消息给兄弟2" v-model="val" @keyup="send"/>
    </div>
</template>

<script>
    import bus from '../../help/event';

    export default {
        name: "brother_one",
        data () {
            return {
                val: ''
            };
        },
        methods: {
            send(){
                bus.$emit('receive', {msg: this.val})
            }
        },
    };
</script>


<style lang="scss">
    .red {
        color: red;
    }

    .blue {
        background-color: #2E2D3C;

    }
</style>
