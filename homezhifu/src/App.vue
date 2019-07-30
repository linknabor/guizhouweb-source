<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    font-size: .26rem;
}
  body {
    -webkit-tap-highlight-color: transparent;
    background-color:white;
    margin: 0;
    height: auto;
  }
</style>
