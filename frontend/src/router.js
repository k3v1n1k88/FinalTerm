import Vue from "vue";
import Router from "vue-router";
import employees from "./views/employees.vue";
import login from "./views/login.vue";
import dangnhap from "./views/dangnhap.vue";
import taotaikhoan from "./views/taotaikhoan.vue";
import themtaikhoan from "./views/themtaikhoan.vue";
import naptien from "./views/naptien.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/dangnhap",
      name: "dangnhap",
      component: dangnhap
    },
    {
      path: "/taotaikhoan",
      name: "taotaikhoan",
      component: taotaikhoan
    },
    {
      path: "/themtaikhoan",
      name: "themtaikhoan",
      component: themtaikhoan
    },
    {
      path: "/naptien",
      name: "naptien",
      component: naptien
    },
    {
      path: "/employees",
      name: "employees",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "./views/employees.vue");
      }
    }
  ]
});
