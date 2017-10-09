<template>
    <div id="slot" class="red">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "slot",
        data () {
            return {
                val: ''
            };
        },
        methods: {

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
