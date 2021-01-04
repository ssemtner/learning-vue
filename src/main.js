import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue"
import firebase from "@/firebaseInit";

import App from '@/App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from '@/router'

import store from "@/store"
import {firestorePlugin} from "vuefire";

Vue.use(firestorePlugin)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user)
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
