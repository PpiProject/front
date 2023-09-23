<template>
    <div class="obertka">
      <img class="imgBanner" src="../assets/fon3.png">
    </div>
</template>

<script>
  import {mapState} from "vuex";
  import router from "@/router";

  export default {
    computed:{
      ...mapState('auth',['state']),
    },

    created() {
      if (this.$store.state.auth.authorize === false){
        router.push({name: 'login'})
      }
    },
  }
</script>

<style>

.obertka{
  position: relative;

}

.imgBanner{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}
  .header-main{
    text-align: center;
    padding-top: 50px;
    color: #7e7e7e;
    font-size: 40px;
  }

  .text-main{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .text{
    padding: 15px 0 0 15px;
    color: #ffffff;
    font-size: 30px;
  }

  .footer{
    background: linear-gradient(-65deg, #515050, #1f6d17);
    background-blend-mode: luminosity;
  }
</style>