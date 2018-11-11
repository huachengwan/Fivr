<template>
  <v-card>
    <v-card-title>
      <span class="headline">Login to Fiverr</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-form ref='form' v-model='valid'>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Username*" v-model='formData.username' :rules='rules.username' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password*" type="password" :rules='rules.password' v-model='formData.password' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <!--
              <g-signin-button :params='googleSigninParams' @success='onSigninSuccess' @error='onSigninError'>
                Sign in with Google
              </g-signin-button>
              -->
            </v-flex>
            <v-flex xs12>
              <v-btn class='default' @click="close">Cancel</v-btn>
              <v-btn color='primary right' :disabled='!valid' @click="tryLogin">Login</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-container>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
export default{
  name: 'SigninDialog',
  data: () => ({
    valid: false,
    formData: {
      username: '',
      password: ''
    },
    rules: {
      username: [
        v => !!v || 'Username is required'
      ],
      password: [
        v => !!v || 'Password is required.'
      ]
    },
    googleSigninParams: {
      client_id: '240178466896-tbvua8563o0e8182ib09fgtl28rv6rs0.apps.googleusercontent.com'
    }
  }),
  methods: {
    tryLogin: function() {
      if (!this.$refs.form.validate()) return
      this.$store.dispatch('auth/tryLogin',this.formData).then(userAccount => {
        this.$router.push({name: 'Main'})
      },error => {
        // alert
        alert('login failure')
      })
    },
    close: function(){
      this.$emit('close')
    },
    onSigninSuccess (googleUser){
      const profile = googleUser.getBasicProfile()
    },
    onSigninError (error){
      console.log('Google Signin error', error)
    }
  }
}
</script>
