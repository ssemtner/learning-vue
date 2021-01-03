import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import firebase from "firebase";

import App from '@/App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from '@/router'

import store from "@/store";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyA8gxz8rjosluFuGb4oQ3em8WHUxH9_iZg",
    authDomain: "learning-vue-ssemtner.firebaseapp.com",
    projectId: "learning-vue-ssemtner",
    storageBucket: "learning-vue-ssemtner.appspot.com",
    messagingSenderId: "419303269049",
    appId: "1:419303269049:web:28b0138585dfad042db168",
    measurementId: "G-QHSN47EG9Z"
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user)
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
