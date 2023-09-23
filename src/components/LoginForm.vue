<template>
  <div class="login-page">
    <div class="obertka">
      <form @submit.prevent = "onsubmit" class="form_registration" method="post">
          <div class="headerLogin"> Вход на портал ППИ</div>
          <input type="text" name="login" v-model="login" placeholder="Логин">
          <input type="password" name="password"  v-model="password" placeholder="Пароль">
            <button class="btnLogin" @click="test">Войти</button>
      </form>
      </div>
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
      if (loginUser.data.length !== 0 ){
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
  height: 90vh;
  /*height: 615px;*/
  /*background-image: url("../assets/banner7.png");*/
  /*background-size: cover;*/
}

.obertka{
  height: 100vh;
  background-image: url("../assets/fon3.png");
}

.headerLogin{
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #858585;
}

.form_registration{
  margin-top: 3rem;
  width: 300px;
  height: 250px;
  background-color: #efeeee;
  border-radius: 25px;
  padding: 50px;
  position:absolute; top: 50%; left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

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

</style>