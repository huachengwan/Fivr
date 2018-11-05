<template>
  <v-container fluid class='pa-0 ma-0'>
    <v-layout>
      <v-flex xs12>
        <v-container class='pa-0'>
          <v-layout column>
            <v-flex xs12>
              <router-link to='/'>
                <v-img :src='logo' width='40' height='40'/>
              </router-link>
              <v-text-field label="Name" solo clearable style='width:200px'/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    logo: () => ( require('@/assets/logo.png'))
  },
}
</script>
