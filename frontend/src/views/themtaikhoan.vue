<template>
  <div id="themtaikhoan">
  <MenuToggleBtn></MenuToggleBtn>

    <Menu></Menu>

    <ContentOverlay></ContentOverlay>
  <div>
    <p>{{message}}</p>
  </div>
  <div class="form-login2">
      <h2 class="text">Thêm tài khoản</h2>
    <b-form @reset="onReset" v-if="show">
      <b-form-group id="username"
            label-for="exampleInput1"
            >
            <b-input-group prepend="$">
                <b-form-input id="usernameInput1"
                    type="text"
                    required
                    placeholder="Tên tài khoản"
                    v-model="form.account_name">
                </b-form-input>
        </b-input-group>  
      </b-form-group>
      <b-form-group id="phone"
            label-for="exampleInput2">
        <b-input-group  prepend="$">
            <b-form-input id="pwdInput"
                type="tel"
                required
                placeholder="Số điện thoại"
                v-model="form.phone">              
            </b-form-input>
           </b-input-group> 
      </b-form-group>
      <b-form-group id="account"
            label-for="exampleInput1"
            >
            <b-input-group prepend="$">
                <b-form-input id="usernameInput2"
                    type="number"
                    required
                    placeholder="Số tài khoản"
                    v-model="form.account">
                </b-form-input>
        </b-input-group>  
      </b-form-group>
      <b-form-group id="money"
            label-for="exampleInput1"
            >
            <b-input-group prepend="$">
                <b-form-input id="usernameInput3"
                    type="number"
                    required
                    placeholder="Số tiền nạp"
                    v-model="form.money">
                </b-form-input>
        </b-input-group>  
      </b-form-group>
       
      <b-button class="text-center button" v-on:click.prevent="onSubmit()" type="button" variant="primary">Thêm tài khoản</b-button>
     
    </b-form>

  </div>
  </div>
</template>
<style>
   .form-login2{
    margin-left: 400px;
    margin-top: 100px;
    padding: 80px;
    width: 500px;
    height: 700px;
    border: 1px solid #95a7b7;
    border-radius: 5px;
    background: aliceblue
    }
    .text{
        text-align: center;
        margin-bottom: 50px;
    }
    .button{
        margin-left: 120px;
    }
</style>
<script>
import MenuToggleBtn from '@/components/MenuToggleBtn.vue'
import Menu from '@/components/Menu.vue'
import ContentOverlay from '@/components/ContentOverlay.vue'
import config from '../../config'

import axios from 'axios'
export default {
  components: {
        MenuToggleBtn,
        Menu,
        ContentOverlay,
    },
  data () {
    return {
      form: {
        account_name:'',
        phone:'',
        account:'',
        money:''
      },
      
      show: true,
      message: ''
    }
  }, 
  methods: {
    onSubmit (evt) {
        var self = this;
        // evt.preventDefault();
        alert(JSON.stringify(this.form));
        axios.post(config.url.createaccount, {
                    params: {
                        account_name: self.form.account_name,
                        phone: self.form.phone,
                        account_number: self.form.account,
                        deposit: self.form.money
                    }
                })
                    .then(function(res){
                        console(res);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
    
  }
}
</script>
