<template>
    <div id="demo_v2ex">
        <div id="Top">
            <div class="content">
                <div style="">
                    <table cellpadding="0" cellspacing="0" border="1px" width="100%">
                        <tbody>
                        <tr>
                            <td width="80" align="left" style="padding-top: 4px;">
                                <img src="//v2ex.assets.uxengine.net/site/logo@2x.png?m=1346064962"
                                     border="1"
                                     align="default" alt="V2EX" width="80px" height="25px"></td>

                            <!--标签开始-->
                            <td width="auto" align="right" style="padding-top: 2px;">
                                <a v-for="(value, key) in tags" href="javascript:void(0)" v-bind:to="value.url"
                                   style="margin-left:10px "
                                   class="top">
                                    <img style="cursor: auto;border-radius: 24px;" v-bind:src="value.img_url" width="24"
                                         border="0" align="absmiddle">
                                </a>
                            </td>
                            <!--标签结束-->

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "demo_v2ex",
        data () {
            return {
                tags: [
                    {
                        img_url: "//v2ex.assets.uxengine.net/gravatar/512b6fb7919fb6e73c8a950cf0610ff6?s=24&d=retro",
                        url: "node1"
                    },
                    {
                        img_url: "https://www.v2ex.com/static/img/neue_notepad.png",
                        url: "node2"
                    },
                    {
                        img_url: "https://www.v2ex.com/static/img/neue_config.png",
                        url: "node3"
                    },
                ]
            };
        },
        methods: {
            add(){
                return 2
            },
        },
        computed: {
            add1(){

            }
        },
    };
</script>


<style lang="scss">
    #Top {
        border: 1px red solid;
    }

</style>
