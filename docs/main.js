import Vue from 'vue';
import App from './App';
import router from './router';
import DemoBlock from '@/components/_global_$/DemoBlock.vue';
import BaseCol from '@/components/yxt_base_$/Base_Col/index';
import BaseRow from '@/components/yxt_base_$/Base_Row/index';
import BaseSkeleton from '@/components/yxt_base_$/Base_Skeleton/index';

import yxtIcons from '@/assets/json/yxt_icon.json';
import * as funcs from './util/util';

Vue.component('demo-block', DemoBlock);
Vue.component('BaseCol', BaseCol);
Vue.component('BaseRow', BaseRow);
Vue.component('BaseSkeleton', BaseSkeleton);

import YXTUI from '../lib/umd/yxt-ui.common.js';
import '../lib/umd/yxt-ui.css';
// import YXTUI from 'yxt-ui';
// import 'yxt-ui/lib/umd/yxt-ui.css';
Vue.use(YXTUI);

Vue.prototype.func = funcs;
Vue.prototype.$yxtIcons = yxtIcons.icons;

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
