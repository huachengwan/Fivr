<template>
  <div class='filter-section'>
    <!--
    <div class='servic-type-section'>
      <span class="subheading">Category filter: </span>
      <v-btn flat v-for='category in allCategoriesEx' @click='select_category(category)' :class='{primary: category.id==searchParams["category_id"]}'>{{category.name}}</v-btn>
    </div>
    -->
    <div class='type-section'>
      <span class="subheading">Service type filter: </span>
      <v-btn flat v-for='type in allTypesEx' @click='select_type(type)' :class='{primary: type.id==searchParams["type_id"]}'>{{type.name}}</v-btn>
    </div>
    <div class='city-section'>
      <span class="subheading">City location filter: </span>
      <v-btn flat v-for='city in allCities' @click='select_city(city)' :class='{primary: city.id==searchParams["city_id"]}'>{{city.name}}</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'MainFilter',
  computed: {
    ...mapState('thing', ['allCities', 'allCategories', 'allTypes', 'searchParams']),
    allCategoriesEx: function(){
      let list = this.allCategories
      list.unshift({
        id: '',
        name: 'All'
      })
      return list
    },
    allTypesEx: function(){
      let list = this.allTypes
      list.unshift({
        id: '',
        name: 'All'
      })
      return list
    }
  },
  methods: {
    select_category: function (category) {
      this.searchParams.category_id = category.id
    },
    select_city: function (city) {
      this.searchParams.city_id = city.id
    },
    select_type: function (type) {
      this.searchParams.type_id = type.id
    }
  },
  mounted(){
    this.$store.dispatch('thing/listAllCategories')
    this.$store.dispatch('thing/listAllCities')
    this.$store.dispatch('thing/listAllTypes')
  }
}
</script>
<style lang='stylus' scoped>
.filter-section
  .v-btn
    margin: 0
    height: 24px
    min-width: inherit

</style>