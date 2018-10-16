<template>
    <div id='detail-introduction'>
        <h2>Introduction:</h2>
        <p>
            {{$store.state.car_list[$route.params.id].introduction}}
        </p>
    </div>
</template>

<script>
export default{
    head(){
        return{
        title:this.$store.state.car_list[this.$route.params.id].brand+' '+this.$store.state.car_list[this.$route.params.id].model,
        meta:[
            {hid:'description',name:'description',content:'Introduction Page'}
        ]
        }
  }
}
</script>

<style scoped>
/* h2{font-size:22px;margin-top:10px}
p{font-size:18px;} */
</style>