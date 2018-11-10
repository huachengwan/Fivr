<template>
  <v-app>
    <app-top-fixed v-if='!isLogged'/>
    <app-top-fixed-logged v-if='isLogged'/>
    <v-content>
      <app-header/>
      <router-view/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppTopFixed from '@/components/AppTopFixed'
import AppTopFixedLogged from '@/components/AppTopFixed-Logged'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState('auth', ['isLogged']),
  },
  components: {
    AppTopFixed,
    AppTopFixedLogged,
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
</style>
