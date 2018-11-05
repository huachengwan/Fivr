<template>
  <div>
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
