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
                  <v-btn @click='openSigninDialog' flat class='d-inline text-capitalize'>Hi, Please login..</v-btn>
                  <v-btn @click='openSigninDialog' flat class='d-inline text-capitalize'>Sign In</v-btn>
                  <v-btn @click='openSignupDialog' flat class='d-inline text-capitalize'>Join</v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <blu-dialog :dialogVisible='visibleOfSigninDialog' @close='closeSigninDialog'>
      <signin-form/>
    </blu-dialog>
    <blu-dialog :dialogVisible='visibleOfSignupDialog' @close='closeSignupDialog'>
      <signin-form/>
    </blu-dialog>
  </v-toolbar>
</template>

<script>
import BluDialog from '@/components/BluDialog'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'

export default{
  name: 'TopFixed',
  components: {
    BluDialog,
    SigninForm,
    SignupForm,
  },
  data: () => ({
    visibleOfSigninDialog: false,
    visibleOfSignupDialog: false,
  }),
  computed: {
    logo: () => ( require('@/assets/logo.png'))
  },
  methods: {
    openSigninDialog: function(){
      this.visibleOfSigninDialog = true
    },
    closeSigninDialog: function(){
      this.visibleOfSigninDialog = false
    },
    openSignupDialog: function(){
      this.visibleOfSignupDialog = true
    },
    closeSignupDialog: function(){
      this.visibleOfSignupDialog = false
    }
  },
}
</script>

<style scoped>

</style>