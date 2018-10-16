export default function(context){
    if(/^\d+$/.test(context.params.id)&&context.params.id<context.store.state.car_list.length){
        // do nothing
    }else{
        context.error({
            message:'Incorrect ID: '+context.params.id
        })
    }
}