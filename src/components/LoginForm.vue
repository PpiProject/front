<template>
  <div class="login-page">
    <form @submit.prevent = "onsubmit" class="form_registration" method="post">
      <div class="headerLogin"> Вход на портал ППИ</div>
      <input type="text" name="login" v-model="login" placeholder="Логин">
      <input type="password" name="password"  v-model="password" placeholder="Пароль">
      <button class="btnLogin" @click="test">
        Войти
      </button>
    </form>
  </div>

</template>

<script>
import {mapActions, mapState} from 'vuex';
import router from "@/router";
import {getUser} from "@/api/user";

export default {
  name: "LoginForm",
  data(){
    return {
      login: '',
      password: ''
    }
  },
  computed: {
    ...mapState('auth', ['state']),
  },

  watch:{
    state(newValue, oldValue){
      console.log(`Updating from ${oldValue} to ${newValue}`);
    }
  },
  methods:{
    ...mapActions("auth", ['setAuth']),
    async test(){

      let dataForm = {
        login: this.login,
        password: this.password,
      }

      let dataJSon = JSON.stringify(dataForm);

      const loginUser = await getUser(dataJSon);

      console.log(loginUser)
      if (loginUser.data !== 0 ){
        let dataAuth = {
          user: `${loginUser.data.last_name} ${loginUser.data.first_name}`,
          token: loginUser.data.token,
          nameRole: loginUser.data.nameRole
        }

        this.$store.dispatch("auth/setAuth", dataAuth)
        await router.push({name: 'home_page'})

        localStorage.token = loginUser.data.token;
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap');

.login-page{
  background-color: #036008;
  height: 100vh;
}

.headerLogin{
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #727272;
}

.form_registration{
  position: absolute;
  width: 522px;
  height: 200px;
  background-color: #efeeee;
  margin-top: 150px;
  border-radius: 25px;
  left: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.form_registration input{
  width: 300px;
  height: 45px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #409d3b;
}

.btnLogin{
  width: 150px;
  height: 45px;
  border: none;
  border-radius: 30px;
  background-color: #1f6d17;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: white;
}
.login-page{
  /*height: 615px;*/
  /*background-image: url("../assets/banner7.png");*/
  /*background-size: cover;*/
}
</style>