<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/employees">Employees</router-link>
    </div>
    <router-view/>
  </div>



</template>

<script>
// @ is an alias to /src

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {

  components: {
    // MenuToggleBtn,
    // Menu,
    // ContentOverlay,
  },

  created() {

    // window.bus.$on('menu/toggle', () => {
    //   window.setTimeout(() => {
    //     this.isOpenMobileMenu = !this.isOpenMobileMenu;
    //   }, 200);
    // });

    // window.bus.$on('menu/closeMobileMenu', () => {
    //   this.isOpenMobileMenu = false;
    // });

  },


  data() {
    return {
      isOpenMobileMenu: false,
    };
  },

  computed: {
    wrapperClass() {
      return {
        'toggled': this.isOpenMobileMenu === true,
      };
    },
  }

}


</script>


