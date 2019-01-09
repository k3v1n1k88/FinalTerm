<template>
    <div id="wrapper" :class="wrapperClass">
    <MenuToggleBtn></MenuToggleBtn>

    <Menu ></Menu>

    <ContentOverlay></ContentOverlay>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from '../store'

import MenuToggleBtn from '@/components/MenuToggleBtn.vue'
import Menu from '@/components/Menu.vue'
import ContentOverlay from '@/components/ContentOverlay.vue'

export default {
  components: {
    MenuToggleBtn,
    Menu,
    ContentOverlay,
  },
  created() {

    window.bus.$on('menu/toggle', () => {
      window.setTimeout(() => {
        this.isOpenMobileMenu = !this.isOpenMobileMenu;
      }, 200);
    });

    window.bus.$on('menu/closeMobileMenu', () => {
      this.isOpenMobileMenu = false;
    });

  },

  data() {
    return {
      isOpenMobileMenu: false
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

<!-- built files will be auto injected -->
    <style lang="scss">
      @import '@/styles/layout.scss';
      @import '@/styles/menu-toggle-btn.scss';
      @import '@/styles/menu.scss';
      @import '@/styles/content-overlay.scss';
      @import '@/styles/media-queries.scss';
    </style>
<style>
      body {
        background-color: #f8f9fa !important;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('https://info.daily.airpay.vn/images/cyberpay/background_header.jpg');
      }
</style>

