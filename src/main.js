// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import store from './store'

import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import './assets/css/common.css'

import HomeEnvironmentBoard from './views/HomeEnvironmentBoard'
import Other from './views/Other'
import App from './App'
import NotFound from './components/404'

Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
    path : '/',
    component : HomeEnvironmentBoard
}, {
    path : '/homeEnvironmentBoard',
    component : HomeEnvironmentBoard
}, {
    path : '/other',
    component : Other
}, {
    path : '*',
    component : NotFound
}]

const router = new VueRouter({
    // mode: 'history',  history模式
    routes
})

router.beforeEach((to, from, next) => {
    store._mutations.pushLoadStack[0]()
    next()
})

router.afterEach(route => {
    setTimeout(() => {
        store._mutations.completeLoad[0]()
    }, 100)
})

var app = new Vue({
    el: '#app',
    router,
    store,
    ...App,
});
