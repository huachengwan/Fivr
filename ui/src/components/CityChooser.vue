<template>
  <div class='city-chooser'>
    <a v-for='city in allCities' class='item' :class='{"active":city.id==searchParams.city_id}' @click='select(city)'>
      {{city.name}}
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CityChooser',
  computed: {
    ...mapState('thing', ['allCities', 'searchParams'])
  },
  methods: {
    select: function(city){
      this.searchParams.city_id = city.id
    }
  },
  mounted() {
    this.$store.dispatch('thing/listAllCities')
  }
}
</script>

<style lang="stylus" scoped>
.city-chooser
  a.item
    display: inline-block
    padding: 4px
    color: inherit
    &.active
      color: var(--v-primary-base)
      font-weight: bold
</style>