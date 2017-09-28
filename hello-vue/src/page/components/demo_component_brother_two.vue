<template>
    <div id="brother_two">
        兄弟2：<h1>{{val}}</h1>
    </div>
</template>

<script>
    import bus from '../../help/event';

    export default {
        name: "brother_two",
        data () {
            return {
                val: ''
            };
        },
        methods: {
            begin(){
                let tmp = this;
                bus.$on('receive', (data) => {
                    tmp.val = data.msg;
                })
            },
        },
        mounted: function () {
            this.begin();
        }

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
