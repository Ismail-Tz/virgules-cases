import { createApp } from 'vue';
import App from './App.vue';
import './assets/Fonts.css';
import './assets/tailwind.css';

// Import the store from your store.js file
import { store } from './store/store'; // Adjust the path if necessary

// Create the app and use the Vuex store
const app = createApp(App);

// Use the store
app.use(store);

// Mount the app
app.mount('#app');