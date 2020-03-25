import Router from 'vue-router'
import Vue from 'vue'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile';
import Signin from '@/components/User/Signin';
import Signup from '@/components/User/Signup';
import * as firebase from 'firebase';

Vue.use(Router)

export default new Router({

    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {requiresAuth: true}   
        },
        {
            path: '/Signin',
            name: 'Signin',
            component: Signin   
        },
        {
            path: '/Signup',
            name: 'Signup',
            component: Signup   
        }
    ],


    mode: 'history',

    })

    Router.beforeEach((to, from, next)=> {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth); //When this route has a parmater it will pass
        const isAuthenticated = firebase.auth().currentUser;
        if (requiresAuth && !isAuthenticated){
            next("/signin");
        }else{
            next();
        }
})
