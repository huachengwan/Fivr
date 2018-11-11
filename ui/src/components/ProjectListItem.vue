<template>
  <div class='item'>
    <div class='image-section pa-2 mr-2'>
      <router-link :to='`/detail/${item.id}`'><v-img :src='item.main_image__path' aspect-ratio='1'/></router-link>
    </div>
    <div class='main'>
      <router-link :to='`/detail/${item.id}`'><h4 class='title pa-1 my-1'>{{item.name}}</h4></router-link>
      <p class='desc pa-1 ma-0'><span class='mr-4'>Service type</span>{{item.type__name}}</p>
      <p class='desc pa-1 ma-0'><span class='mr-4'>Seller shop page</span>...(currently blank)...</p>
    </div>
    <div class='third'>
      <p class='ma-1 headline price'>S/.&nbsp;{{item.price_from}}</p>
      <p><star-rating :star-size=15 v-model="item.score_average" read-only :increment='0.01' :show-rating='false'/></p>
      <p>Contacts: {{item.contact_count}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectListItem',
  props: [
    'item'
  ]
}
</script>

<style lang='stylus' scoped>
.item
  width: 100%
  > div
    float:left
    &.image-section
      width: 120px
      .v-img
        width: 90%
        margin 0 5%
    &.main
      width: calc(100% - 260px)
      .title
        color: var(--v-accent-base)
        font-weight: bold
    &.third
      width: 120px
      float:right
      p.price
        color: var(--v-primary-base)
</style>