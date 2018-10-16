<template>
    <div id='error-root'>
        <div v-if="error.statusCode === 404">
            <img src='~/static/404.png' />
            <h1>Page Not Found</h1>
            <nuxt-link to='/'>
                <Button type='primary'>Return to Home Page</Button>
            </nuxt-link>
        </div>
        <div v-else>
            <h1>Error:</h1>
            <h2>{{error.message}}</h2>
            <nuxt-link to='/'>
                <Button type='primary'>Return to Home Page</Button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default{
    props:['error']
}
</script>

<style scoped>
#error-root{
    text-align:center;
}
h1{font-size:24px;line-height:48px;}
img{width:90%;}
</style>