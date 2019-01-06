<template>

      <b-list-group>
      <b-list-group-item> <router-link :to="{name:'dangnhap'}">Đăng nhập</router-link></b-list-group-item>
      <b-list-group-item ><router-link :to="{name:'taotaikhoan'}">Tạo tài khoản Internet Banking cho người dùng</router-link></b-list-group-item>
      <b-list-group-item><router-link :to="{name:'themtaikhoan'}">Thêm tài khoản thanh toán cho người dùng</router-link></b-list-group-item>
      <b-list-group-item><router-link :to="{name:'naptien'}">Nạp tiền vào tài khoản thanh toán</router-link></b-list-group-item>
     
    </b-list-group>
</template>

<script>
    export default {
        data() {
            menu: [
                {
                    href: '/',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                },
                {
                    href: '#',
                    title: 'Charts',
                    icon: 'fa fa-chart-area'
                },
            ]
        }
    }
</script>
