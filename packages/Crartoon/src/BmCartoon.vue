<template>
  <div class="bm-cartoon" :style="styleSize">
    <div class="background-img">
      <slot name="background"></slot>
    </div>
    <div class="dialog-content">
      <slot name="dialog"></slot>
      <slot name="question"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:"BmCartoon",
  props:{
    size:{
      type:String,
      default:"100%"
    }
  },
  data(){
    return{

    }
  },
  computed:{
    styleSize(){
      return {
        width: this.size
      }
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>
<style scoped>
.bm-cartoon{
  position: relative;
  display: inline-block;
}
.background-img{
  position: relative;
  z-index: 10;
}
.dialog-content{
  position: absolute;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background-img img{
  width: 100%;
}
</style>