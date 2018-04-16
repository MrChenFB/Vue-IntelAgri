<template>
  <div class="main">
      <header>
          <div class="Name">智慧农业产学研</div>
      </header>
      <div class="register">
          <p>账号注册</p>
          <form action=""></form>
          <div class="box">
            <label for="username">设置账号</label>
            <input type="text" name="username" placeholder="设置账号" v-model="inputname"
                @click="showuserinfo=false">
            <div class="tips" v-show="showuserinfo">{{userinfo}}</div>
          </div>
          <div class="box">
            <label for="username">设置密码</label>
            <input type="password" name="password1" placeholder="设置密码" v-model="inputpwd1"
                @click="showpwd1=false">
            <div class="tips" v-show="showpwd1">{{pwd1}}</div>
          </div>
           <div class="box">
            <label for="username">重复密码</label>
            <input type="password" name="password2" placeholder="重复密码" v-model="inputpwd2"
                @click="showpwd2=false">
            <div class="tips" v-show="showpwd2">{{pwd2}}</div>
          </div>
           <div class="box">
            <label for="username">手机验证码</label>
            <input type="text" name="username" placeholder="账号" v-model="inputcode"
                @click="showcodeinfo=false">
            <button v-show="flag" type="button" @click="getPhoneCode">获取验证码</button>
            <button v-show="!flag" type="button" :disabled="!flag">{{code_time}}秒之重新发送验证码</button>
            <div class="tips" v-show="showcodeinfo">{{codeinfo}}</div>
          </div>
          <div class="register-btn">
              <button type="button" id="submit_btn" @click="register">注册</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
      return {
        userinfo: "账号不能为空",
        pwd1: "密码不能为空",
        pwd2: "两次密码不相同",
        codeinfo: "验证码不正确",
        inputname: "",
        inputpwd1: "",
        inputpwd2: "",
        inputcode: "",
        flag: true,
        code_time: 0
      }
  },
  methods: {
      register() {
          if ((this.inputname == "" || this.inputpwd1 == "" || this.inputpwd2 == "") || this.inputpwd1 != this.inputpwd2 || this.inputcode == "") {
            if (this.inputname == "")
                this.showuserinfo = true
            if (this.inputpwd1 == "")
                this.showpwd1 = true
            if (this.inputpwd1 != this.inputpwd2)
                this.showpwd2 = true
            if (this.inputcode == "")
                this.showcodeinfo = true
            return
        }
        this.$axios.post("http://172.19.73.110:8001/user/", {
            username: this.inputname,
            password: this.inputpwd1,
            code: this.inputcode
        })
            .then(function(res) {
                console.log(res)
                alert("register success!")
                this.$router.push('/')
            }.bind(this))
            .catch(function(err) {
                console.log(err)
            })   
      },
      getPhoneCode() {
          this.flag = false
          this.code_time = 60
          var code_timer = setInterval(() => {
              this.code_time--
              if(this.code_time<=0) {
                  this.flag = true
                  clearInterval(code_timer)
              }
          },1000);
      }
  }
}
</script>

<style>

</style>
