<template>
    <div id="sd">
        <button class="btn" @click="add">{{count}}</button>
    </div>
</template>

<script>
    export default {
        name: "sd",
        data () {
            return {
               count:0
            };
        },
        props: ['title', 'content'],
        methods: {
            add(){
                this.count++;
                this.$emit('addP');
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
