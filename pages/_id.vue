<template>
    <div id='detail-page'>
        <div id='navi'>
            <nuxt-link :to="'/'+$route.params.id">
                <Button type='primary'>Introduction</Button>
            </nuxt-link>
            <nuxt-link :to="'/'+$route.params.id+'/spec'">
                <Button type='primary'>Spec</Button>
            </nuxt-link>
            <nuxt-link :to="'/'+$route.params.id+'/history'">
                <Button type='primary'>History</Button>
            </nuxt-link>
        </div>
        <div id='title'>
            <h1>
                {{$store.state.car_list[$route.params.id].brand}} 
                {{$store.state.car_list[$route.params.id].model}}
            </h1>
        </div>
        <div id='gallery'>
            <img :src='$store.state.car_list[$route.params.id].image' />
        </div>
        <hr/>
        <nuxt-child/>
    </div>
</template>

<script>
export default{
    // validate({query,params,store}){
    //     if(/^\d+$/.test(params.id)&&params.id<store.state.car_list.length){
    //         return true
    //     }else{
    //         return false
    //     }
    // },
    middleware:'check-id',
    head(){
        return{
        title:"Detail Page",
        meta:[
            {hid:'description',name:'description',content:'Detail Page'}
        ]
        }
  }
}
</script>

<style scoped>
#detail-page{padding:10px;}
#title{margin-top:10px;}
#gallery{text-align:center}
Button{margin-right:10px;width:125px;font-size:16px}
</style>