<template>
  <v-container fluid>
    <v-layout>
      <v-container >
        <v-layout >
          <v-flex xs9>
            <v-layout row wrap>
              <v-flex xs12>
                <main-filter/>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <list-searched/>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs3>
            <v-layout>
              <v-flex xs12>
                <list-recommended/>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import MainFilter from './MainFilter'
import ListSearched from './ListSearched'
import ListRecommended from '@/views/main/ListRecommended'
export default {
  name: 'Search',
  components: {
    MainFilter,
    ListSearched,
    ListRecommended
  }
}
</script>