<template>
  <v-layout>
    <v-flex xs12>
      <div style="float:left">
        <v-btn class='primary' style='float:left'>My Projects</v-btn>
      </div>
      <div style='float: right'>
        <v-btn class='primary' @click='create'>Post a Project</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "PostButton",
  data: () => ({
    category: ''
  }),
  methods: {
    create: function(){
      this.$router.push({name: 'Post'})
    }
  }
}
</script>

<style scoped>

</style>