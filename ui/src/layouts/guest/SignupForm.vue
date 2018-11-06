<template>
  <v-card>
    <v-card-title>
      <span class="headline">Signup</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-form ref='form' v-model='valid'>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Username*" v-model='formData.username' :rules='rules.username' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Email*" v-model='formData.email' :rules='rules.email' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password*" type="password" :rules='rules.password' v-model='formData.password' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-btn :disabled='!valid' class='primary' @click="signup">Signup</v-btn>
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
  name: 'SignupDialog',
  data: () => ({
    valid: false,
    formData: {
      username: '',
      email: '',
      password: ''
    },
    rules: {
      username: [
        v => !!v || 'Username is required'
      ],
      email: [
        v => !!v || 'Email is required'
      ],
      password: [
        v => !!v || 'Password is required.'
      ]
    }
  }),
  methods: {
    signup: function() {
      if (!this.$refs.form.validate()) return
      this.$store.dispatch('auth/signup', this.formData).then(userAccount => {
        alert('Successfully signup! You can use your account now')
        //this.$router.push({name:'Main'})
      },error => {
        alert('signup failure')
      })
    }
  }
}
</script>
