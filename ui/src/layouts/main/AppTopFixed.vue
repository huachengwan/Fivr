<template>
  <v-toolbar app class='white' flat scroll-off-screen >
    <v-container fluid class='pa-0'>
      <v-layout>
        <v-flex xs12>
          <v-container class='pa-0'>
            <v-layout>
              <v-flex xs12>
                <div style='float:left' class="pt-3">
                  <router-link to='/'>
                    Peru is great country...
                  </router-link>
                </div>
                <div style='float:right' >
                  <v-btn @click='logout' flat class='d-inline text-capitalize'>Logout</v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>

export default{
  name: 'TopFixed',
  components: {
  },
  computed: {
    logo: () => ( require('@/assets/logo.png'))
  },
  methods: {
    logout: function(){
      this.$store.dispatch('auth/logout')
      this.$router.go('/')
    },
  },
}
</script>

<style scoped>

</style>