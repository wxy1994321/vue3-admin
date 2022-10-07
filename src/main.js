import { createApp } from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import { refreshCache } from 'store'
//样式
import "assets/css/index.less";

import registerIcon from 'utils/registerIcon';
import globalProperties from './global/globalProperties';

//element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
refreshCache()
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(registerIcon)
app.use(globalProperties)
app.mount('#app')



