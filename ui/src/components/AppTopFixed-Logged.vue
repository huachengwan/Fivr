<template>
  <v-toolbar app class='white' flat scroll-off-screen >
    <v-container fluid class='pa-0'>
      <v-layout>
        <v-flex xs12>
          <v-container class='pa-0'>
            <v-layout>
              <v-flex xs12>
                <div style='float:left' class="pt-3">
                  <city-chooser/>
                </div>
                <div style='float:right' >
                  <span >Hi, {{userAccount['first_name']}} {{userAccount['last_name']}}</span>
                  <v-btn @click='logout' flat class='d-inline text-capitalize'>Logout</v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'
import CityChooser from '@/components/CityChooser'
export default{
  name: 'TopFixed',
  components: {
    CityChooser
  },
  computed: {
    userAccount: () => {
      if (localStorage.getItem('userAccount')){
        return JSON.parse(localStorage.getItem('userAccount'))
      }else{
        return {first_name:'', last_name:''}
      }
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
}
</script>

<style scoped>

</style>