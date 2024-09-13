import { createRouter, createWebHistory } from 'vue-router';
import MultipleProductsPage from '@/components/MultipleProductsPage.vue';
import ProductPage from '@/components/ProductPage.vue';
import CheckoutPage from '@/components/CheckoutPage.vue';
import YourOrdersPage from '@/components/YourOrdersPage.vue';

const routes = [
  { path: '/', component: MultipleProductsPage },
  { path: '/product/:id', component: ProductPage, props: true },
  { path: '/checkout', component: CheckoutPage },
  { path: '/model/:brand/:model', component: MultipleProductsPage, props: true },
  // Route for YourOrdersPage
  { path: '/your-orders', component: YourOrdersPage },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to the top when navigating
    return { top: 0 };
  },

  
});

export default router;
