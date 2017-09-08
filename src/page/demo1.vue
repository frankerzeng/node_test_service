<template>
    <p>{{ greeting }} world</p>
    <span :src=""></span>
</template>

<script>
    export default{
        data() {
            return {
                greeting: "hello"
            }
        }
    };
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>