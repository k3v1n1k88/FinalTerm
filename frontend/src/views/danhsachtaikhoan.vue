<template>
    <div id="taotaikhoan">
        <MenuToggleBtn></MenuToggleBtn>

        <Menu></Menu>

        <ContentOverlay></ContentOverlay>
            
        <b-container>
            <b-col md="8" offset="2">
          <!-- Content here -->
                <b-table striped hover :items="list"></b-table>
            </b-col>
        </b-container>
        {{err_msg}}
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
<script>
import axios from 'axios'
import config from '../../config'

import MenuToggleBtn from '@/components/MenuToggleBtn.vue'
import Menu from '@/components/Menu.vue'
import ContentOverlay from '@/components/ContentOverlay.vue'

export default {
    data(){
        return{
            list:[],
            err_msg:''
        }
    },
    components: {
        MenuToggleBtn,
        Menu,
        ContentOverlay,
    },
    methods: {
        getlist: function(){
            
        }
    },

    created(){
        var self = this;
            var url = config.url.getlist;
            axios.post(url)
            .then( resp => {
                console.log(resp.data.list_accounts);
                self.list = resp.data.list_accounts;
                if(self.list.length < 1){
                    self.err_msg = resp.data.message;
                }
                console.log(self.list);
            })
            .cattch( err =>{
                console.log(err);
            })
    },
}
</script>
