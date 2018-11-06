<template>
  <ul>
    <li v-for='item in listCreatedBy' class='item'>
      <project-list-item :item='item'/>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import ProjectListItem from "@/components/ProjectListItem";
export default {
  name: "ListCreatedBy",
  components: { ProjectListItem },
  computed: {
    ...mapState('thing', ['listCreatedBy']),
  },
  mounted(){
    this.$store.dispatch('thing/listCreatedBy',{token: this.$store.getters['auth/getToken']})
      .then(() => {},
        error => {})
  }
}
</script>

<style lang='stylus' scoped>
ul
  list-style:none
  padding:0
  li
    overflow: hidden
</style>