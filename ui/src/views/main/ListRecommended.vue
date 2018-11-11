<template>
  <v-layout class='wrap'>
   <v-flex xs12 class="section justify-center">
     <h4 class='headline'>Recommendation</h4>
     <ul>
       <li v-for='item in listRecommended'>
         <router-link :to='`/detail/${item.id}`'><img :src='item.main_image__path' width='120' height='100'/></router-link>
         <p class='subheading'><router-link :to='`/detail/${item.id}`'>{{item.name}}</router-link></p>
         <p>
           <star-rating :star-size=15 v-model="item.score_average" read-only :increment='0.01' :show-rating='false'/>
           <span>{{item.score_average}}</span>
           <label class='ml-2'>Contacts:</label>
           <span>{{item.contact_count}}</span>
         </p>
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
.wrap
  border: 1px solid #eee
  h4
    text-align:center
    margin-bottom:20px
  ul
    list-style:none
    padding:0
    li
      text-align:center
      max-width:100%
      .subheading a
        color: var(--v-accent-base)
      .vue-star-rating
        display: inline-block
      span
        color: var(--v-primary-base)
        font-weight: bold
</style>