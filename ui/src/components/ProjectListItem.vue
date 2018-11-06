<template>
  <div class='item'>
    <div class='image pa-2 mr-2'>
      <router-link :to='`/detail/${item.id}`'><img :src='item.main_image__name' width=120 height=100></router-link>
    </div>
    <div class='main'>
      <router-link :to='`/detail/${item.id}`'><h4 class='title pa-1 my-1'>{{item.name}}</h4></router-link>
      <p class='desc pa-1 ma-0'><span class='mr-4'>Service type</span>{{item.type__name}}</p>
      <p class='desc pa-1 ma-0'><span class='mr-4'>Price type</span>{{item.price_type__name}}</p>
    </div>
    <div class='third'>
      <p class='ma-1 headline price'>S/.&nbsp;{{item.price_from}}</p>
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
    &.third
      width: 130px
      float:right
      p.price
        color: var(--v-primary-base)
</style>