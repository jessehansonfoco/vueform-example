import { createApp } from 'vue';
import './css/tailwind.compiled.css';
import './css/vueform.css';
import App from './App.vue';
import Vueform from '@vueform/vueform';
import vueformConfig from '../vueform.config';

const app = createApp(App);
app.use(Vueform, vueformConfig);
app.mount('#app');
