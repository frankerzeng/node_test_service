<template>
    <div id="ttt">
        <table class="table">
            <tr>
                <td><input type="text" v-model.number="one"/></td>
            </tr>
            <tr>
                <td><input type="text" v-model.number="two"/></td>
            </tr>
            <tr>
                <td>{{add}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "one-ttt",
        data () {
            return {
                one: 0,
                two: 0
            };
        },
        methods: {},
        computed: {
            add(){
                return this.one + this.two;
            }
        }
    };
</script>


<style lang="scss">
</style>
