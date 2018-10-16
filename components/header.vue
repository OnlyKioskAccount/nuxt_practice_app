<template>
    <div id='header'>
      <nuxt-link to='/'>
        <Button id='header-button' type='primary'>Home</Button>
      </nuxt-link>
      <p id='header-title'>Nuxt Practice App</p>
      <Avatar id='header-avatar' icon='ios-person' size='large'/>
    </div>
</template>

<style scoped>
#header{
  height:80px;background:#E74C3C;text-align:center;position:fixed;top:0px;
  width:100%;z-index:9999
}
#header-button{position:absolute;left:10px;top:20px;height:40px;width:80px;}
#header-title{font-family:impact;color:white;line-height:80px;font-size:26px}
#header-avatar{position:absolute;right:10px;top:20px;}
</style>