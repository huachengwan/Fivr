<template>
  <div class="wrapper">
    <div v-if='commentable=="allow"'>
      <v-form ref='form' v-model='valid'>
        <v-layout wrap row>
          <v-flex xs12>
            <label class='left subheading'>Service quality:</label>
            <star-rating class='left' :star-size=20 v-model="formData.score"/>
          </v-flex>
          <v-flex xs12>
            <v-textarea label="Comment Text*" v-model='formData.description' :rules='rules.description' required outline/>
          </v-flex>
          <v-flex xs12>
            <v-btn class="primary right" :disabled='!valid' @click="post">Post</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </div>
    <div v-if='commentable=="already"'>
      <h4 class='headline font-weight-medium font-italic'>You have already commented about this project...</h4>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "CommentPost",
  data: () => ({
    valid: false,
    formData:{
      score: 5,
      description: '',
      thing_id: ''
    },
    rules: {
      description: [
        v => !!v || 'Description is required'
      ]
    }
  }),
  computed: {
    ...mapState('thing', ['selectedDetail']),
    commentable: function(){
      return this.selectedDetail.commentable
    }
  },
  methods: {
    post: function(){
      this.$store.dispatch('social/postComment',this.formData).then(
        () => {
          this.$emit('close')
        },error => {
          alert('error during commenting')
          this.$emit('close')
        }
      )
    }
  },
  mounted(){
    const detail = this.$store.state.thing.selectedDetail.data
    this.formData.thing_id = detail.id
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
  width: 100%
</style>