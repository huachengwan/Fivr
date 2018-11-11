<template>
  <v-card>
    <v-card-title>
      <span class="headline">Signup</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-form ref='form' v-model='valid'>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field label="Username*" v-model='formData.username' :rules='rules.username' required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field label="Password*" type="password" :rules='rules.password' v-model='formData.password' required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field label="Email*" v-model='formData.email' :rules='rules.email' required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field label="Phone*" v-model='formData.phone' :rules='rules.phone' required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field label="First Name*" v-model='formData.first_name' :rules='rules.first_name' required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field label="Last Name*" v-model='formData.last_name' :rules='rules.last_name' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <blu-file-picker v-model='formData.photo_file'/>
            </v-flex>
            <v-flex xs12>
              <v-btn class='default' @click="close">Cancel</v-btn>
              <v-btn :disabled='!valid' class='primary right' @click="signup">Signup</v-btn>
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
import BluFilePicker from '@/components/BluFilePicker'
export default{
  name: 'SignupDialog',
  components: {
    BluFilePicker
  },
  data: () => ({
    valid: false,
    formData: {
      username: '',
      email: '',
      password: '',
      phone: '',
      first_name: '',
      last_name: '',
      photo_file: null,
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
      ],
      phone: [
        v => !!v || 'Phone number is required'
      ],
      first_name: [
        v => !!v || 'First name is required'
      ],
      last_name: [
        v => !!v || 'Last name is required'
      ],
    },
  }),
  methods: {
    signup: function() {
      if (!this.$refs.form.validate()) return
      this.$store.dispatch('auth/signup', this.formData).then(userAccount => {
        alert('Successfully signup! You can use your account now')
        this.$emit('close')
      },error => {
        alert('signup failure')
      })
    },
    close: function(){
      this.$emit('close')
    }
  }
}
</script>
