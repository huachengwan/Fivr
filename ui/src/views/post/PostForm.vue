<template>
  <v-container>
    <v-form ref='form' v-model='valid'>
      <v-layout wrap>
        <v-flex xs12 class='pa-2'>
          <v-text-field label='Title' v-model='formData.name' :rules='rules.username' required/>
        </v-flex>
        <v-flex xs12 class='pa-2'>
          <blu-file-picker v-model='formData.image_file'/>
        </v-flex>
        <v-flex xs12 sm6 md4 class='pa-2'>
          <v-text-field label='Price From' v-model='formData.price_from' :rules='rules.price_from' required/>
        </v-flex>
        <v-flex xs12 sm6 md4 class='pa-2'>
          <v-select :items="baseDatas.priceTypes" label='Price Type' v-model='formData.price_type_id' :rules='rules.price_type_id' required/>
        </v-flex>
        <v-flex xs12 sm6 md4 class='pa-2'>
          <v-select :items="baseDatas.types" label='Service Type' v-model='formData.type_id' :rules='rules.type_id' required/>
        </v-flex>
        <v-flex xs12 sm6 md4 class='pa-2'>
          <v-select :items="baseDatas.categories" label='Service Category' v-model='formData.category_id' :rules='rules.category_id' required/>
        </v-flex>
        <v-flex xs12 sm6 md4 class='pa-2'>
          <v-select :items="baseDatas.cities" label='City' v-model='formData.city_id' :rules='rules.city_id' required/>
        </v-flex>
        <v-flex xs12 class='pa-2'>
          <v-textarea label="Description" v-model='formData.description' :rules='rules.description' required/>
        </v-flex>
        <v-flex xs12 class='pa-2'>
          <h4>Additional Image Files <v-btn class='secondary pa-0' style='min-width:32px'><v-icon size='14' @click='plus_additional_file'>fa fa-plus</v-icon></v-btn></h4>
          <blu-file-picker v-for='item in formData.additional_image_files' v-model='item.image_file'/>
        </v-flex>
        <v-flex xs12>
          <div class="left">
            <v-btn @click="back">Back</v-btn>
          </div>
          <div class="right">
            <v-btn color='primary' :disabled='!valid' @click="post">Post</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BluFilePicker from '@/components/BluFilePicker'
export default {
  name: "PostForm",
  components: {
    BluFilePicker
  },
  data: () => ({
    valid:false,
    formData: {
      name: '',
      price_from: '',
      price_type_id: '',
      type_id: '',
      category_id: '',
      city_id: '',
      description: '',
      image_file: '',
      additional_image_files: [],
    },
    rules:{
      name: [
        v => !!v || 'Username is required'
      ],
      image_file: [
        v => !!v || 'Image is required'
      ],
      price_from: [
        v => !!v || 'Price From is required'
      ],
      price_type_id: [
        v => !!v || 'Price Type is required'
      ],
      type_id: [
        v => !!v || 'Service Type is required'
      ],
      category_id: [
        v => !!v || 'Category is required'
      ],
      city_id: [
        v => !!v || 'City is required'
      ],
      description: [
        v => !!v || 'Description is required'
      ],
    },
    dialog: false,
  }),
  computed: {
    ...mapState('thing', ['baseDatas']),
  },
  mounted(){
    this.$store.dispatch('thing/getBaseDatas')
  },
  methods: {
    post (){
      if (!this.$refs.form.validate()) return
      this.$store.dispatch('thing/post', this.formData).then(() => {
        this.$router.push({name: 'Main'})
      }, error => {
        alert('failure')
      })
    },
    back (){
      this.$router.push({name: 'Main'})
    },
    plus_additional_file (){
      if (this.formData.additional_image_files.length >= 9)
        return
      this.formData.additional_image_files.push({ image_file:null })
    }
  }
}
</script>

<style scoped>

</style>