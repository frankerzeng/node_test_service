<template>
    <div id="contentId">
        <textarea class="form-control" rows="3">{{data}}</textarea>

        <input type="button" value="增加" class="btn btn-primary" @click="add($event)"/>

        <br>
        <div @click="ev1($event)">
            <input type="button" value="点击冒泡1" @click="ev2()"/>
            <input type="button" value="点击冒泡2" @click="ev2($event)"/>
            <input type="button" value="点击冒泡" @click.stop="ev2()"/>
        </div>

        <br>
        <input type="button" value="默认事件" @contextmenu="ev3($event)"/>
        <input type="button" value="默认事件" @contextmenu.prevent="ev3()"/>

        <br>
        <div>键盘事件</div>
        <input type="text" @keyup="ent($event)"/>
        <input type="text" @keydown="ent($event)"/>
        <input type="text" @keydown.69="ent4"/>

    </div>
</template>

<script>
    export default {
        name: 'contentId',
        data () {
            return {
                data: '',
                cl: "btn"
            };
        },
        methods: {
            add: function (event) {
                this.data = event.clientX;
            },
            ent: function (event) {
                this.data = event.keyCode;
            },
            ev1: function (event) {
                alert(1);
            },
            ev2: function (event) {
                alert(2);
                if (event) {
                    event.cancelBubble = true;
                }
            },
            ev3: function (event) {
                alert(3);
                if (event) {
                    event.preventDefault();
                }
            },
            ent4: function () {
                alert(11);
            }
        },
    }
</script>


<style lang="scss">

</style>
