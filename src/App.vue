<template>
    <div id="app" :style="{ height: '100%' }">
        <header-nav v-show="showNav" :class="{ hasSideBar: showSideBar }"></header-nav>
        <side-bar v-show="showSideBar"></side-bar>
        <router-view :class="{ hasHeaderNav: showNav, hasSideBar: showSideBar }"></router-view>
    </div>
</template>

<script>
import headerNav from './components/headerNav'
import sideBar from './components/sideBar'

export default {
    name: 'app',
    data () {
        return {
            showNav: true,
            showSideBar: true
        }
    },
    components: {
        headerNav,
        sideBar
    },
    watch: {
        // 如果路由有变化，会执行该方法
        '$route': function() {
            this.routeChange()
        }
    },
    methods: {
        routeChange () {
            let path = this.$route.path
            if (path === '/' || path === '/homeEnvironmentBoard' || path === '/other') {
                this.showNav = true
                this.showSideBar = true
            } else {
                this.showNav = false
                this.showSideBar = false
            }
        }
    },
    created () {
        this.routeChange()
    }
}
</script>

<style scoped>
    body {
        background: #fff;
    }
    .hasSideBar {
        margin-right: 35px;
    }
    .hasHeaderNav {
        margin-top: 72px;
    }
</style>

