<template>
    <div id="sd">
        <div id="one-component" :class="class_" tabindex="-1" role="dialog" :style="style_">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div class="modal-body">
                        <p>{{content}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" @click="close">Close</button>
                        <button type="button" class="btn btn-primary" @click="close">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "one-component",
        data () {
            return {
                class_: this.title === null ? "modal fade" : "modal fade in",
                style_: this.title === null ? "display: none" : "display: block"
            };
        },
        props: ['title', 'content'],
        methods: {
            close(){
                console.log(this.title);
                this.class_ = 'modal fade';
                this.style_ = 'display: none';
            },
            doComponentMethod: function () {
                console.log("----------------");
                console.log("doComponentMethod");
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
