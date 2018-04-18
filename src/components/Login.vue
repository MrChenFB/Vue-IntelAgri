<template>
  <div class="main">
      <header>
          <div class="Name">智慧农业产学研</div>
      </header>
      <div class="login">
          <p>账号登录</p>
          <form action=""></form>
          <div class="username">
          <label for="username">账号</label>
          <input type="text" name="username" placeholder="请输入账号" required="required" v-model="inputname" >
          </div>
          <div class="password">
          <label for="password">密码</label>
          <input type="password" name="password" placeholder="请输入密码" required="required" v-model="inputpwd">
          </div>
          <div v-show="showinfo" class="info">{{info}}</div>
          <div class="button">
              <button type="button" id="loginbtn" @click="login">登录</button>
              <button type="button" id="registerbtn" @click="returnToRegister">注册</button>
          </div>
      </div>
  </div>
</template>

<script>
import store from '../store/store'
import {loginIn, loignOut} from '../store/modules/UserModule'

export default {
  name: "login",
  data() {
      return {
          username: "",
          password: "",
          info: "账号或密码有错",
          showinfo: false
      }
  },
  methods: {
      login() {
          this.username = this.inputname
          this.password = this.inputpwd
          if(this.inputname == "" || this.inputpwd == "") {
              this.showinfo = true
          }
          this.$axios.post("/login/", {
              'username': this.username,
              'password': this.password
          }).then(function(res) {
              this.$store.state.token = res.data.res.token
              console.log(res.token)
              console.log("login success")
              sessionStorage.setItem('token',res.data.res.token)
              this.$router.push('/home')
          }).catch(function(err) {
              this.showinfo = true;
              console.log(err)
          })
      },
      returnToRegister() {  
          this.$router.push('/register')
      }
  }
}
</script>

<style>

</style>
