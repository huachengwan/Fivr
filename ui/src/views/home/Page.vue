<template>
  <div>
    <!--<v-container fluid>-->
      <!--<v-layout>-->
        <!--<v-container app>-->
          <!--<v-layout>-->
            <!--<v-flex>-->
                <!--<h2>Home Page...</h2>-->
            <!--</v-flex>-->
          <!--</v-layout>-->
        <!--</v-container>-->
      <!--</v-layout>-->
    <!--</v-container>-->
    <main-slider/>
    <category-list/>
  </div>
</template>

<script>
import MainSlider from './MainSlider'
import CategoryList from './CategoryList'
export default {
  name: 'Home',
  components: {
    MainSlider,
    CategoryList,
  }
}
</script>
