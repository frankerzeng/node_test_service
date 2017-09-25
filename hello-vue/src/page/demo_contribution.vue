<template>
    <div id="contentId">
        <div :class="r">是否是的防守打法</div>
        <div :class="[r,b]">是否是的防守打法</div>
        <div :class="{red:true}">是否是的防守打法</div>
        <div :class="json">是否是的防守打22法</div>

        <br>
        style
        <br>

        <div :style="s">style考虑考虑看</div>

    </div>
</template>

<script>
    export default {
        name: 'contentId',
        data () {
            return {
                data: '',
                r: "red",
                b: "blue",
                json: {
                    blue: true
                },
                s: {
//                    "font-size": "20px",
                    fontSize: "20px",
                    color: "red"
                }
            };
        },
        methods: {},
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
