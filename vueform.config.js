import en from '@vueform/vueform/locales/en';
import vueform from '@vueform/vueform/dist/tailwind';
import { defineConfig } from '@vueform/vueform';

export default defineConfig({
  theme: vueform,
  locales: { en },
  locale: 'en',
  axios: window.axios,
  apiKey: 'qiqm-ejiz-zuu6-fak9-kq7r',
});
