<template>
  <form @submit.prevent = "onsubmit" class="form_registration" method="post">
    <input type="text" name="login" v-model="login">
    <input type="password" name="password"  v-model="password">
    <input type="text" name="last_name"  v-model="last_name">
    <input type="text" name="first_name"  v-model="first_name">
    <button @click="test">
      Test
    </button>
    <button @click="test2">
      check
    </button>
    <button @click="plus">
      +
    </button>
    <button @click="minus">
      -
    </button>
  </form>
</template>

<script>

import axios from 'axios'
import {mapState, mapActions}  from 'vuex'
import router from "@/router";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return{
      login: '',
      password: '',
      last_name:  '',
      first_name: '',
    }
  },

  computed:{
    ...mapState('auth',['state']),
  },

  created() {
    if (this.$store.state.auth.authorize === false){
      router.push({name: 'login'})
    }
  },

  methods:{

    ...mapActions('auth', ["minus", "plus"]),


    async test(){
      let dataForm = {
        login: this.login,
        password: this.password,
        last_name: this.last_name,
        first_name: this.first_name
      }

      let dataJSon = JSON.stringify(dataForm);
      console.log(dataJSon);

      await axios.post('http://localhost/services/echoText', dataJSon)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    async test2(){
      let token = this.$store.state.auth.token;
      //
      let data = {'token': token}

      await axios.post('http://localhost/services/inspectToken', data)

          .then(response => {
            console.log(response.data)
            if (Number(response.data) > 2){
                this.$store.dispatch('auth/setLogout')
            }
          })
          .catch(error => {
            console.log(error)
          })

    },

    minus(){
      let argument = true;
      this.$store.dispatch('auth/minus', argument)
    },

    plus(){
     let argument2 = false;
     this.$store.dispatch('auth/plus', argument2)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.form_registration{
  margin: 0 auto;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
