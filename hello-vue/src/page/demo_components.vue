<template>
    <div id="contentId">
        <button type="button" class="btn btn-primary" @click="one"> 弹出1</button>

        <!--父组件传参给子组件-->
        <demo-component-one v-if="showAlert" :title="title" :content="content"
                            @closeAlert="closeAlert"></demo-component-one>

        <!--子组件传参给父组件-->
        <div>
            <p class="red">{{total}}</p>
            <demo-component-two @addP="addP"></demo-component-two>
        </div>

        <!--兄弟组件通信-->
        <div>
            <demo-component-b-o></demo-component-b-o>
            <demo-component-b-t></demo-component-b-t>
        </div>

        <!--插槽-slot-->
        <demo-component-s>test</demo-component-s>
        <demo-component-s-t>
            <div slot="zf">test name</div>
        </demo-component-s-t>

    </div>
</template>

<script>
    import demoComponentOne from './components/demo_component_one.vue';
    import demoComponentTwo from './components/demo_component_two.vue';
    import demoComponentBO from './components/demo_component_brother_one.vue';
    import demoComponentBT from './components/demo_component_brother_two.vue';
    import demoComponentS from './components/demo_component_slot.vue';
    import demoComponentST from './components/demo_component_slot_two.vue';

    export default {
        name: 'contentId',
        data() {
            return {
                showAlert: false,
                title: null,
                content: null,
                total: 0
            };
        },
        methods: {
            one: function () {
                this.showAlert = true;
                this.title = "button 1";
                this.content = "button 1";
            },
            closeAlert() {
                this.showAlert = false;
            },
            addP: function () {
                this.total++;
            }
        },
        components: {
            demoComponentOne, demoComponentTwo, demoComponentBO, demoComponentBT,
            demoComponentS,
            demoComponentST,
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
