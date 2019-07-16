import Vue from 'vue';
import '@/plugins/vuetify';
import '@/plugins/drag';
import App from '@/App.vue';
// import DragItDude from 'vue-drag-it-dude';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
