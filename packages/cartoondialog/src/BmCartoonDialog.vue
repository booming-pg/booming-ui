<template>
  <div class="dialog" :class="[getType,visibility]" :style="getPosition">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"BmCartoonDialog",
  props:{
    type:{
      type:String,
      default:"circle"
    },
    position:{
      type:Object,
      default: () => {
        return {top:0,left:0}
      }
    },
    index:{
      type:Number,
      require:true
    }
  },
  inject:['childrens'],
  data(){
    return{
      
    }
  },
  methods:{
    isInArray(e){
      let ch = this.childrens.slotChildren
      if(ch){
        if(ch.indexOf(e) == -1){
          return false
        }else{
          return true
        }
      }
      
    }
  },
  computed:{
    getType(){
      return this.type
    },
    getPosition(){
      return this.position
    },
    getIndex(){
      return this.index
    },
    visibility(){
      return this.isInArray(this.getIndex) ? 'visible' : 'disvisible'
    }
  },
  mounted(){
    
  }
}
</script>
<style scoped>
.dialog{
  display: inline-block;
  position: relative;
  /* visibility: hidden; */
}
.visible{
  visibility: visible;
  animation: zoomIn 200ms ease-in;
  -webkit-animation: zoomIn 200ms ease-in;
}
.disvisible{
  visibility: hidden;
}

/* 对话框背景 */
.cloud{
  background:red;
  color: #FFF;
}
.rectangle{
  background: green;
}
.circle{
  background: greenyellow;
}

/* 对话框显示动画 */
@-webkit-keyframes zoomIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes zoomIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>