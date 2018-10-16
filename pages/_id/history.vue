<template>
    <div id='detail-introduction'>
        <h2>History:</h2>
        <p>
            {{$store.state.car_list[$route.params.id].history}}
        </p>
    </div>
</template>

<script>
export default{
    transition:{
        //mode:'in-out',
        duration:1000,
        enterActiveClass:'animated slideInUp',
        leaveActiveClass:'animated slideOutDown'
    },
     head(){
        return{
        title:this.$store.state.car_list[this.$route.params.id].brand+' '+this.$store.state.car_list[this.$route.params.id].model+' History',
        meta:[
            {hid:'description',name:'description',content:'History Page'}
        ]
        }
  }
}
</script>

<style scoped>
/* h2{font-size:22px;margin-top:10px}
p{font-size:18px;} */
</style>