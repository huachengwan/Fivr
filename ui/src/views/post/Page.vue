<template>
  <v-container fluid>
    <v-layout>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <post-form/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import PostForm from './PostForm'
export default{
  name: 'Post',
  components: {
    PostForm
  }
}
</script>