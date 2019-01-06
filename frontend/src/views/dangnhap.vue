<template>
  <div class="form-login">
      <h2 class="text">Đăng nhập</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="username"
            label-for="exampleInput1"
            >
            <b-input-group prepend="$">
                <b-form-input id="usernameInput"
                    type="text"
                    required
                    placeholder="User name">
                </b-form-input>
        </b-input-group>  
      </b-form-group>
      <b-form-group id="password"
            label-for="exampleInput2">
        <b-input-group  prepend="$">
            <b-form-input id="pwdInput"
                type="password"
                required
                placeholder="Password">               
            </b-form-input>
           </b-input-group> 
      </b-form-group>
      <b-button class="text-center button" type="submit" variant="primary">Login</b-button>
     
    </b-form>
  </div>
</template>
<style>
   .form-login{
    margin-left: 400px;
    margin-top: 50px;
    padding: 80px;
    width: 500px;
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
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      
      show: true
    }
  }, 
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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
