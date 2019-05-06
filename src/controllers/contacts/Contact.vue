<template>
  <div>
   <h1>{{ title }}</h1>
   <datacontact></datacontact>
   </div>
</template>

<script>
import DataContact from './DataContact';
export default {
    components: {
        'datacontact': DataContact
    },
    data: function() {
    return {
      title: 'Page Contact'
    }
  }
}
</script>

<style>

</style>
