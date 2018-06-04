import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import AppDashboard from '@/components/AppDashboard';
import FormView from '@/components/FormView';

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'AppDashboard',
      component: AppDashboard,
    },
    {
      path: '/formview/:id',
      name: 'FormView',
      component: FormView,
    },
  ],
});

