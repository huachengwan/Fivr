<template>
  <div>
    <v-img :src="fileUrl" width='100' height='100' v-if="fileUrl"/>
    <v-text-field label="Select Image" @click='pickFile' v-model='fileName' prepend-icon='fa-link'></v-text-field>
    <input type="file" style="display: none" ref="file" accept="image/*" @change="onFilePicked"/>
  </div>
</template>

<script>
export default {
  name: "BluFilePicker",
  props: ['value'],
  data: () => ({
    fileName: '',
    fileUrl: '',
  }),
  methods: {
    pickFile () {
      this.$refs.file.click ()
    },
    onFilePicked (e) {
      const files = e.target.files
      if(files[0] !== undefined) {
        this.fileName = files[0].name
        if(this.fileName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader ()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.fileUrl = fr.result
          this.$emit('input', files[0])
        })
      } else {
        this.fileName = ''
        this.fileUrl = ''
        this.$emit('input', null)
      }
    },
  }
}
</script>

<style scoped>

</style>