import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../components/orders/Orders.vue'
import Products from '../components/products/Products.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/',  redirect: '/orders'},
    {path: '/products', name: 'Products', component: Products},
    {path: '/orders', name: 'Orders', component: Orders}
]

export default new VueRouter({
    routes
});




