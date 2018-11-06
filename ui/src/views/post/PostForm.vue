<template>
  <v-container>
    <v-form ref='form' v-model='valid'>
      <v-layout wrap>
        <v-flex xs12 class='pa-2'>
          <v-text-field label='Title' v-model='formData.name' :rules='rules.username' required/>
        </v-flex>
        <v-flex xs12 class='pa-2'>
          <img :src="imageUrl" height="150" v-if="imageUrl"/>
          <v-text-field label="Select Image" @click='pickFile' v-model='formData.image_name' :rules='rules.image_name' required prepend-icon='fa-link'></v-text-field>
          <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked"/>
        </v-flex>
        <v-flex xs12 sm6 class='pa-2'>
          <v-text-field label='Price From' v-model='formData.price_from' :rules='rules.price_from' required/>
        </v-flex>
        <v-flex xs12 sm6 class='pa-2'>
          <v-select :items="priceTypes" label='Price Type' v-model='formData.price_type_id' :rules='rules.price_type_id' required/>
        </v-flex>
        <v-flex xs12 sm6 class='pa-2'>
          <v-select :items="types" label='Service Type' v-model='formData.type_id' :rules='rules.type_id' required/>
        </v-flex>
        <v-flex xs12 sm6 class='pa-2'>
          <v-select :items="categories" label='Service Category' v-model='formData.category_id' :rules='rules.category_id' required/>
        </v-flex>
        <v-flex xs12 class='pa-2'>
          <v-textarea label="Description" v-model='formData.description' :rules='rules.description' required/>
        </v-flex>
        <v-flex xs12>
          <v-btn color='primary' :disabled='!valid' @click="post">Post</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: "PostForm",
  data: () => ({
    valid:false,
    formData: {
      name: '',
      image_name: '',
      price_from: '',
      price_type_id: '',
      type_id: '',
      category_id: '',
      description: '',
      image_file: '',
    },
    rules:{
      name: [
        v => !!v || 'Username is required'
      ],
      image_name: [
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
      description: [
        v => !!v || 'Description is required'
      ],
    },
    dialog: false,
    imageName: '',
    imageUrl: '',
    imageFile: ''
  }),
  computed: {
    categories: function(){
      let list = []
      for (let item of this.$store.state.thing.allCategories){
        list.push({text:item['name'],value:item['id']})
      }
      return list
    },
    priceTypes: function(){
      let list = []
      for (let item of this.$store.state.thing.priceTypes){
        list.push({text:item['name'],value:item['id']})
      }
      return list
    },
    types: function(){
      let list = []
      for (let item of this.$store.state.thing.types){
        list.push({text:item['name'], value:item['id']})
      }
      return list
    }
  },
  mounted(){
    this.$store.dispatch('thing/listAllCategories')
    this.$store.dispatch('thing/listPriceTypes')
    this.$store.dispatch('thing/listTypes')
  },
  methods: {
    pickFile () {
      this.$refs.image.click ()
    },
    onFilePicked (e) {
      const files = e.target.files
      if(files[0] !== undefined) {
        this.formData.image_name = files[0].name
        if(this.formData.image_name.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader ()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.formData.image_file = files[0]
        })
      } else {
        this.formData.image_name = ''
        this.formData.image_file = ''
        this.imageUrl = ''
      }
    },
    post (){
      if (!this.$refs.form.validate()) return
      this.$store.dispatch('thing/post', {token: this.$store.getters['auth/getToken'], formData: this.formData}).then(() => {
        this.$router.push({name:'Main'})
      }, error => {
        alert('failure')
      })
    }
  }
}
</script>

<style scoped>

</style>