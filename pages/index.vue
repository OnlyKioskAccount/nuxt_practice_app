<template>
  <div id='index_root'>
    <mainComp/>
  </div>
</template>

<script>

import mainComp from '~/components/main'

export default {
  components:{
    mainComp
  },
  head(){
    return{
      title:"Home Page",
      meta:[
        {hid:'description',name:'description',content:'Home Page'}
      ]
    }
  }
}
</script>

<style scoped>

</style>

