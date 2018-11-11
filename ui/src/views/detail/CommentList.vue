<template>
  <div class="wrapper">
    <div v-for='comment in comments'>
      <div class='meta-header'>
        <div class='left'>
          <span class="commented-on">{{comment.commented_on}}</span>
          <star-rating class="star-score" :star-size=15 read-only v-model="comment.score" :show-rating='false'/>
        </div>
        <div class="right">
          <span class="commentor-name">{{comment["commentor.name"]}}</span>
          <v-img class="commentor-photo" :src='comment["commentor.photo"]' width='40' aspect-ratio='1'/>
        </div>
      </div>
      <div class='comment-body' v-html='comment.description'>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "CommentList",
  computed: {
    ...mapState('thing', ['selectedDetail']),
    comments: function(){
      return this.selectedDetail.data.comments
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
  .meta-header
    overflow: hidden
    border-top: 1px solid #ccc
    margin-top: 10px
    padding-top: 10px
    .commented-on
      display: inline-block
      line-height: 50px
      margin-right: 10px
    .star-score
      display: inline-block
    .commentor-name
      display: inline-block
      margin-right: 10px
      line-height: 30px
      margin-top: 6px
      vertical-align: top
    .commentor-photo
      border-radius: 50%
      display: inline-block
</style>