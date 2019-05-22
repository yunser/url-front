<template>
    <my-page title="短网址" :page="page">
        <div class="common-container container">
            <ui-text-field v-model="url" label="网址" hintText="http(s)://" multiLine :rows="3" :rowsMax="6"/>
            <!-- <ui-text-field v-model.number="r" type="number" label="半径" /> -->
            <br>
            <div class="btns">
                <ui-raised-button primary label="生成短网址" @click="make" />
            </div>
            <result title="短网址" :text="result" :copyable="true" />
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                url: '',
                result: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=url',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
            },
            make() {
                this.result = ''
                
                if (!this.url) {
                    this.$message({
                        type: 'danger',
                        text: '请输入网址'
                    })
                    return
                }
                if (!this.url.match(/^https?:\/\//)) {
                    this.$message({
                        type: 'danger',
                        text: '网址格式不正确'
                    })
                    return
                }

                this.$http.get(`/url/shorter?url=${encodeURIComponent(this.url)}`).then(
                    response => {
                        let data = response.data
                        console.log('data', data)
                        this.result = data.url
                        this.url = ''
                    },
                    response => {
                        console.log(response)
                    })
            },
        }
    }
</script>

<style lang="scss" scoped>
.btns {
    margin-bottom: 24px;
}
textarea.form-control {
    height: auto;
}
.form-control {
    display: block;
    width: 100%;
    max-width: 400px;
    height: 33px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    outline: none;
}
.charset {
    margin-top: 16px;
}
.btns {
    margin-top: 16px;
    margin-bottom: 16px;
    .btn {
        margin-right: 8px;
    }
}
</style>
