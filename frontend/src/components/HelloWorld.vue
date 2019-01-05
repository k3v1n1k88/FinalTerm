<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="border-color: darkgray; border-radius: 10px; border-right-width: 2px">
      <div style="text-align: center  ">
        <label style="font-size: 20px; font-weight: bold">TÀI KHOẢN NHÂN VIÊN</label>
      </div>
      <b-form-group id="exampleInputGroup1"
                    label="Username:"
                    label-for="exampleInput1"
      >
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.username"
                      required
                      placeholder="Enter your Username"
                      style="background-color: gainsboro"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Password:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.password"
                      required
                      placeholder="Enter your Password"
                      style="background-color: gainsboro"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>


