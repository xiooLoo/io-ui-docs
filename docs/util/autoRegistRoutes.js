export const autoRegistRoutes = () => {
  const modules = [];
  const files = require.context('../router/module', false, /(config).json$/);
  files.keys().forEach(filePath => {
    let context = files(filePath);
    let objItem = {};
    objItem.path = context.routeInfo.path;
    objItem.name = context.routeInfo.name;
    objItem.routes = context.context;
    modules.push(objItem);
  });
  console.log('modules', modules);
  return modules;
};
