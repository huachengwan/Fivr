<template>
  <v-toolbar app class='white' flat scroll-off-screen >
    <v-container fluid class='pa-0'>
      <v-layout>
        <v-flex xs12>
          <v-container class='pa-0'>
            <v-layout>
              <v-flex xs12>
                <div style='float:left' class='pt-3 left-section'>
                  <city-chooser/>
                </div>
                <div style='float:right' class='right-section'>
                  <span class='text-capitalize'>Hi, Please login..</span>
                  <v-btn @click='openSigninDialog' flat class='d-inline text-capitalize'>Log in</v-btn>
                  <v-btn @click='openSignupDialog' flat class='d-inline text-capitalize'>Sign up it's free</v-btn>
                  <v-btn flat class='d-inline text-capitalize'>Contact Support</v-btn>
                  <v-btn flat class='d-inline text-capitalize'>Help</v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <blu-dialog :dialogVisible='visibleOfSigninDialog' @close='closeSigninDialog'>
      <signin-form @close='closeSigninDialog'/>
    </blu-dialog>
    <blu-dialog :dialogVisible='visibleOfSignupDialog' @close='closeSignupDialog' :max-width=800>
      <signup-form @close='closeSignupDialog'/>
    </blu-dialog>
  </v-toolbar>
</template>

<script>
import BluDialog from '@/components/BluDialog'
import SigninForm from '@/components/SigninForm'
import SignupForm from '@/components/SignupForm'
import CityChooser from '@/components/CityChooser'

export default{
  name: 'TopFixed',
  components: {
    BluDialog,
    SigninForm,
    SignupForm,
    CityChooser,
  },
  data: () => ({
    visibleOfSigninDialog: false,
    visibleOfSignupDialog: false,
  }),
  computed: {
    logo: () => ( require('@/assets/logo.png') ),
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

<style lang='stylus' scoped>
.left-section
  float: left
.right-section
  span
    display:block
    float: left
    margin-top: 15px
  button
    min-width: 60px
    padding-left: 4px
    padding-right: 4px

</style>