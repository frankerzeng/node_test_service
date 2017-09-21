<template>
    <div id="contentId">
        <div id="formId">
            <div class="form-group">
                <label for="age"> age :</label>
                <input type="text" id="age" class="form-control" placeholder="age"/>
            </div>
            <div class="form-group">
                <input type="button" value="增加" class="btn btn-primary"/>
                <input type="button" value="取消" class="btn btn-danger"/>
            </div>
        </div>


        <hr>
        <table class="table table-bordered table-hover">
            <caption class="h3">列表</caption>
            <tr>
                <th>序号</th>
                <th>名字</th>
                <th>操作</th>
            </tr>
            <tr v-for="l in list">
                <td>{{$index}}</td>
                <td>{{l.name}}</td>
                <td>
                    <button class="btn btn-sml btn-danger">删除</button>
                </td>
            </tr>
            <tr v-if="list.length==0">
                <td colspan="3"> 暂无数据</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'contentId',
        data () {
            return {
                list: [
                    {name: "sdfsdf"}
                ]
            };
        },
        methods: {}
    }
</script>


<style lang="scss">

</style>
