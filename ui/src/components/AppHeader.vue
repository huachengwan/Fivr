<template>
  <v-toolbar class='white' flat >
    <v-container fluid class='py-0'>
      <v-layout >
        <v-flex xs12>
          <v-container class='py-0' >
            <v-layout align-center justfy-center fill-height>
              <v-flex xs12>
                <div class='logo-section'>
                  <router-link to='/'>
                    <v-img :src='logo' width='200'/>
                  </router-link>
                </div>
                <div class='search-section'>
                  <v-text-field label="Search" solo flat v-model='keyword' :class='{"small":$vuetify.breakpoint.xsOnly, "medium":$vuetify.breakpoint.mdAndDown, "large":$vuetify.breakpoint.lgAndUp}'/>
                  <v-btn depressed large color="primary" class='pa-1' style='margin-left:-5px' @click='search'><v-icon>fas fa-search</v-icon></v-btn>
                </div>
                <div class='promoto-section' >
                  <p class='subheading'><span class='first'>Publish a service! It's free. </span><span class='second'>Post an offer.</span></p>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    keyword: ''
  }),
  computed: {
    logo: () => ( require('@/assets/logo.png')),
    ...mapState('thing', ['searchParams'])
  },
  methods: {
    search: function(){
      this.searchParams.keyword = this.keyword
      this.$store.dispatch('thing/listSearched')
      this.$router.push({name:'Search'})
    },
  }
}
</script>
<style lang='stylus' scoped>
.logo-section
  float: left
  display: inline-block
.search-section
  float: left
  display: inline-block
  .v-btn
    min-width: 40px
    box-shadow:0 none;
    display:inline-block;
    height:50px
  .v-input
    height:50px
    border: 1px solid var(--v-primary-base)
    display: inline-block
    width: 300px
    &.large
      width:500px
      margin-left: 80px
.promoto-section
  float: right
  display: inline-block
  p
    line-height:60px
    span.first
      background-color: transparent
      color: var(--v-info-base)
      margin-right: 20px
    span.second
      background-color: transparent
      color: var(--v-primary-base)
</style>
