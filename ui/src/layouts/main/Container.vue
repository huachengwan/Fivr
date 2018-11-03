<template>
  <v-app light>
    <app-header/>
    <slot/>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
export default{
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
