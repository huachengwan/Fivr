<template>
  <v-container fluid py-0>
    <v-layout >
      <v-flex xs12>
        <v-container py-0 >
          <v-layout align-center justfy-center fill-height>              
            <v-flex xs12>
              <div style='float:left'>
                <router-link to='/' >
                  <v-img :src='logo' width='200'/>
                </router-link>
              </div>
              <div style='float:left; display:inline-block'>
                <v-text-field label="Search" solo flat class='' v-model='keyword'/>
                <v-btn depressed large color="primary" class='pa-1' style='margin-left:-5px' @click='search'><v-icon>fas fa-search</v-icon></v-btn>
              </div>
              <div style='float:right'>
                <p class='subheading txt-ad'><span class='first'>Publish a service! It's free. </span><span class='second'>Post an offer.</span></p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    keyword: ''
  }),
  computed: {
    logo: () => ( require('@/assets/logo.png'))
  },
  methods: {
    search: function(){
      if(this.keyword!='') this.$store.dispatch('thing/setSearchParamsByText', this.keyword)
      this.$store.dispatch('thing/listSearched')
      this.$router.push({name:'Search'})
    },
  }
}
</script>
<style lang='stylus' scoped>
.v-btn
  min-width: 40px
  box-shadow:0 none;
  display:inline-block;
  height:50px
.txt-ad
  line-height:60px
  span.first
    background-color: transparent
    color: var(--v-secondary-base)
    margin-right: 20px
  span.second
    background-color: transparent
    color: var(--v-primary-base)
.v-input
  height:50px
  border: 1px solid var(--v-primary-base)
  display: inline-block
  width: 300px
</style>
