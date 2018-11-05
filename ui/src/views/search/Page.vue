<template>
  <div>
    <main-filter/>
    <main-list/>
    <recommend-list/>  
    <!-- <div v-for='(item, i) in searchedThings'>
      {{item.name}}
    </div> -->
  </div>
</template>

<script>
import MainFilter from './MainFilter'
import MainList from './MainList'
import RecommenedList from './RecommenedList'
import { mapState } from'vuex'
export default {
  name: 'Search',
  components: {
    MainFilter,
    MainList,
    RecommenedList,
  },
  computed: {
    ...mapState('things', ['searchedThings'])
  },
  mounted(){
    console.log(this.$route.query)
    this.$store.dispatch('things/searchThings',this.$route.query)
  }
}
</script>