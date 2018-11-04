<template>
  <v-carousel hide-controls hide-delimiters>
    <v-carousel-item
      v-for='(item,i) in items'
      :key='i'
      :src='`${baseUrl}img/${item.src}`'
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'MainSlider',
  data: () => ({
    baseUrl: process.env.BASE_URL,
    items: [
      {
        src: 'desktop_head_Mike_Lin_v4.jpg'
      },
      {
        src: 'desktop_head_Cecily_Wiggins_v4.jpg'
      },
    ]
  })
}
</script>

<style scoped>

</style>