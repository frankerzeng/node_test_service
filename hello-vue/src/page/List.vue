<template>
    <div id="listId">
        <h1>{{ msg }}</h1>
    </div>

</template>

<script>
    export default {
        name: 'listId',
        data () {
            return {
                msg: 'list '
            }
        },
        created:function () {
            console.log("event11");
        }
    }
</script>

<style lang="scss">

</style>
