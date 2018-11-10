<template>
  <v-layout row wrap>
    <v-flex xs12 class=''>
      <div class='left project-image mr-2'>
        <v-img :src='`http://localhost:8000/media/${data.main_image__path}`' aspect-ratio='1' width='100%'/>
      </div>
      <div class='left short-desc'>
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
      </div>
    </v-flex>
    <v-flex xs12 class="more-section mt-2">
      <div class='tabs'>
        <v-btn flat :class='{primary:moreTab=="description"}' @click='moreTab="description"'>Description</v-btn>
        <v-btn flat :class='{primary:moreTab=="contacts"}' @click='moreTab="contacts"'>Contacts</v-btn>
        <v-btn flat :class='{primary:moreTab=="seller-shop-page"}' @click='moreTab="seller-shop-page"'>Seller shop page</v-btn>
      </div>
      <div class='tab-content pa-2'>
        <div v-if='moreTab=="description"'>
          {{data.description}}
        </div>
        <div v-if='moreTab=="contacts"'>
          <h2>Comming Soon...</h2>
        </div>
        <div v-if='moreTab=="seller-shop-page"'>
          <h2>Comming Soon...</h2>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProjectDetail',
  data: ()=>({
    moreTab: 'description'
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
  .project-image
    width: 360px
    padding: 10px
    border: 1px solid
    border-color: inherit
  .short-desc
    label
      font-weight:bold
      display:inline-block
      width:150px
    .display-2
      color:var(--v-primary-base)
  .more-section
    .tabs
      border-bottom: 1px solid
      border-color: var(--v-primary-base)
      .v-btn
        margin: 0
        text-transform: capitalize
        border-width: 1px
        border-style: solid
        border-radius: 0
        margin-left: -1px
</style>