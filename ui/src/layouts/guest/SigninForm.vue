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
              <v-btn color='primary' :disabled='!valid' @click="tryLogin">Login</v-btn>
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
    }
  }),
  methods: {
    tryLogin: function() {
      if (!this.$refs.form.validate()) return
      this.$store.dispatch('auth/tryLogin',this.formData).then(userAccount => {
        this.$router.go('/main')
        //this.$router.push({name:'Main'})
      },error => {
        // alert
        alert('login failure')
      })
    }
  }
}
</script>
