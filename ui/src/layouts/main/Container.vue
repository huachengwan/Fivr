<template>
  <v-app light>
    <Header/>
    <slot/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default{
  name: 'MainLayout',
  components: {
    'Header': Header,
    'Footer': Footer
  }
}
</script>
