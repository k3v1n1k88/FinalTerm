<template>

 <div class="row">
  <h1>1. Thông tin giao dịch</h1>      
</div>
<div class="row" >
  <div class="col-sm-6">
    <form>
      <div class="form-group">
        <label for="InputAccount">Tài khoản chuyển tiền</label>
        <select id="combobox">
          <option v-for="item in walletInfor">{{item.id_wallet}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="InputWalletAccount">Tài khoản thụ hưởng</label>
        <input type="phone" class="form-control" id="InputWalletAccount" placeholder="Nhập số tài khoản người thụ hưởng"
        v-on:keyup.enter="getReceiverWalletInfor">
      </div>
      <div class="form-group">
        <label for="InputReceiverName">Họ tên người thụ hưởng</label>
        <input type="text" class="form-control" id="InputReceiverName" placeholder="Nhập họ tên người thụ hưởng">
      </div>

    </form>
  </div>
  <div class="col-sm-6">
    <form>
     <div class="form-group">
      <label for="InputEmail">Email người thụ hưởng</label>
      <input type="text" class="form-control" id="InputEmail" placeholder="Nhập email người thụ hưởng">
    </div> 
    <div class="form-group">
      <label for="InputMoney">Nhập số tiền chuyển</label>
      <input type="text" class="form-control" id="InputMoney" placeholder="12343432d">
    </div>
    <div class="form-group">
      <label for="InputNote">Nội dung chuyển tiền</label>
      <textarea class="form-control" id="InputNote" rows="3"></textarea>
    </div>  

    <div class="form-group ">
      <label for="inputState">Chọn phương thức thanh toán</label>
      <select id="inputState" class="form-control">
        <option selected>Người nhận thanh toán</option>
        <option selected>Người gửi thanh toán</option>
      </select>
    </div>              
  </form>         
</div>    
</div>
<div class="row">
  <div class="col-sm-6">          
    <button type="submit" class="btn btn-primary" id="myBtn" v-on:click="transferMoney">Chuyển tiền</button>
    <button type="submit" class="btn btn-primary">Huỷ</button>
  </div>
</div>   
</template>

<script>

  export default {
    name: 'transfer'
  }

</script>
<style scoped lang="scss">
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>


