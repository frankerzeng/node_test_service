<template>
    <div id="slott" class="burly">
        <slot name="zf">default content</slot>
    </div>
</template>

<script>
    export default {
        name: "slott",
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
    .burly {
        color: burlywood;
    }

    .blue {
        background-color: #2E2D3C;

    }
</style>
