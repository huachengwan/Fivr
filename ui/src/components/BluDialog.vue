<template>
  <v-layout row justify-center>
    <v-dialog v-model='initDialogVisible' :max-width='maxWidth' >
      <slot/>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'BluDialog',
  computed: {
    initDialogVisible: {
      get: function(){
        if (this.dialogVisible){

        }
        return this.dialogVisible
      },
      set: function(value){
        if (!value){
          this.$emit('close')
        }
      }
    }
  },
  props: {
    dialogVisible: {type: Boolean, default: false},
    maxWidth: {type: Number, default: 400}
  }
}
</script>

<style scoped>

</style>