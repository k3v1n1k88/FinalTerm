import Vue from "vue";
import Router from "vue-router";
import employees from "./views/employees.vue";
import dangnhap from "./views/dangnhap.vue";
import taotaikhoan from "./views/taotaikhoan.vue";
import themtaikhoan from "./views/themtaikhoan.vue";
import naptien from "./views/naptien.vue";
import Home from './views/Home.vue'
import forbiden from './views/forbiden.vue'
import danhsachtaikhoan from './views/danhsachtaikhoan.vue'
import transfer from './views/transfer'
import store from './store'

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    console.log('authenticated '+ store.getters.isAuthenticated);
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/forbiden')
}
const checkIfLoggedIn = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next()
    return
  }
  next('/dangnhap')
}

const redirectHome = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next('/')
    return
  }
  next()
}



let router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/taotaikhoan",
            name: "taotaikhoan",
            component: taotaikhoan,
            beforeEnter: ifAuthenticated
        },
        {
            path: "/themtaikhoan",
            name: "themtaikhoan",
            component: themtaikhoan,
            beforeEnter: ifAuthenticated
        },
        {
            path: "/naptien",
            name: "naptien",
            component: naptien,
            beforeEnter: ifAuthenticated
        },
        {
            path: "/employees",
            name: "employees"
        },
        {
            path: '/dangnhap',
            name: 'dangnhap',
            component: dangnhap
            ,beforeEnter: redirectHome
        },
        // {
        //   path: '/transfer',
        //   name: 'transfer',
        //   // route level code-splitting
        //   // this generates a separate chunk (dynamicContent.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: function() {
        //     return import( webpackChunkName: "about"  "./views/employees.vue");
        //   }
        //   // component: () => import(/* webpackChunkName: "dynamicContent" */ './views/Transfer.vue')
        // },
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: checkIfLoggedIn
        },
        {
            path: '/forbiden',
            name: 'forbiden',
            component: forbiden,
            beforeEnter: checkIfLoggedIn
        },
        {
            path: '/danhsachtaikhoan',
            name: 'danhsachtaikhoan',
            component: danhsachtaikhoan,
            beforeEnter: checkIfLoggedIn
        },
        {
            path: '/transfer',
            name: 'transfer',
            component: transfer,
            beforeEnter: checkIfLoggedIn
        }

    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/dangnhap')
    } else {
        next()
    }
})

export default router;
