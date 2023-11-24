import { createApp } from "vue";

import "./styles.css";
import "./index.css";
import App from "./App.vue";
import VTooltip from 'v-tooltip'



const app = createApp(App);
app.use(VTooltip);
app.mount("#app");
