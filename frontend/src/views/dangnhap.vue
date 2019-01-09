<template>
  <div id="dangnhap" class="form-login">
    <h1 class="text">Sign In</h1>
    <b-form v-if="show">
        <b-form-group id="username" label-for="exampleInput1">
            <b-input-group prepend="$">
                <b-form-input id="usernameInput" type="text" required placeholder="User name" v-model="form.username">
                </b-form-input>
            </b-input-group>
        </b-form-group>
        <b-form-group id="password" label-for="exampleInput2">
            <b-input-group prepend="$">
                <b-form-input id="pwdInput" type="password" required placeholder="Password" v-model="form.password">
                </b-form-input>
            </b-input-group>
        </b-form-group>
        <div >
          <p class="err" v-model="error_message">{{error_message}}</p>
        </div>
        
        <div class="g-recaptcha" ref="recaptcha" :data-sitekey="rcapt_sig_key" @verify="onCaptchaVerified" @expired="onCaptchaExpired"></div>
        <br>
        <b-button v-on:click.prevent="onSubmit()" class="text-center button" type="submit" variant="primary">
          Login
        </b-button>
        <!-- <div class="input-group">
          <VueRecaptcha ref="recaptcha" @verify="onCaptchaVerified" @expired="onCaptchaExpired" size="invisible" sitekey="rcapt_sig_key">
          </VueRecaptcha>
          
        </div> -->
    </b-form>
</div>

</template> 
<style>
   .form-login{
      margin-left: 400px;
      margin-top: 50px;
      margin-bottom: 50px;
      padding: 80px;
      width: 500px;
      height: 500px;
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
    .err{
      color: #f00;
      text-align: center; 
    }
</style>
<script>

import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
import config from '../../config.json';
import store from '../store'


export default {
  data () {
    return {
      form: {
        username:'',
        password:''
      },
      status: "",
      sucessfulServerResponse: "",
      serverError: "",
      error_message: '',
      rcapt_sig_key: '6LfLZYcUAAAAAPzLwIn5EygG6XEmT2dXaalr81bh',
      rcapt_id: 0,
      show: true,
      api_key: config.api_key
    }
  },
  mounted() {
    if (window.grecaptcha) {
      this.rcapt_id = grecaptcha.render( $('.g-recaptcha')[0], { sitekey : this.rcapt_sig_key });
    }
  },
  methods: {
    isCaptchaChecked: function(){
      return grecaptcha && grecaptcha.getResponse().length !== 0;
    },
    onSubmit (evt) {
      const self = this;

      const username = self.form.username;
      const password = self.form.password;

      if(!this.isCaptchaChecked()){
        self.error_message = 'Capcha khong dung'
        return;
      }

      // evt.preventDefault();

      alert(JSON.stringify(self.form));
      store.dispatch('login', {username, password})
        .then((res) => {
          var return_code = res.data.return_code

          if(return_code == 200){
            this.$router.push('/');          
          }
          else{
            self.error_message = res.data.msg;
          }
        })
       .catch(err => {
          console.log(err);
          self.error_message = err.message;
        })
      // axios.post(`http://localhost:8888/signin`, {
      //   username: self.form.username,
      //   password: self.form.password,
      //   key: self.api_key 
      // })
      // .then(res => {
      //   var return_code = res.data.return_code;
      //   console.log(res)
      //   if(return_code == 200){
          
      //     const token = res.data.token;
      //     const user = res.data.account_name;

      //     localStorage.setItem('token', token);
      //     axios.de
      //     self.$router.push('Home');
      //   }
      //   else{
      //     self.error_message = res.data.msg;
      //   }
      // })
      // .catch(e => {
      //   console(e);
      // })
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },
    onCaptchaVerified: function (recaptchaToken) {
      const self = this;
      self.status = "submitting";
      self.$refs.recaptcha.reset();
      axios.post("https://vue-recaptcha-demo.herokuapp.com/signup", {
        username: self.username,
        password: self.password,
        recaptchaToken: recaptchaToken
      }).then((response) => {
        self.sucessfulServerResponse = response.data.message;
      }).catch((err) => {
        self.serverError = getErrorMessage(err);


        //helper to get a displayable message to the user
        function getErrorMessage(err) {
          let responseBody;
          responseBody = err.response;
          if (!responseBody) {
            responseBody = err;
          }
          else {
            responseBody = err.response.data || responseBody;
          }
          return responseBody.message || JSON.stringify(responseBody);
        }

      }).then(() => {
        self.status = "";
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
    },
    // onVerify(evt){
    // }
    
  }
}
</script>

