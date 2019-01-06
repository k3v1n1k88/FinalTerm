<template>
  <div class="form-login1">
      <h2 class="text">Tạo tài khoản</h2>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="username"
                        label-for="exampleInput1"
                        >
                        <b-input-group prepend="$">
                            <b-form-input id="usernameInput"
                                type="text"
                                required
                                placeholder="User name"
                                v-model="form.username">
                            </b-form-input>
                        </b-input-group>  
                    </b-form-group>
                    <b-form-group id="password"
                        label-for="exampleInput2">
                        <b-input-group  prepend="$">
                        <b-form-input id="pwdInput"
                            type="password"
                            required
                            placeholder="Password" 
                            v-model="form.password">              
                        </b-form-input>
                    </b-input-group> 
                    </b-form-group>
                <b-form-group id="permission"
                        label-for="exampleInput1"
                        >
                        <b-input-group prepend="$">
                            <b-form-input id="usernameInput"
                                type="text"
                                required
                                placeholder="Permission"
                                v-model="form.permission">
                            </b-form-input>
                    </b-input-group>  
                </b-form-group>
                <b-form-group id="email"
                        label-for="exampleInput1"
                        >
                        <b-input-group prepend="$">
                            <b-form-input id="usernameInput"
                                type="text"
                                required
                                placeholder="Email"
                                v-model="form.email">
                                >
                            </b-form-input>
                    </b-input-group>  
                </b-form-group>
                <b-form-group id="account"
                        label-for="exampleInput1"
                        >
                        <b-input-group prepend="$">
                            <b-form-input id="usernameInput"
                                type="text"
                                required
                                placeholder="Account Name"
                                v-model="form.account">
                            </b-form-input>
                    </b-input-group>  
                </b-form-group>
                <b-form-group id="phone"
                        label-for="exampleInput1"
                        >
                        <b-input-group prepend="$">
                            <b-form-input id="usernameInput"
                                type="text"
                                required
                                placeholder="Phone"
                                v-model="form.phone">
                            </b-form-input>
                    </b-input-group>  
                </b-form-group>
                <b-form-group id="money"
                        label-for="exampleInput1"
                        >
                        <b-input-group prepend="$">
                            <b-form-input id="usernameInput"
                                type="text"
                                required
                                placeholder="Số tiền"
                                v-model="form.money">
                            </b-form-input>
                    </b-input-group>  
                </b-form-group>
                <b-form-group id="accountnumber"
                        label-for="exampleInput1"
                        >
                        <b-input-group prepend="$">
                            <b-form-input id="usernameInput"
                                type="text"
                                required
                                placeholder="Số tài khoản"
                                v-model="form.accountnumber">
                            </b-form-input>
                    </b-input-group>  
                </b-form-group>
       
      <b-button  class="text-center button" type="submit" variant="primary">Tạo tài khoản</b-button>
     
    </b-form>
  </div>
</template>
<style>
   .form-login1{
    margin-left: 400px;
    margin-top: 50px;
    padding: 80px;
    width: 500px;
    height: 100%;
    border: 1px solid #95a7b7;
    border-radius: 5px;
    background: aliceblue
    }
    
</style>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        username: '',
        password:'',
        permission:'',
        email:'',
        account:'',
        phone:'',
        money:'',
        accountnumber:'',

      },
      
      show: true
    }
  }, 
  methods: {
    onSubmit (evt) {
        var self = this;
        evt.preventDefault();
        alert(JSON.stringify(this.form));
        axios.post('/api/getcontacts', {
                    params: {
                        username: self.form.username,
                        username: self.form.password,
                        username: self.form.permission,
                        username: self.form.email,
                        username: self.form.account,
                        username: self.form.phone,
                        username: self.form.money,
                        username: self.form.accountnumber
                    }
                })
                    .then(function(res){
                        alert(res);
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
