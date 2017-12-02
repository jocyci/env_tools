<template>
    <header class="header" v-bind:class="{ active: showActive }">
        <a href="#" class="nav-toggle notext" @click="toggleActive">
            <i class="icon-menu"></i>
        </a>
        <nav class="header-nav-box">
            <ul class="clearfix">
                <li class="header-nav-list fl">
                    <router-link to="homeEnvironmentBoard">
                        <span class="nav-tab" v-bind:class="{ on: route === '/homeEnvironmentBoard' || route === '/' }">环境可用性看板</span>
                    </router-link>
                </li>
                <li class="header-nav-list fl">
                    <router-link to="other">
                        <span class="nav-tab" v-bind:class="{ on: route === '/other' }">otherA</span>
                    </router-link>
                </li>
            </ul>
        </nav>
  </header>
</template>
<script>
export default{
    data () {
        return {
            showActive: false
        }
    },
    props: {
        'showNav': {
            type: Boolean,
            default: true
        }
    },
    computed: {
        route () {
            return this.$route.path
        }
    },
    methods: {
        toggleActive () {
            this.showActive = !this.showActive
        },
        goBack () {
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 72px;
    background-color: rgba(0,0,0,0.2);
    -webkit-transition: background-color 0.3s;
    -moz-transition: background-color 0.3s;
    -ms-transition: background-color 0.3s;
    -o-transition: background-color 0.3s;
    transition: background-color 0.3s;
}
.header .nav-toggle {
    width: 84px;
    height: 72px;
    background: rgba(0,0,0,0.8);
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
}
.nav-toggle:hover {
    background: #00c1de;
}
.header nav .nav-tab {
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    padding: 9px 16px;
    display: block;
}
.header nav .nav-tab:hover,
.header nav .nav-tab.on {
    color: #00c1de;
}
.header nav.header-nav-box {
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    right: 100px;
    top: 19px;
    z-index: 99;
    -webkit-transform: translate(800px,0);
    -moz-transform: translate(800px,0);
    -ms-transform: translate(800px,0);
    -o-transform: translate(800px,0);
    transform: translate(800px,0);
    -webkit-transition: -webkit-transform 0.4s;
    -moz-transition: -moz-transform 0.4s;
    -ms-transition: -ms-transform 0.4s;
    -o-transition: -o-transform 0.4s;
    transition: transform 0.4s;
}
.header.active .header-nav-box {
    -webkit-transform: translate(0,0);
    -moz-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
    transform: translate(0,0);
}
.header-nav-box .header-nav-list a {
    display: block;
}
.header .nav-toggle .icon-menu {
    display: inline-block;
    position: absolute;
    width: 26px;
    height: 26px;
    background: url(../assets/images/ico-menu.png) no-repeat 0 0;
    left: 29px;
    top: 23px;
}
.header.active .icon-menu {
    -webkit-transition: -webkit-transform 0.4s;
    -moz-transition: -moz-transform 0.4s;
    -ms-transition: -ms-transform 0.4s;
    -o-transition: -o-transform 0.4s;
    transition: transform 0.4s;
    -webkit-transform: rotate(450deg);
    -moz-transform: rotate(450deg);
    -ms-transform: rotate(450deg);
    -o-transform: rotate(450deg);
    transform: rotate(450deg);
}
</style>
