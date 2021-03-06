import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile';
import Signin from '@/components/User/Signin';
import Signup from '@/components/User/Signup';
import OverzichtOpdrachten from '@/components/User/Overzicht-opdrachten';
import * as firebase from 'firebase';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home 
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/overzicht-opdrachten',
        name: 'OverzichtOpdrachten',
        component: OverzichtOpdrachten
    },
    {
        path: '/Signin',
        name: 'Signin',
        component: Signin,  
        meta: {requiresAuth: false}   
    },
    {
        path: '/Signup',
        name: 'Signup',
        component: Signup,
        meta: {requiresAuth: false}     
    }
]

const router = new VueRouter({
    routes
})

    router.beforeEach((to, from, next)=> {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth); //When this route has a parmater it will pass
        const isAuthenticated = firebase.auth().currentUser;
        if (requiresAuth && !isAuthenticated){
            next("/signin");
        }else{
            next();
        }
})

export default router



