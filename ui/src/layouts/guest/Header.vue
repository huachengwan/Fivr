<template>
  <v-toolbar class='white'>
    <v-container>
      <v-toolbar-title v-text="title">Title</v-toolbar-title>
      <SigninDialog/>
    </v-container>
  </v-toolbar>
</template>

<script>
import SigninDialog from './SigninDialog'

export default{
  name: 'Header',
  components: {
    'SigninDialog': SigninDialog
  },
  data: () => ({
    title: 'Fiverr'
  })
}
</script>
