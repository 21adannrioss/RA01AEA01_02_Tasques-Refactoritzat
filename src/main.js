// Importació de la funció createApp de Vue, que serveix per crear l'aplicació
import { createApp } from 'vue'
import App from './App.vue'
// Estils globals de l'aplicació
import './assets/main.css'

// Creació de l'aplicació amb App com a component principal, que es mostra dins de l'index.html
createApp(App).mount('#app')