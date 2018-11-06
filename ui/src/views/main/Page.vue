<template>
  <v-container fluid>
    <v-layout>
      <v-container >
        <v-layout >
          <v-flex xs9>
            <v-layout row wrap>
              <v-flex xs12>
                <post-button/>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <list-created-by/>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <list-applied-by/>
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
import PostButton from './PostButton'
import ListCreatedBy from './ListCreatedBy'
import ListAppliedBy from './ListAppliedBy'
import ListRecommended from './ListRecommended'
export default {
  name: 'Main',
  components: {
    PostButton,
    ListCreatedBy,
    ListAppliedBy,
    ListRecommended,
  }
}
</script>
