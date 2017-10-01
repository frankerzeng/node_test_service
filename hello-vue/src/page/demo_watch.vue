<template>
    <div id="watch">
        检测手机号是否正确：<input v-model="mobile"/>
        <span class="red" v-show="show">
            非法
        </span>
    </div>
</template>

<script>
    export default {
        name: 'watch',
        data() {
            return {
                mobile: '',
                show: true
            };
        },
        methods: {},
        watch: {
            mobile: {
                handler: function (val, oldval) {
                    console.log("new:%s,oldval:%s", val, oldval);
                    if (!(/1[34578]\d{9}$/).test(val)) {
                        this.show = true;
                    } else {
                        this.show = false;
                    }
                },
                deep: true
            }

        }
    }
</script>


<style lang="scss">
    .red {
        color: red;
        font-style: italic;
    }
</style>
