<template>
  <v-card>
    <v-card-title>
      <span class="headline">Contact Message</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-form ref='form' v-model='valid'>
          <v-layout wrap>
            <v-flex xs12>
              <label>Contact phone number: </label>
              <span>{{ selectedDetail.data.created_by__phone }}</span>
            </v-flex>
            <div v-if='selectedDetail.contactable=="already"' style="width:100%">
              <v-flex xs12>
                <span class='subheading'>Already Contacted!!!</span>
              </v-flex>
            </div>
            <div v-if='selectedDetail.contactable=="allow"' style="width:100%">
              <v-flex xs12>
                <v-text-field label="Title*" v-model='formData.title' :rules='rules.title' required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea label="Description*" v-model='formData.description' :rules='rules.description' required></v-textarea>
              </v-flex>
              <v-flex xs12>
                <v-btn @click="close">Cancel</v-btn>
                <v-btn color='primary right' :disabled='!valid' @click="contact">Contact</v-btn>
              </v-flex>
            </div>
          </v-layout>
        </v-form>
      </v-container>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "ContactForm",
  data: () => ({
    valid: false,
    formData: {
      thing_id: '',
      title: '',
      description: ''
    },
    rules: {
      title: [
        v => !!v || 'Title is required'
      ],
      description: [
        v => !!v || 'Description is required.'
      ]
    }
  }),
  computed: {
    ...mapState('thing', ['selectedDetail'])
  },
  methods: {
    contact: function(){
      if (this.formData.thing_id == '' || this.formData.sender_id == ''){
        return
      }
      this.$store.dispatch('social/postContact',this.formData).then(
        () => {
          this.$emit('close')
        },error => {
          alert('error during contacting')
          this.$emit('close')
        }
      )
    },
    close: function(){
      this.$emit('close')
    }
  },
  mounted(){
    const detail = this.$store.state.thing.selectedDetail.data
    this.formData.thing_id = detail.id
  }
}
</script>

<style scoped>

</style>