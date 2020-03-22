import Router from 'vue-router'
import Vue from 'vue'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile';
import Signin from '@/components/User/Signin';
import Signup from '@/components/User/Signup';

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
            component: Profile   
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
    mode: 'history'

})
