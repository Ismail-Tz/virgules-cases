import { createApp } from 'vue';
import App from './App.vue';
import './assets/Fonts.css';
import './assets/tailwind.css';

// Import the store from your store.js file
import { store } from './store'; // Adjust the path if necessary

// Import the router from your router/index.js file
import router from './router'; // Adjust the path if necessary

const app = createApp(App);

app.use(store); // Register the store
app.use(router); // Register the router

app.mount('#app');
