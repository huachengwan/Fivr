<template>
  <div>
    <div>
      <span class="subheading">Service type filter: </span>
      <v-btn  v-for='category in allCategories' @click='select_category(category)' :class='{primary: category.id==searchParams["category_id"]}'>{{category.name}}</v-btn>
    </div>
    <div>
      <span class="subheading">City location filter: </span>
      <v-btn  v-for='city in allCities' @click='select_city(city)' :class='{primary: city.id==searchParams["city_id"]}'>{{city.name}}</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'MainFilter',
  computed: {
    ...mapState('thing', ['allCities', 'allCategories', 'searchParams']),
  },
  methods: {
    select_category: function (category) {
      this.searchParams.category_id = category.id
    },
    select_city: function (city) {
      this.searchParams.city_id = city.id
    }
  },
  mounted(){
    this.$store.dispatch('thing/listAllCategories')
    this.$store.dispatch('thing/listAllCities')
  }
}
</script>