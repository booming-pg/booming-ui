<template>
  <div id="app">
    <div class="menu">
      <Menu></Menu>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Common/Menu'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: space-between;
}
.menu{
  width: 20%;
  height: 100%;
  border-right: 1px solid #000;
}
.main{
  width: 80%;
  height: 100%;
}
</style>
