<template>
  <div class="form-login2">
      <h2 class="text">Thêm tài khoản</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="username"
            label-for="exampleInput1"
            >
            <b-input-group prepend="$">
                <b-form-input id="usernameInput"
                    type="text"
                    required
                    placeholder="Tên tài khoản"
                    v-model="form.username">
                </b-form-input>
        </b-input-group>  
      </b-form-group>
      <b-form-group id="phone"
            label-for="exampleInput2">
        <b-input-group  prepend="$">
            <b-form-input id="pwdInput"
                type="text"
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
                <b-form-input id="usernameInput"
                    type="text"
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
                <b-form-input id="usernameInput"
                    type="text"
                    required
                    placeholder="Số tiền nạp"
                    v-model="form.money">
                </b-form-input>
        </b-input-group>  
      </b-form-group>
       
      <b-button class="text-center button" type="submit" variant="primary">Thêm tài khoản</b-button>
     
    </b-form>
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
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        username:'',
        phone:'',
        account:'',
        money:''
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
                        username: self.form.phone,
                        username: self.form.account,
                        username: self.form.money
                        
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
