<template>
    <div id="contentId">
        <button type="button" class="btn btn-primary" @click="one"> 弹出1</button>
        <button type="button" class="btn btn-danger" @click="two"> 弹出2</button>
        <demo-component-one :title="title" :content="content"></demo-component-one>
    </div>
</template>

<script>
    import demoComponentOne from './components/demo_component_one.vue';
    export default {
        name: 'contentId',
        data () {
            return {
                title: null,
                content: null,
            };
        },
        methods: {
            one: function () {
                this.title = "button 1";
                this.content = "button 1";
            },
            two: function () {
                this.title = "button 2";
                this.content = "button 2";
            },
        },
        components: {
            demoComponentOne
        }
    }
</script>


<style lang="scss">
    .red {
        color: red;
    }

    .blue {
        background-color: #2E2D3C;

    }
</style>
