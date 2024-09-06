import { createRouter, createWebHistory } from 'vue-router';
import MultipleProductsPage from '@/components/MultipleProductsPage.vue';
import ProductPage from '@/components/ProductPage.vue';
import CheckoutPage from '@/components/CheckoutPage.vue';

const routes = [
  { path: '/', component: MultipleProductsPage },
  { path: '/product/:id', component: ProductPage, props: true },
  { path: '/checkout', component: CheckoutPage },
  // New route for filtering by model
  { path: '/model/:brand/:model', component: MultipleProductsPage, props: true },
];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;