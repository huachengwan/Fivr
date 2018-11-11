<template>
  <div class='wrapper'>
    <div class='tabs'>
      <v-btn flat :class='{primary:moreTab=="description"}' @click='moreTab="description"'>Description</v-btn>
      <v-btn flat :class='{primary:moreTab=="comments"}' @click='moreTab="comments"'>Comments <span class='comment-count'>{{data.comment_count>0?data.comment_count:''}}</span></v-btn>
      <v-btn flat :class='{primary:moreTab=="seller-shop-page"}' @click='moreTab="seller-shop-page"'>Seller shop page</v-btn>
    </div>
    <div class='tab-content pa-2'>
      <div v-if='moreTab=="description"' v-html='data.description'>
      </div>
      <div v-if='moreTab=="comments"'>
        <comment-post/>
        <comment-list/>
      </div>
      <div v-if='moreTab=="seller-shop-page"'>
        <h2>Comming Soon...</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CommentPost from "@/views/detail/CommentPost"
import CommentList from "@/views/detail/CommentList"
export default {
  name: "MoreDetail",
  components: {
    CommentList,
    CommentPost
  },
  data: ()=>({
    moreTab: 'description',
  }),
  computed: {
    ...mapState('thing', ['selectedDetail']),
    data: function() {
      return this.selectedDetail.data
    },
  },
}
</script>

<style lang='stylus' scoped>
.wrapper
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
      .comment-count
        color: var(--v-primary-base)
        margin-left: 5px
</style>