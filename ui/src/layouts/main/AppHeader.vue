<template>
  <v-toolbar class='white'>
    <v-container>
      <button @click='logout'>Logout</button>
    </v-container>
  </v-toolbar>
</template>

<script>
export default{
  name: 'Header',
  methods: {
    logout: function(){
      this.$store.dispatch('auth/logout')
      this.$router.go('/')
      // this.$router.push({name:'Home'})
    }
  }
}
</script>
