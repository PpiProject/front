<template>
  <component :is="addComponent"></component>
</template>

<script>
import {mapState, mapMutations} from "vuex";
import router from "@/router";
import {defineAsyncComponent} from "vue";

export default {
  name: "HomePage",

  data() {
    return {
      auth: false,
      role: '',
      component: {}
    }
  },

  computed: {
    ...mapState('auth', ['state']),
    state() {
      return this.$store.state.auth.authorize
    },

    addComponent() {
      let role = this.$store.state.auth.nameRole;
      let nameComponent = '';

      switch (role) {
        case "Администратор":
          nameComponent = 'AdminMenu'
          break;
        case "Модератор":
          nameComponent = 'ModeratorMenu'
          break;
        case "Перподаватель":
          nameComponent = 'TeacherMenu'
          break;
        case "Специалист":
          nameComponent = 'SpecialMenu'
          break;
        case "Студент":
          nameComponent = 'StudentMenu'
          break
        default:
          nameComponent = 'GuestMenu'
          break;
      }

      return defineAsyncComponent(() => import(`@/views/menu_items/${nameComponent}`))
      // return ()=>import(`@/views/menu_items/${nameComponent}`)
    },
  },

  created() {
    this.auth = this.$store.state.auth.authorize
    this.role = this.$store.state.auth.nameRole
    if (this.$store.state.auth.authorize === false) {
      router.push({name: 'login'})
    }
  },

  watch: {
    state: function () {
      this.auth = this.$store.state.auth.authorize
    },
  },

  methods: {
    ...mapMutations('auth', ['logout'])

  }
}
</script>

<style scoped>

</style>