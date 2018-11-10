<template>
  <v-layout row wrap>
    <v-flex xs6 class='project-image'>
      <v-img :src='`http://localhost:8000/media/${data.main_image__path}`' aspect-ratio='1' width='90%' class='ma-1 pa-3'/>
    </v-flex>
    <v-flex xs6 class='short-desc'>
      <h4 class='headline'>{{data.name}}</h4>
      <p>
        <label><strong>Price From</strong></label>
        <span class='display-2 price'>{{data.price_from}}</span>
      </p>
      <p>
        <label><strong>Price Type</strong></label>
        <span class=''>{{data.price_type__name}}</span>
      </p>
      <p>
        <label><strong>Service Type</strong></label>
        <span class=''>{{data.type__name}}</span>
      </p>
      <p>
        <label><strong>Service Category</strong></label>
        <span class=''>{{data.category__name}}</span>
      </p>
      <div v-if='relation=="contactable"'>
        <v-btn class='primary'>Contact</v-btn>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-tabs active-class='active-tab'>
        <v-tab key='desc'>
          Description
        </v-tab>
        <v-tab key='contact'>
          Contacts
        </v-tab>
        <v-tab key='adword'>
          Anunciate
        </v-tab>
        <v-tab-item key='desc'>
          <v-card flat>
            <v-card-text>{{data.more.description}}</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item key='contact'>
          <v-card flat>
            <v-card-text>Will come soon</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item key='adword'>
          <v-card flat>
            <v-card-text>Will come soon</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProjectDetail',
  data: ()=>({
    tabEnable: true
  }),
  computed: {
    ...mapState('thing', ['selectedDetail']),
    data: function() {
      return this.selectedDetail.data
    },
    relation: function() {
      return this.selectedDetail.relation
    }
  }
}
</script>

<style lang='stylus' scoped>
.short-desc
  label
    font-weight:bold
    display:inline-block
    width:150px
  .display-2
    color:var(--v-primary-base)
.active-tab
  .v-window
    border: 1px solid var(--v-primary-base)
</style>