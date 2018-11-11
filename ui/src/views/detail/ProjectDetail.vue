<template>
  <v-layout row wrap>
    <v-flex xs12 class='top-section'>
      <project-image/>
      <short-desc/>
    </v-flex>
    <v-flex xs12 class='mt-2'>
      <more-detail/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import ProjectImage from './ProjectImage'
import MoreDetail from './MoreDetail'
import ShortDesc from './ShortDesc'
export default {
  name: 'ProjectDetail',
  components:{
    ProjectImage,
    ShortDesc,
    MoreDetail
  },
  computed: {
    ...mapState('thing', ['selectedDetail']),
    data: function() {
      return this.selectedDetail.data
    },
    contactable: function() {
      return this.selectedDetail.contactable
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$store.dispatch('social/incVisitThing')
      this.$store.dispatch('social/getVisitThing')
    },1000)
  }
}
</script>

<style lang='stylus' scoped>
  .top-section
    width: 100%
</style>