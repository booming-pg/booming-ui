<template>
  <div class="getAnimate" ref="dialogs">
    <slot :arr="slotChildren"></slot>
  </div>
</template>
<script>
export default {
  name:"CartoonDialogGroup",
  props:{
    animate:{
      type:String,
      default:"appear"
    },
  },
  data(){
    return{
      slotChildren:[],
      inAnimation:true,
      clearTer: 0,
      currentDialogInterval: null
    }
  },
  provide(){
    return{
      // childrens:this.slotChildren,
      childrens:this,
    }
  },
  methods:{
    _isMobile() {
      //终端判断 true 手机端 false pc端
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    intervalFun(vnodes){
      this.inAnimation = false
      let i = 0, _that = this;
      // let currentDialogInterval = setInterval(function(){
      this.currentDialogInterval = setInterval(function(){
        _that.slotChildren.push(i)
        i ++;
        if(i >= vnodes){
          console.log('clear-normal')
          clearInterval(_that.currentDialogInterval)
        }
        console.log("arr-=show",_that.slotChildren)
      },800)
    },
    clears(){
      console.log('clear-un-normal')
      let vnodes = (this.$slots.default).length;
      clearInterval(this.currentDialogInterval)
      for(let j = this.slotChildren.length; j < vnodes; j ++){
        this.slotChildren.push(j)
        console.log("ser-un",this.slotChildren)
      }
    },
    startDialog(){
      let vnodes = (this.$slots.default).length;
      if(this.inAnimation){
        this.intervalFun(vnodes)
      }
    },
    handleScrollx() {
      // console.log('滚动高度',window.pageYOffset)
      // console.log('距离顶部高度',this.$refs.dialogs.getBoundingClientRect().top)
      let hei = this.$refs.dialogs.getBoundingClientRect().top
      if(hei < 100){
        if(this.clearTer == 0){
          this.clears()
          this.clearTer++
        }
      }else if(hei < 300){
        this.startDialog()
      }
    }
  },
  computed:{
    getAnimate(){
      return this.animate
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScrollx,true)
  },
  beforeMount(){
    if(this._isMobile()){
      console.log('yidongduan')
    }else {
      console.log('pc duan')
    }
  }
}
</script>
<style scoped>
.getAnimate{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>