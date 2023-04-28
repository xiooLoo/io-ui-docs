/**
 * @author xiooLoo
 * Date: 21/07/03
 */

import BaseButton from './Base_Button/index';
import BaseRow from './Base_Row/index';
import BaseCol from './Base_Col/index';
import BaseShowTip from './Base_ShowTip/index';
import BaseLoadingBar from './Base_LoadingBar/index';
import BaseSkeleton from './Base_Skeleton/index';
import BaseTable from './Base_Table/index';
import BasePagination from './Base_Pagination/index';
import BaseTabs from './Base_Tabs/index';
import BaseDialog from './Base_Dialog/index';
import BaseDrawer from './Base_Drawer/index';
import BaseDateTimePicker from './Base_DateTimePicker';
import BaseTree from './Base_Tree';

const components = [
  BaseButton,
  BaseRow,
  BaseCol,
  BaseShowTip,
  BaseSkeleton,
  BaseTable,
  BaseDialog,
  BasePagination,
  BaseTabs,
  BaseDrawer,
  BaseDateTimePicker,
  BaseTree
];

const install = function (Vue) {
  if (install.installed) {
    return;
  }
  components.map(component => Vue.component(component.name, component));
  Vue.prototype.$baseLoading = BaseLoadingBar;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BaseButton,
  BaseRow,
  BaseCol,
  BaseShowTip,
  BaseLoadingBar,
  BaseSkeleton,
  BaseTable,
  BaseDialog,
  BasePagination,
  BaseTabs,
  BaseDateTimePicker
};
