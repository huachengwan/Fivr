<template>
  <v-app>
    <app-top-fixed/>
    <v-content>
      <app-header/>
      <slot/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from './AppHeader'
import AppTopFixed from './AppTopFixed'
import AppFooter from './AppFooter'
export default{
  name: 'MainLayout',
  components: {
    AppTopFixed,
    AppHeader,
    AppFooter
  }
}
</script>
