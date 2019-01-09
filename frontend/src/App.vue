<template>
  <div id="app">
    <router-view/>
  </div>



</template>

<script>
import store from './store'
// @ is an alias to /src

export default {
  data() {
    return {
      showMenu: this.$store.getters.isLoggedIn,
      isOpenMobileMenu: false,
    };
  },

  created() {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            store.dispatch(logout)
        }
        throw err;
      });
    });

    // window.bus.$on('menu/toggle', () => {
    //   window.setTimeout(() => {
    //     this.isOpenMobileMenu = !this.isOpenMobileMenu;
    //   }, 200);
    // });

    // window.bus.$on('menu/closeMobileMenu', () => {
    //   this.isOpenMobileMenu = false;
    // });

  }

}


</script>

