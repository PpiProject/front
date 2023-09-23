<template>
  <div class="pre_header">
    <router-link to="/">
      <img class="logo" src="../assets/logo-ppi.png">
    </router-link>
    <div class="link-group">
      <router-link class="link" v-if="this.$store.state.auth.authorize === true" to="/home_page">Домашняя страница</router-link>
      <a class="link">О нас (в разработке)</a>
      <a class="link">Расписание (в разработке)</a>
    </div>
    <div v-if="this.$store.state.auth.authorize === false">
      <router-link class="link" to="/login">Вход</router-link>
    </div>
    <div v-else>
      <button @click="logout" class="logout">Выход</button>
    </div>

  </div>
  <router-view/>
</template>

<script>
// import {mapState} from "vuex";

import {mapActions, mapState} from "vuex";
import router from "@/router";
// import auth from "@/store/modules/auth/auth";

export default {
  name: "MainViev",

  computed:{
    ...mapState('auth',['state']),
  },

  created() {
    if (this.$store.state.auth.authorize === false){
      router.push({name: 'login'})
    }
  },

  methods:{
    ...mapActions('auth', ['setLogout']),

    logout(){
     this.$store.dispatch('auth/setLogout')
    }
  }
}


</script>

<style scoped>

.pre_header{
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(-65deg, #515050, #1f6d17);
  background-blend-mode: luminosity;
}

.logo{
  width: 250px;
}

.link-group{
  display: flex;
  justify-content: space-evenly;
  width: 775px;
}

.link{
  display: block;
  float: right;
  text-decoration: none;
  font-family: Avenir, sans-serif;
  font-size: 19px;
  color: white;
}

.logout{
  width: 120px;
  height: 45px;
  background: none;
  border: none;
  font-family: Avenir, sans-serif;
  font-size: 19px;
  color: white;
}

</style>