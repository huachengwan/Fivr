<template>
  <ul>
    <li v-for='item in listSearched' class='item'>
      <project-list-item :item='item'/>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import ProjectListItem from "@/components/ProjectListItem";
export default {
  name: 'ListSearched',
  components: { ProjectListItem },
  computed: {
    ...mapState('thing', ['listSearched']),
  },
  mounted(){
    this.$store.dispatch('thing/listSearched')
      .then(() => {

      }, error => {

      })
  }
}
</script>

<style lang='stylus' scoped>
ul
  list-style:none
  padding:0
</style>