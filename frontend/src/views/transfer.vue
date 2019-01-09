<template>
  <div id="transfer">
    <MenuToggleBtn></MenuToggleBtn>

  <Menu></Menu>

  <ContentOverlay></ContentOverlay>
  <div class="form-login4">
      <h2 class="text">Chuyen tien</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
      <b-form-group id="account"
            label-for="exampleInput1"
            >
            <b-input-group prepend="$">
                <b-form-input id="usernameInput"
                    type="text"
                    required
                    placeholder="Số tài khoản">
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
                    placeholder="Số tiền nạp">
                </b-form-input>
        </b-input-group>  
      </b-form-group>
       
      <b-button class="text-center button" type="submit" variant="primary">Nạp tiền</b-button>
     
    </b-form>
  </div> 
</div>
</template>

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




