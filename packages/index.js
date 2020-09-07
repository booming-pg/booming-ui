import BmCartoon from './crartoon/index'
import BmCartoonDialog from './cartoondialog/index'
import CartoonDialogGroup from './dialogroup/index'
const components = [
  BmCartoon,
  BmCartoonDialog,
  CartoonDialogGroup
]
const install = function (Vue) { 
  if(install.installed) return
  components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  BmCartoon,
  BmCartoonDialog,
  CartoonDialogGroup
}