import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './components/pages/Dashboard';
import Subject from './components/pages/Subject';
import Account from './components/pages/Account';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        { path: '/', component: Dashboard, name: '' },
        { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
        { path: '/subject', component: Subject, name: 'Subject' },
        { path: '/account', component: Account, name: 'Account' }
    ],
    mode: 'history'
})