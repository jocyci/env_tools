<template>
    <section class="tool-side-bar">
        <div class="side-bar-wrap">
            <ul class="bar-box">
                <li class="bar-list" v-for="(sideBar, index) in sideBarList">
                    <a class="link" target="_blank" :href="sideBar.url">
                        <span class="sign" v-text="sideBar.name"></span>
                        <span class="popup" v-text="sideBar.title" ></span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default{
    data () {
        return {
            sideBarList: [
                { name: '你', url: 'http://www.taobao.com', title: '你的链接取个名字吧' },
                { name: '我', url: 'http://www.alibaba.com', title: '我的链接' },
                { name: '他', url: 'http://www.taobao.com', title: '他的链接' },
                { name: '她', url: 'http://www.taobao.com', title: '她的链接' },
                { name: '它', url: 'http://www.taobao.com', title: '它的链接' }
            ]
        }
    },
    props: {
        'showSideBar': {
            type: Boolean,
            default: true
        }
    },
    computed: {
        
    },
    methods: {

    }
}
</script>
<style scoped>
.tool-side-bar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: 35px;
    height: 100%;
    background: #fff;
    box-shadow: 0 1px 10px rgba(0,0,0,0.2);
}
.side-bar-wrap {
    font-size: 12px;
    color: #464646;
}
.bar-box {
    min-height: 180px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -137px;
}
.bar-box .bar-list {
    position: relative;
    margin: 10px 0;
    height: 35px;
}
.bar-box .bar-list::after {
    content: "";
    display: inline-block;
    width: 19px;
    height: 1px;
    background: #ccc;
    position: absolute;
    bottom: -5px;
    left: 50%;
    margin-left: -9px;
}
.bar-box .bar-list .link {
    display: block;
    width: 35px;
    line-height: 35px;
    text-align: center;
    overflow: hidden;
}
.bar-box .bar-list .link:hover {
    background: #eaeaea;
    color: #00c1de;
}
.bar-box .bar-list .link:hover .popup {
    opacity: 1;
    -webkit-transform: translate(10px,0);
    -moz-transform: translate(10px,0);
    -ms-transform: translate(10px,0);
    -o-transform: translate(10px,0);
    transform: translate(10px,0);
    -webkit-transition: -webkit-transform 0.4s;
    -moz-transition: -moz-transform 0.4s;
    -ms-transition: -ms-transform 0.4s;
    -o-transition: -o-transform 0.4s;
    transition: transform 0.4s;
}
.bar-box .bar-list .link .sign {
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 35px;
    line-height: 35px;
    overflow: hidden;
}
.bar-box .bar-list .link .popup {
    display: inline-block;
    position: absolute;
    right: 45px;
    opacity: 0;
    top: 0;
    height: 35px;
    line-height: 35px;
    padding: 0 20px;
    background: #00c1de;
    color: #fff;
    white-space: nowrap;
}
.bar-box .bar-list .link .popup:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: -8px;
    top: 50%;
    margin-top: -4px;
    border: 4px solid transparent;
    border-left: 4px solid #00c1de;
}
</style>