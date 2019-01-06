export default {

  // home is a section without childs, set as an empty array
  home: [],

  products: [

    {
      type: 'title',
      txt: 'Chuyển khoản',
      icon: 'fa fa-tag context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Cá nhân',
      link: '/transfer',
    },

    {
      type: 'link',
      txt: 'Danh Sách',
      link: '/transfer',
    },

    {
      type: 'link',
      txt: 'Thông tin giao dịch',
      link: '/transfer',
    },

  ],

  customers: [

    {
      type: 'title',
      txt: 'Quản lý tài khoản',
      icon: 'fa fa-users context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Đóng tài khoản thanh toán',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'List Contacts',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'List Newsletters',
      link: '/page',
    },

  ],

  account: [

    {
      type: 'title',
      txt: 'My Account',
      icon: 'fa fa-user context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Change Password',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Change Settings',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Logout',
      link: '/page',
    },

    {
      type: 'title',
      txt: 'Change Subscription',
      icon: 'fa fa-credit-card context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Plans',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Payment Settings',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Payment History',
      link: '/page',
    },

  ],

};
