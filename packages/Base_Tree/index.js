/**
 * @author jkk
 * Date: 21/08/30
 */
import BaseTree from './src/BaseTree.vue';

BaseTree.install = function (Vue) {
  Vue.component(BaseTree.name, BaseTree);
};

export default BaseTree;
