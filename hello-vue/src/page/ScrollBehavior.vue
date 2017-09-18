<template>
    <div id="scrollId">
        <h1>{{ msg }}</h1>
        <h2>Essential Ldddinks</h2>
        <div>
            <scroller :on-infiniter="infinite" ref="myscroller">
                <p>
                    1.sldfjsldfjlsdjflsdj
                </p>
                <p>
                    2.sldfjsldfjlsdjflsdj
                </p>
                <p>
                    3.sldfjsldfjlsdjflsdj
                </p>
                <p>
                    3.sldfjsldfjlsdjflsdj
                </p>
                <p>
                    3.sldfjsldfjlsdjflsdj
                </p>
                <p>
                    3.sldfjsldfjlsdjflsdj
                </p>
                <p>
                    3.sldfjsldfjlsdjflsdj
                </p>
            </scroller>
        </div>

    </div>

</template>

<script>
    import Vue from 'vue';
    import VueScroller from 'vue-scroller';
    Vue.use(VueScroller);

    export default {
        name: 'scrollId',
        data () {
            return {
                msg: 'ScrollBehavior.vue'
            }
        },
        methods: {
            infinite(done) {
                console.log(this.noData);
                if (this.noData) {
                    setTimeout(() => {
                        this.$refs.myscroller.finishInfinite(2);
                    });
                    return;
                }
                let self = this;
                let start = this.moveList.length;

                setTimeout(() => {
                    for (let i = start + 1; i < start + 10; i++) {
                        self.moveList.push(i)
                    }
                    if (start > 30) {
                        self.noData = "没有更多数据"
                    }
                    self.$refs.myscroller.resize();
                    done()
                }, 1500)

            },
            refresh() {
                console.log('refresh')
            }

        }
    }
</script>

<style lang="scss">
    div {
        height: 100%;
        left: 0;
        width: 100%;
        bottom: 1*100rem;
        background: #F5F5F5;
    }

    p {
        height: 300px;
    }

</style>
