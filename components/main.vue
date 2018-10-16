<template>
<div id='main-root-div'>
    <div id='main-item' v-for='car in $store.state.car_list' :key='car.id'>
        <nuxt-link :to="'/'+car.id">
            <Card>
                <img :src='car.image'/>
                <b>{{car.brand}} {{car.model}}</b>
            </Card>
        </nuxt-link>
    </div>
</div>
</template>

<script>
export default{
//props:['car']
}
</script>

<style scoped>
#main-item{margin:10px;text-align:center}
#main-item img{width:95%}
</style>