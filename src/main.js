import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue';
import router from './router';

import { VueQueryPlugin } from "@tanstack/vue-query";

const app=createApp(App)
app.use(VueQueryPlugin)
app.use(router)
app.mount('#app');
