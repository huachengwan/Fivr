<template>
  <v-toolbar class='white'>
    <v-container>
      <v-toolbar-title v-text="title">Title</v-toolbar-title>
      <sigin-dialog/>
    </v-container>
  </v-toolbar>
</template>

<script>
import SigninDialog from './SigninDialog'

export default{
  name: 'Header',
  components: {
    SigninDialog
  },
  data: () => ({
    title: 'Fiverr'
  })
}
</script>
