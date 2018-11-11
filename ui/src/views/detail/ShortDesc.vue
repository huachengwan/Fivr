<template>
  <div class='left wrapper'>
    <p class='visit-count subheading text-xs-right'>Visits: {{visitCount}}</p>
    <h4 class='headline'>{{data.name}}</h4>
    <p>
      <label><strong>Price From</strong></label>
      <span class='display-2 price'>S/.&nbsp;{{data.price_from}}</span>
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
    <div class='rating-section'>
      <div class='left' v-if='data.score_average'>
        <label>Rating:</label>
        <star-rating :star-size=15 v-model="data.score_average" read-only :increment='0.01' :show-rating='false'/>
        <span>{{data.score_average}}</span>
      </div>
      <div class='left ml-1'>
        <label>Comments:</label>
        <span>{{data.comment_count}}</span>
      </div>
      <div class='left ml-1'>
        <label>Contacts:</label>
        <span>{{data.contact_count}}</span>
      </div>
    </div>
    <div v-if='contactable!="none"'>
      <v-btn class='primary' @click='openContactDialog'>Contact</v-btn>
    </div>
    <blu-dialog :dialogVisible='visibleOfContactDialog' @close='closeContactDialog'>
      <contact-form @close='closeContactDialog'/>
    </blu-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BluDialog from '@/components/BluDialog'
import ContactForm from './ContactForm'
export default {
  name: "ShortDesc",
  components: {
    BluDialog,
    ContactForm,
  },
  data: ()=>({
    visibleOfContactDialog: false,
  }),
  computed: {
    ...mapState('thing', ['selectedDetail']),
    ...mapState('social', ['visitCount']),
    data: function() {
      return this.selectedDetail.data
    },
    contactable: function() {
      return this.selectedDetail.contactable
    }
  },
  methods: {
    openContactDialog: function(){
      this.visibleOfContactDialog = true
    },
    closeContactDialog: function(){
      this.visibleOfContactDialog = false
    }
  },
}
</script>

<style lang='stylus' scoped>
.wrapper
  width: calc(90% - 360px)
  .visit-count
    color:var(--v-info-base)
  label
    font-weight:bold
    display:inline-block
    width:150px
  .display-2
    color:var(--v-primary-base)
  .rating-section
    overflow: hidden
    border-top: 1px solid #ccc
    padding: 10px 0
    label
      width: auto
      margin-right: 5px
    .vue-star-rating
      display: inline-block
    span
      color: var(--v-primary-base)

</style>