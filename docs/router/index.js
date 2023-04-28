/* eslint no-undef: "error"*/
/* eslint-env node*/
import Vue from 'vue';
import Router from 'vue-router';
import { autoRegistRoutes } from '../util/autoRegistRoutes';
Vue.use(Router);

let routes = [];
// 自动注册路由
let modules = autoRegistRoutes();
modules.forEach(item => {
  Object.keys(item.routes).forEach(header => {
    if (header !== 'routeInfo') {
      routes = routes.concat(item.routes[header]);
    }
  });
});
const addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () => r(require(`../pages/${route.name}.vue`)));
        return;
      }
      route.component = r => require.ensure([], () => r(require(`../docs/${route.name}.md`)));
    }
  });
};
addComponent(routes);

export default new Router({
  routes: routes
});
