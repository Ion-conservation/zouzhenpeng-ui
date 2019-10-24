// 对外提供对组件的引用，注意组件必须声明 name
import ZouInput from './src/zou-input'
// 为组件提供 install 安装方法，供按需引入
ZouInput.install = Vue => {
  Vue.component(ZouInput.name, ZouInput)
}
export default ZouInput