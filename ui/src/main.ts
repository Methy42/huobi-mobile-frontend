import { createApp } from 'vue'
import App from './App.vue'

import "./rem";

import 'vant/lib/index.css';
import requireBasic from "./components/requireBasic";

(window as any).isWeb = false;

if (
  !/Mobi|Android|iPhone/i.test(navigator.userAgent) &&
  !navigator.userAgent.match(/Mobi/i) &&
  !navigator.userAgent.match(/Android/i) &&
  !navigator.userAgent.match(/iPhone/i)
) {
  (window as any).isWeb = true;
}

const app = createApp(App);
app.use(requireBasic);
app.mount('#app');
(window as any).context = app;
