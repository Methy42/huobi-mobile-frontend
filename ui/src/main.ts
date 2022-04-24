import { createApp } from 'vue'
import App from './App.vue'

import "./rem";

import 'vant/lib/index.css';
import requireBasic from "./components/requireBasic";

const app = createApp(App);
app.use(requireBasic);
app.mount('#app');
(window as any).context = app;
