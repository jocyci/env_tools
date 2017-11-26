<template>
    <div id="app" :style="{height: '100%'}">
        <header-nav :showNav="showNav"></header-nav>
        <router-view :style="{ 'margin-top': '72px' }"></router-view>
    </div>
</template>

<script>
import headerNav from './components/headerNav'

export default {
    name: 'app',
    data () {
        return {
            showNav: true
        }
    },
    components: {
        headerNav
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
            } else {
                this.showNav = false
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
</style>

