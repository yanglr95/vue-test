import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import OrderListPage from './pages/orderList'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import AdressPage from './pages/about'
import AdressFilling from './pages/about/filling'
import AdressProduct from './pages/about/product'
import AdressSafety from './pages/about/safety'
import AdressRisk from './pages/about/risk'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/orderList',
			component: OrderListPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		},
		{
			path: '/about',
			component: AdressPage,
			redirect: '/about/filling',
			children: [
				{
					path: 'filling',
					component: AdressFilling
				},
				{
					path: 'product',
					component: AdressProduct
				},
				{
					path: 'safety',
					component: AdressSafety
				},
				{
					path: 'risk',
					component: AdressRisk
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
