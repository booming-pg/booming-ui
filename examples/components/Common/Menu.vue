<template>
  <ul class="menu-list">
    <li @click="routerLink('/cartoon')">漫画组件</li>
  </ul>
</template>
<script>
export default {
  methods:{
    routerLink(url){
      this.$router.push(url)
    }
  }
}
</script>
<style scoped>
.menu-list li{
  list-style: none;
  cursor: pointer;
  line-height: 25px;
}
</style>