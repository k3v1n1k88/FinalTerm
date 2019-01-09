<template>
    <div id="taotaikhoan">
    <MenuToggleBtn></MenuToggleBtn>

    <Menu></Menu>

    <ContentOverlay></ContentOverlay>
    <div class="form-login1" v-show="show">

        <h2 class="text">Tạo tài khoản</h2>
        <b-form @reset="onReset" v-if="show">
            <b-form-group id="username" label-for="exampleInput1">
                <b-input-group prepend="$">
                    <b-form-input type="text" required placeholder="User name" v-model="form.username">
                    </b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group id="password" label-for="exampleInput2">
                <b-input-group prepend="$">
                    <b-form-input id="pwdInput" type="password" required placeholder="Password" v-model="form.password">
                    </b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group id="permission" label-for="exampleInput1">
                <b-input-group prepend="$">
                    <b-form-input type="text" required placeholder="Permission" v-model="form.permission">
                    </b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group id="email" label-for="exampleInput1">
                <b-input-group prepend="$">
                    <b-form-input type="email" required placeholder="Email" v-model="form.email">
                        >
                    </b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group id="account" label-for="exampleInput1">
                <b-input-group prepend="$">
                    <b-form-input type="text" required placeholder="Account Name" v-model="form.account">
                    </b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group id="phone" label-for="exampleInput1">
                <b-input-group prepend="$">
                    <b-form-input type="tel" required placeholder="Phone" v-model="form.phone">
                    </b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group id="money" label-for="exampleInput1">
                <b-input-group prepend="$">
                    <b-form-input type="number" required placeholder="Số tiền" v-model="form.money">
                    </b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group id="accountnumber" label-for="exampleInput1">
                <b-input-group prepend="$">
                    <b-form-input type="number" required placeholder="Số tài khoản" v-model="form.account_number">
                    </b-form-input>
                </b-input-group>
            </b-form-group>
            <b-button class="text-center button" v-on:click.prevent="createAccount()" variant="primary">Tạo tài khoản</b-button>
        </b-form>
        
        <b-col md="8" offset="2">
          <div class="err" >
            <h3> {{message}}</h3>
        </div>
        </b-col>
    </div>


    <div v-if="message">
        <b-link href="/taotaikhoan">Tiep tuc</b-link>
        <p>hay</p>
        <b-link href="/">Tro ve man hinh chinh</b-link>
    </div>
    </div>
</template>
<style>
.form-login1 {
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
<style>
    .err{
      color: #f00;
      text-align: center; 
    }
</style>
<script>
import axios from 'axios'
import config from '../../config'
import MenuToggleBtn from '@/components/MenuToggleBtn.vue'
import Menu from '@/components/Menu.vue'
import ContentOverlay from '@/components/ContentOverlay.vue'


export default {
    components: {
        MenuToggleBtn,
        Menu,
        ContentOverlay,
    },
    data() {
        return {
            form: {
                username: '',
                password: '',
                permission: '',
                email: '',
                account: '',
                phone: '',
                money: '',
                account_number: '',
            },
            show: true,
            message: ''
        }
    },
    methods: {
        resetForm(){
            this.username= '',
            this.password= '',
            this.permission= '',
            this.email= '',
            this.account= '',
            this.phone= '',
            this.money= '',
            this.account_number= ''
        },
        createAccount(evt) {
            var self = this;
            //evt.preventDefault();
            alert(JSON.stringify(this.form));
            axios.post(config.url.create, {
                username: self.form.username,
                password: self.form.password,
                permission: self.form.permission === 1||self.form.permission ==='admin'?1:0,
                email: self.form.email,
                account_name: self.form.account,
                phone: self.form.phone,
                deposit: self.form.money,
                account_number: self.form.account_number
            })
            .then(function(res) {
                console.log(res);
                if(res.data.return_code == 200){
                    self.show = false;
                    self.message = res.data.msg;
                    self.resetForm();
                }
                else if(res.data.return_code == 400){
                    self.message = res.data.msg;
                }

            })
            .catch(function(error) {
                console.log(error);
                self.message = error.message;
            });

        },
        onReset(evt) {
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
