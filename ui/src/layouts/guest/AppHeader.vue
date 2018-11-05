<template>
  <v-container fluid py-0>
    <v-layout >
      <v-flex xs12>
        <v-container py-0 >
          <v-layout align-center justfy-center fill-height>              
            <v-flex xs12 sm6 md2 order-md1 order-sm1>
                <router-link to='/' >
                  <v-img :src='logo' width='200'/>
                </router-link>
            </v-flex>
            <v-flex xs12 sm6 md4 order-md2 order-sm2 class="pt-4">
                <v-text-field label="Search" solo></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md1 order-md3 order-sm3>
                <v-btn depressed large color="primary">Primary</v-btn>
            </v-flex>
            <v-flex xs12 sm6 md5 order-md4 order-sm4 class="pl-5">
              Publisher service! It's free. Plase offer.
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    logo: () => ( require('@/assets/logo.png'))
  },
}
</script>
<style lang='stylus' scoped>


</style>
