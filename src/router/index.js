import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Order from '@/components/order/Order.vue'
import Recruit from '@/components/recruit/Recruit.vue'
import About from '@/components/about/About.vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Floating from '@/components/common/Floating.vue'
import Focus from '@/components/common/Focus.vue'
import LtdInfo from '@/components/about/LtdInfo.vue'
import JoinUs from '@/components/about/JoinUs.vue'
import ContactUs from '@/components/about/ContactUs.vue'
import Message from '@/components/about/Message.vue'
import FQA from '@/components/about/FQA.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/Floating',
      name: 'Floating',
      component: Floating
    },
    {
      path: '/Focus',
      name: 'Focus',
      component: Focus
    },
    {
      path: '/LtdInfo',
      name: 'LtdInfo',
      component: LtdInfo
    },
    {
      path: '/JoinUs',
      name: 'JoinUs',
      component: JoinUs
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
     {
      path: '/FQA',
      name: 'FQA',
      component: FQA
    }
  ]
})
