<template>
    <div id='detail-introduction'>
        <h2>Tech Spec:</h2>
        <p>Engine: {{$store.state.car_list[$route.params.id].engine}}</p>
        <p>Gearbox: {{$store.state.car_list[$route.params.id].gearbox}}</p>
        <p>Displacement: {{$store.state.car_list[$route.params.id].displacement}}L</p>
        <p>Acceleration: {{$store.state.car_list[$route.params.id].acceleration}}s</p>
        <p>Trubo: {{$store.state.car_list[$route.params.id].turbo}}</p>
    </div>
</template>

<script>
export default{
    transition:'fade',
     head(){
        return{
        title:this.$store.state.car_list[this.$route.params.id].brand+' '+this.$store.state.car_list[this.$route.params.id].model+' Spec',
        meta:[
            {hid:'description',name:'description',content:'Spec Page'}
        ]
        }
  }
}
</script>

<style scoped>
/* h2{font-size:22px;margin-top:10px}
p{font-size:18px;} */
</style>