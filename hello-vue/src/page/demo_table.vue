<template>
    <div id="contentId">
        <h2>{{name | uppercase}}</h2>
        <h2 v-once>{{name | uppercase}}</h2>
        <h2 v-html="name"></h2>
        <div id="formId">
            <div class="form-group">
                <label for="age"> age :</label>
                <input type="text" id="age" class="form-control" placeholder="age" v-model="name"/>
            </div>
            <div class="form-group">
                <input type="button" value="增加" class="btn btn-primary" v-on:click="add()"/>
                <input type="button" value="取消" class="btn btn-danger" v-on:click="cancel()"/>
            </div>
        </div>


        <hr>
        <table class="table table-bordered table-hover">
            <caption class="h3">列表</caption>
            <tr>
                <th class="text-center table-bordered ">名字</th>
                <th class="text-center table-bordered ">操作</th>
            </tr>
            <tr v-for="(v,k) in list">
                <td class="table-bordered table-hover">{{v.name}}</td>
                <td class="table-bordered table-hover">
                    <button class="btn btn-sm btn-danger" v-on:click="changeStatus(0,k)" data-toggle="modal"
                            data-target="#myModal">删除
                    </button>
                </td>
            </tr>
            <tr v-if="list.length==0">
                <td colspan="2"> 暂无数据</td>
            </tr>
            <tr v-show="list.length > 0">
                <td colspan="2" class="text-right">
                    <button class="btn btn-danger btn-sm" v-on:click="changeStatus(1)" data-toggle="modal"
                            data-target="#myModal">
                        全部删除
                    </button>
                </td>
            </tr>
        </table>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">{{confirm_title}}</h4>
                    </div>
                    <!--<div class="modal-body">-->
                    <!---->
                    <!--</div>-->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" v-on:click="delectAll()">确认</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contentId',
        data () {
            return {
                test:"t",
                name: '',
                confirm_title: "确认删除",
                status: 0,//按钮状态 0 删除行，1 删除全部
                index: -1,
                list: [{name: 33}, {name: 33}],
                arr: ["sdf", 2]
            };
        },
        methods: {
            add: function () {
                if (this.name === '') {
                    return;
                }
                this.list.push(
                    {name: this.name},
                );
                this.name = '';
            },
            cancel: function () {
                this.name = "";
            },
            delectAll: function () {
                if (this.status === 1) {
                    this.list = [];
                } else if (this.status === 0) {
                    this.list.splice(this.index, 1);
                    console.log(this.arr.toString());
                }
                $("#myModal").modal('hide')
            },
            changeStatus: function (status, index) {
                if (status === 1) {
                    this.confirm_title = "确认删除全部";
                } else {
                    this.confirm_title = "确认删除";
                }
                this.status = status;
                this.index = index;
            }
        }
    }
</script>


<style lang="scss">

</style>
