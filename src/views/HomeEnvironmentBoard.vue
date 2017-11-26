<template>
    <div class="app-environment">
        <h1 class="title">环境可用性看板</h1>
        <div class="container">
            <section class="env-nav-wrap">
                <div class="nav-select">
                    <!-- 下拉框方式（选其一即可） -->
                    <!-- <select class="select-box" v-model="selectedId">
                        <option v-for="(option, index) in options" v-bind:value="option.value">
                            {{ option.name }}
                        </option>
                    </select> -->
                    <!-- 选项卡方式（选其一即可） -->
                    <ul class="nav-box"> 
                        <li class="nav-list" v-for="(env, index) in envList" v-bind:class="{ on: env.showOn }" @click="focusTab(index)">{{ env.name }}</li>
                    </ul>
                </div>
            </section>
            <section class="env-intro-wrap">
                <ul class="intro-box">
                    <li class="intro-list" v-for="(intro, index) in introList" v-show="intro.isShow">
                        <h3 class="name" v-text="intro.name"></h3>
                        <p class="des" v-text="intro.des"></p>
                    </li>
                </ul>
            </section>
            <section class="app-trade clearfix">
                <div class="tit fl">交易：</div>
                <div class="trade-type fl">
                    <ul class="trade-box clearfix">
                        <li class="trade-list fl" v-for="(trade, index) in tradeList">
                            <span class="name" v-text="trade.name"></span>
                            <span class="sign-icon" v-bind:class="{ success: trade.status == 1 }"></span>
                            <span class="arrow-icon" v-show="(index+1) != tradeList.length"><i></i></span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    data () {
        return {
            selectedId: 1, // 默认选择环境1
            options: [     // 下拉框方式数据（选其一即可），环境名称
                { name: '环境A', value: 1 },
                { name: '环境B', value: 2 },
                { name: '环境C', value: 3 },
                { name: '环境D', value: 4 },
                { name: '环境E', value: 5 }
            ],
            envList: [     // 选项卡方式数据（选其一即可），环境名称
                { id: 1, name: '环境A', showOn: true },
                { id: 2, name: '环境B', showOn: false },
                { id: 3, name: '环境C', showOn: false },
                { id: 4, name: '环境D', showOn: false },
                { id: 5, name: '环境E', showOn: false }
            ],
            introList: [   // 环境描述
                { name: '环境A', des: '我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍A', isShow: true },
                { name: '环境B', des: '我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍B', isShow: false },
                { name: '环境C', des: '我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍C', isShow: false },
                { name: '环境D', des: '我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍D', isShow: false },
                { name: '环境E', des: '我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍我是介绍介绍E', isShow: false }
            ],
            tradeList: []  // 交易
        }
    },
    methods: {
        ...mapMutations([
            'pushLoadStack',
            'completeLoad'
        ]),
        requestData (url, params, fn) {
            this.pushLoadStack()
            this.$http.get(url, params).then(fn).then(this.completeLoad)
        },
        focusTab (index) {
            this.selectedId = this.envList[index].id;
            this.envList.forEach((item) => {
                item.showOn = false
            });
            this.introList.forEach((item) => {
                item.isShow = false
            });
            this.envList[index].showOn = true
            this.introList[index].isShow = true
        },
        init () {
            // this.requestData('/api/path', { // 传入后端接口路径
            this.requestData('/src/data.json', { // 模拟json数据
                params: this.selectedId
            }, (response) => {
                let data = response.data
                this.tradeList = data['content_' + this.selectedId]
            })
        }
    },
    watch: { // 监控数据变化
        selectedId () { 
            this.introList.forEach((item) =>  {
                item.isShow = false
            })
            this.introList[this.selectedId - 1].isShow = true

            this.init()
        }
    },
    created () { 
        this.init()
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}
.container {
    width: 1200px;
    margin: 0 auto;
}
.app-environment {
    position: relative;
}
.app-environment .title {
    line-height: 80px;
}
.env-nav-wrap {
    height: 40px;
}
.nav-box {
    background: #eaeaea;
    text-align: center;
    font-size: 0;
} 
.nav-select {
    text-align: left;
    background: #eaeaea;
    height: 40px;
}
.select-box {
    width: 200px;
    height: 40px;
    border: none;
    background: #00c1de;
}
.nav-list {
    display: inline-block;
    height: 38px;
    border-top: 2px solid #eaeaea;
    padding: 0 50px;
    font-size: 12px;
    color: #464646;
    letter-spacing: 0;
    line-height: 38px;
    border-radius: 1px 1px 0 0;
    cursor: pointer;
}
.nav-list.on {
    border-top: 2px solid #00c1de;
    background: #fff;
    color: #00c1de;
}
.env-intro-wrap {
    margin: -1px auto 0;
}
.intro-list {
    padding: 20px;
    line-height: 30px;
    font-size: 14px;
    text-align: left;
    background: #fff;
    border: 1px solid #ececec;
    transition: all .3s;
}
.intro-list .name {
    overflow: hidden;
    font-size: 18px;
    color: #4a4a4a;
    line-height: 28px;
}
.intro-list .des {
    overflow: hidden;
    font-size: 12px;
    color: #999;
    line-height: 22px;
}
.app-trade {
    margin-top: -1px;
    font-size: 14px;
    background: #fff;
    border: 1px solid #ececec;
}
.app-trade .tit {
    padding: 40px 20px;
    font-weight: bold;
    font-size: 18px;
    color: #4a4a4a;
    line-height: 28px;
}
.trade-type {
    width: 1100px;
}
.trade-box {
    min-height: 100px;
    padding: 20px 30px;
    border-left: 1px solid #ececec;
}
.trade-list {
    margin: 20px 40px;
    padding: 20px;
    border: 1px solid #ececec;
    border-radius: 10px;
    position: relative;
}
.trade-list:hover {
    cursor: pointer;
    border: 1px solid #00c1de;
    box-shadow: 0 2px 15px 0 rgba(0,193,222,.3)
}
.trade-list .name {
    display: inline-block;
    min-width: 60px;
}
.trade-list .sign-icon {
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    background: #df382c;
    border-radius: 50%;
    left: 50%;
    margin-left: -8px;
    bottom: -8px;
}
.trade-list .sign-icon.success {
    background: #38b44a;
}
.trade-list .arrow-icon {
    display: inline-block;
    position: absolute;
    width: 36px;
    height: 16px;
    background: #00c1de;
    right: -50px;
    top: 50%;
    margin-top: -8px;
}
.trade-list .arrow-icon >i {
    display: inline-block;
    position: absolute;
    right: -30px;
    top: -8px;
    border: 16px solid transparent;
    border-left: 16px solid #00c1de;
}
</style>
