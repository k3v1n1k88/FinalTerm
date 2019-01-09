export default {

  // home is a section without childs, set as an empty array
  home: [],

  transfers: [

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

  accounts: [

    {
      type: 'title',
      txt: 'Quản lý tài khoản',
      icon: 'fa fa-users context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Danh sach tai khoan',
      link: '/danhsachtaikhoan',
    },

    {
      type: 'link',
      txt: 'Dong tai khoan',
      link: '/remove-accounts',
    },

    {
      type: 'link',
      txt: 'Lich su giao dich',
      link: '/transfers-history',
    },

  ],

  admin: [

    {
      type: 'title',
      txt: 'Admin',
      icon: 'fa fa-user context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Tao tai khoan',
      link: '/taotaikhoan',
    },

    {
      type: 'link',
      txt: 'Them tai khoan thanh toan',
      link: '/themtaikhoan',
    },

    {
      type: 'link',
      txt: 'Nap tien vao tai khoan',
      link: '/naptien',
      icon: 'fa fa-credit-card context-menu__title-icon'
    }

  ],

};
