<template>
  <div class="show-cartoon">
    <p>漫画组件展示</p>
    <div class="add-height">xxxxx</div>
    <div>
      <bm-cartoon size="50%">
        <img src="./../../assets/test/test.jpg" slot="background"/>
        <cartoon-dialog-group slot="dialog">
          <bm-cartoon-dialog type="cloud" :index="0" :position="{top:'10%',left:'5%'}">对话一</bm-cartoon-dialog>
          <bm-cartoon-dialog type="rectangle" :index="1" :position="{top:'17%',left:'15%'}">对话二</bm-cartoon-dialog>
          <bm-cartoon-dialog type="circle" :index="2" :position="{top:'25%',left:'50%'}">对话三</bm-cartoon-dialog>
        </cartoon-dialog-group>
      </bm-cartoon>
    </div>
    <div class="add-height">xxxxx</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
.show-cartoon{
  width: 100%;
  height: 100%;
}
.add-height{
  width: 100%;
  height: 500px;
}
</style>