/**
 * 基础组件：Base_$
 */
import BaseCol from '@/components/yxt_base_$/Base_Col/index';
import BaseRow from '@/components/yxt_base_$/Base_Row/index';
import BaseSkeleton from '@/components/yxt_base_$/Base_Skeleton/index';

const components = [
  BaseCol,
  BaseRow,
  BaseSkeleton
];

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,
  BaseCol,
  BaseRow,
  BaseSkeleton
};
