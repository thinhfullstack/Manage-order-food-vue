import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/home/Index.vue';
// users
import Login from '../views/users/Login.vue';

// navbar
import OrderCalendar from '../views/navbar/OrderCalendar.vue';
import NoticePage from '../views/navbar/NoticePage.vue';
import MyPageAdmin from '../views/navbar/MyPageAdmin.vue';
// register customers
import CartLunchP5 from '../views/register-customer/Index.vue';
import CartLunchP5_1 from '../views/register-customer/ConfirmationScreen.vue';
import CartLunchP5_2 from '../views/register-customer/Complete.vue';
// management order information
import Index from '../views/manage-order-information/Index.vue';
import RegisterOrder from '../views/manage-order-information/RegisterOrder.vue';
import ConfirmationScreen from '../views/manage-order-information/ConfirmationScreen.vue';
import Complete from '../views/manage-order-information/Complete.vue';
import Administrator from '../views/manage-order-information/Administrator.vue';
// order history
import MyPageTop from '../views/order-history/MyPageTop.vue';
import Monthly from '../views/order-history/Monthly.vue';
import Daily from '../views/order-history/Daily.vue';
import DailyDetails from '../views/order-history/DailyDetails.vue';
import Question from '../views/order-history/Question.vue';
// calendar
import TopOrderDate from '../views/calendar/TopOrderDate.vue';
import TopOrderMultipleDays from '../views/calendar/TopOrderMultipleDays.vue';
import TopAdministratorDay from '../views/calendar/TopAdministratorDay.vue';
import TopAdministratorMultipleDays from '../views/calendar/TopAdministratorMultipleDays.vue';
// order confirmation admin
import OrderDetailedConfirmationAdmin from '../views/order-confirm-admin/OrderDetailedConfirmationAdmin.vue';
// order screen
import MenuOrder from '../views/order-screen/OrderMenu.vue';
import CompletedOrder from '../views/order-screen/OrderCompleted.vue';
import PaymentConfirmation from '../views/order-screen/payment/PaymentConfirmation.vue';
// order screen - other orders
import OrderDelete from '../views/order-screen/other-orders/OrderDelete.vue';
import OrderConfirmation from '../views/order-screen/other-orders/OrderConfirmation.vue';
// notice
import NoticeList from '../views/notice/NoticeList.vue';
import NoticeDetails from '../views/notice/NoticeDetails.vue';
// support
import Support from '../views/supports/Support.vue';


const routes = [
    {
      path: '/',
      component: Home,
      name: 'home',
    },

    {
      path: '/users',
      children: [
        {
          path: '/users/login',
          component: Login,
          name: 'login',
        }
      ]
    },

    {
      path: '/navbar',
      children: [
        {
          path: '/navbar/order-calendar',
          component: OrderCalendar,
          name: 'cart-lunch_p2',
        },
        {
          path: '/navbar/notice-page',
          component: NoticePage,
          name: 'cart-lunch_p8',
        },
        {
          path: '/navbar/my-page-admin',
          component: MyPageAdmin,
          name: 'cart-lunch_p1',
        }
      ]
    },

    {
      path: '/register-customers',
      children: [
        {
          path: '/register-customers/cart-lunch_p5',
          component: CartLunchP5,
          name: 'cart-lunch_p5',
        },
        {
          path: '/register-customers/cart-lunch_p5_1',
          component: CartLunchP5_1,
          name: 'cart-lunch_p5_1',
        },
        {
          path: '/register-customers/cart-lunch_p5_2',
          component: CartLunchP5_2,
          name: 'cart-lunch_p5_2',
        },
      ]
    },

    {
      path: '/manage-order-information',
      children: [
        {
          path: '/manage-order-information/index',
          component: Index,
          name: 'cart-lunch_p10',
        },
        {
          path: '/manage-order-information/register-order',
          component: RegisterOrder,
          name: 'cart-lunch_p13',
        },
        {
          path: '/manage-order-information/confirmation-screen',
          component: ConfirmationScreen,
          name: 'cart-lunch_p13_2',
        },
        {
          path: '/manage-order-information/complete',
          component: Complete,
          name: 'cart-lunch_p13_3',
        },
        {
          path: '/manage-order-information/administrator',
          component: Administrator,
          name: 'cart-lunch_p9',
        }
      ]
    },

    {
      path: '/order-history',
      children: [
        {
          path: '/order-history/my-page-top',
          component: MyPageTop,
          name: 'my-page-top',
        },
        {
          path: '/order-history/monthly',
          component: Monthly,
          name: 'monthly',
        },
        {
          path: '/order-history/daily',
          component: Daily,
          name: 'daily',
        },
        {
          path: '/order-history/daily-details',
          component: DailyDetails,
          name: 'daily-details',
        },
        {
          path: '/order-history/question',
          component: Question,
          name: 'question',
        }
      ]
    },

    {
      path: '/calendar',
      children: [
        {
          path: '/calendar/top-order-day',
          component: TopOrderDate,
          name: 'top-order-day',
        },
        {
          path: '/calendar/top-order-multiple-days',
          component: TopOrderMultipleDays,
          name: 'top-order-multiple-days'
        },
        {
          path: '/calendar/top-administrator-day',
          component: TopAdministratorDay,
          name: 'top-administrator-day'
        },
        {
          path: '/calendar/top-administrator-multiple-days',
          component: TopAdministratorMultipleDays,
          name: 'top-administrator-multiple-days'
        }
      ]
    },

    {
      path: '/order-confirm-admin',
      component: OrderDetailedConfirmationAdmin,
      name: 'order-confirm-admin'
    },

    {
      path: '/order-screen',
      children: [
        {
          path: '/order-screen/menu-order',
          component: MenuOrder,
          name: 'menu-order'
        },
        {
          path: '/order-screen/completed-order',
          component: CompletedOrder,
          name: 'completed-order'
        },
        {
          path: '/order-screen/payment-confirmation',
          component: PaymentConfirmation,
          name: 'payment-confirmation'
        },
        {
          path: '/order-screen/order-delete',
          component: OrderDelete,
          name: 'order-delete'
        },
        {
          path: '/order-screen/order-confirmation',
          component: OrderConfirmation,
          name: 'order-confirmation'
        }
      ]
    },

    {
      path: '/notice',
      children: [
        {
          path: '/notice/notice-list',
          component: NoticeList,
          name: 'notice-list'
        },
        {
          path: '/notice/notice-details',
          component: NoticeDetails,
          name: 'notice-details'
        }
      ]
    },

    {
      path: '/support',
      component: Support,
      name: 'support'
    }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router