import { createRouter, createWebHistory } from 'vue-router';
import MultipleProductsPage from '@/components/MultipleProductsPage.vue';
import ProductPage from '@/components/ProductPage.vue';

const routes = [
    { path: '/', component: MultipleProductsPage },
    { path: '/product/:id', component: ProductPage, props: true }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;