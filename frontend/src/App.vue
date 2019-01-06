<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style>
body {
 
  background-color: #f8f9fa !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://info.daily.airpay.vn/images/cyberpay/background_header.jpg');
}
</style>

