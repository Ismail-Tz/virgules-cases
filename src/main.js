import { createApp } from 'vue';
import App from './App.vue';
import './assets/Fonts.css';
import './assets/tailwind.css';

// Import the store from your store.js file
import { store } from './store'; // Adjust the path if necessary

createApp(App)
  .use(store) // Register the store
  .mount('#app');