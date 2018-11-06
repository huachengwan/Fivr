<template>
  <v-layout row wrap v-if='oneData'>
    <v-flex xs6 class='project-image'>
      <v-img :src='`http://localhost:8000/media/${oneData.main_image__name}`' aspect-ratio='1' width='90%' class='ma-1 pa-3'/>
    </v-flex>
    <v-flex xs6 class='short-desc'>
      <h4 class='headline'>{{oneData.name}}</h4>
      <p>
        <label><strong>Price From</strong></label>
        <span class='display-2 price'>{{oneData.price_from}}</span>
      </p>
      <p>
        <label><strong>Price Type</strong></label>
        <span class=''>{{oneData.price_type__name}}</span>
      </p>
      <p>
        <label><strong>Service Type</strong></label>
        <span class=''>{{oneData.type__name}}</span>
      </p>
      <p>
        <label><strong>Service Category</strong></label>
        <span class=''>{{oneData.category__name}}</span>
      </p>
      <div v-if='oneRelation=="contactable"'>
        <v-btn class='primary'>Contact</v-btn>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-tabs v-model="active" active-class='active-tab'>
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
            <v-card-text>{{oneData.more.description}}</v-card-text>
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
  name: "ProjectDetail",
  computed: {
    ...mapState('thing', ['oneData', 'oneRelation'])
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