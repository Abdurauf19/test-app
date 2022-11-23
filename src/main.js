import { createApp } from 'vue';
export const app = createApp(App);
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router/index';
import i18n from './plugins/i18n';
import axios from './plugins/axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
// import Toast from './plugins/toastification'
import './assets/styles/styles.scss';
import 'element-plus/dist/index.css';
import "vue-toastification/dist/index.css";

import store from './store';
import {
	registerGlobalProperties,
	hideElement,
	addParams,
} from './helpers/global';

registerGlobalProperties.call(app, { hideElement, addParams });
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.use(Vuelidate);
app.use(VueAxios, axios);
// app.use(Toast);
app.use(store);
app.mount('#app');


