<template>
    <p>{{ greeting }} world</p>
    <span :src=""></span>
</template>

<script>
    module.exports = {
        el: "p",
        data: {
            greeting: "hello"
        }
    };
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>