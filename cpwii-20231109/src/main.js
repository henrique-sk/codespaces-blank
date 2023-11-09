import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Food from './components/Food.vue'
import Sobremesa from './components/Sobremesa.vue'

var app = createApp(App)
app.component('food-vue', Food)
app.component('sobremesa-vue', Sobremesa)

app.mount('#app')
