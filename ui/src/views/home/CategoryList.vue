<template>
  <v-container fluid>
    <v-layout>
      <v-container >
        <v-layout row wrap>
          <v-flex xs12>
            <h2 class='display-2 text-sm-center'>Explore The Marketplace</h2>
            <p class='headline text-sm-center'>Get Inspired to build your business</p>
          </v-flex>
          <v-flex v-for='(item, i) in allCategories' xs4>
            <v-hover>
              <v-card slot-scope='{ hover }' :class='`elevation-${hover ? 12 : 2}`'>
                <v-responsive class='align-center'>
                  <p class='text-sm-center '>
                    <router-link :to='`/search?category=${item.id}`' >
                      <v-icon size='100'>fa-ad</v-icon>
                    </router-link>
                  </p>
                </v-responsive>
                <v-card-text align-center>
                  <p class='text-sm-center headline'>
                    <router-link :to='{ name: "Search", query: {category:item.id}}' >
                      {{item.name}}
                    </router-link>
                  </p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CategoryList',
  computed: {
    ...mapState('thing', ['allCategories']),
  },
  mounted(){
    this.$store.dispatch('thing/listAllCategories')
  }
}
</script>

<style scoped>
img{
}
</style>