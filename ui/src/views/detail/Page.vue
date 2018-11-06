<template>
  <v-container fluid>
    <v-layout>
      <v-container>
        <v-layout>
          <v-flex xs9>
            <project-detail/>
          </v-flex>
          <v-flex xs3>
            <list-recommended/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectDetail from './ProjectDetail'
import ListRecommended from '@/views/main/ListRecommended'
import store from '../../store'
export default{
  name: 'Detail',
  data: () => ({
    item: {},
  }),
  components: {
    ProjectDetail,
    ListRecommended
  },
  beforeRouteEnter(to, from, next){
    store.dispatch('thing/getDetail',to.params.id)
    next()
  },
  beforeRouteUpdate(to, from, next){
    store.dispatch('thing/getDetail',to.params.id)
    next()
  }
}
</script>