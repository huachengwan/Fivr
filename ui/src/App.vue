<template>
  <div id="app">
    <component :is='layout'>
      <router-view/>
    </component>
  </div>
</template>

<script>
import GuestLayout from '@/layouts/guest/Container'
import MainLayout from '@/layouts/main/Container'
export default {
  name: 'App',
  computed: {
    layout: function(){
      return this.$store.state.config.layout
    }
  },
  components: {
    GuestLayout,
    MainLayout,
  }
}
</script>

<style>
</style>
