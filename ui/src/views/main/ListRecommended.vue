<template>
  <v-layout class='wrap'>
   <v-flex xs12 class="section justify-center">
     <h4 class='headline'>Los mas usados</h4>
     <ul>
       <li v-for='item in listRecommended'>
         <router-link :to='`/detail/${item.id}`'><img :src='item.main_image__name' width='120' height='100'/></router-link>
         <p class='subheading'><router-link :to='`/detail/${item.id}`'>{{item.name}}</router-link></p>
       </li>
     </ul>
   </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "ListRecommend",
  computed: {
    ...mapState('thing', ['listRecommended'])
  },
  mounted() {
    this.$store.dispatch('thing/listRecommended')
  }
}
</script>

<style lang='stylus' scoped>
h4
  text-align:center
  margin-bottom:20px
ul
  list-style:none
  padding:0
  li
    text-align:center
    max-width:100%
</style>