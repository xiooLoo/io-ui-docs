# Tree 组件

----

### 基础用法

<script>
export default {
  data() {

    return {
       treeData: [
        {
          id:'1-0',
          label: '一级 1',
          children: [{
            id:'1-1',
            label: '二级 1-1',
            children: [{
              id:'1-1-1',
              label: '三级 1-1-1'
            },{
              id:'1-1-2',
              label: '三级 1-1-2'
            },{
              id:'1-1-3',
              label: '三级 1-1-3'
            }]
          }]
        }, {
          id:'2-0',
          label: '一级 2',
          children: [{
            id:"2-1",
            label: '二级 2-1',
            children: [{
              id:"2-1-1",
              label: '三级 2-1-1'
            }]
          }, {
            id:'2-2',
            label: '二级 2-2',
            children: [{
              id:'2-2-1',
              label: '三级 2-2-1'
            }]
          }]
        }, {
          id:'3-0',
          label: '一级 3',
          children: [{
            id:'3-1',
            label: '二级 3-1',
            children: [{
              id:'3-1-1',
              label: '三级 3-1-1'
            }]
          }, {
            id:'3-2',
            label: '二级 3-2',
            children: [{
              id:'3-2-1',
              label: '三级 3-2-1'
            }]
          }]
        }],
        itemData:[
         {id:1,label:"项目1"},
         {id:2,label:"项目2"},
         {id:3,label:"项目3"},
       ],
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
       },
    }

  }, 
  methods: {

    clickTreeData(node) {
      console.log(node);
    },
    changeTreeData(node) {
      console.log(node);
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region' }]);
      }
      if (node.level > 1) return resolve([]);
      setTimeout(() => {
        const data = [{
          name: 'leaf',
          leaf: true
        }, {
          name: 'zone'
        }];
        resolve(data);
      }, 500);
    },

  }
}
</script>

<div>
  <div>1. 基础的树形结构展示。</div>
  <yxt-tree title="我是标题" 
  :treeData="treeData"
  @clickTreeData="clickTreeData"/>
</div>

::: demo

```html
<template>
    <yxt-tree title="我是标题" :treeData="treeData" @clickTreeData="clickTreeData" />
</template>
<script>
    export default {
        data() {
            return {
                treeData: [{
                    id: '1-0',
                    label: '一级 1',
                    children: [{
                        id: '1-1',
                        label: '二级 1-1',
                        children: [{
                            id: '1-1-1',
                            label: '三级 1-1-1'
                        }, {
                            id: '1-1-2',
                            label: '三级 1-1-2'
                        }, {
                            id: '1-1-3',
                            label: '三级 1-1-3'
                        }]
                    }]
                }, {
                    id: '2-0',
                    label: '一级 2',
                    children: [{
                        id: "2-1",
                        label: '二级 2-1',
                        children: [{
                            id: "2-1-1",
                            label: '三级 2-1-1'
                        }]
                    }, {
                        id: '2-2',
                        label: '二级 2-2',
                        children: [{
                            id: '2-2-1',
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    id: '3-0',
                    label: '一级 3',
                    children: [{
                        id: '3-1',
                        label: '二级 3-1',
                        children: [{
                            id: '3-1-1',
                            label: '三级 3-1-1'
                        }]
                    }, {
                        id: '3-2',
                        label: '二级 3-2',
                        children: [{
                            id: '3-2-1',
                            label: '三级 3-2-1'
                        }]
                    }]
                }],

            }
        },
        methods: {
            clickTreeData(node) {
                console.log(node);
            },
        }
    }
</script>
```

:::

<div>
  <div>2. 多选的树形结构展示。</div>
  <yxt-tree 

    title="层级列表"
    :treeData="treeData"
    :checkbox="true"
    @changeTreeData="changeTreeData"

  />
</div>

::: demo

```html
<template>
    <yxt-tree title="层级列表" :treeData="treeData" :checkbox="true" @changeTreeData="changeTreeData" />
</template>
<script>
    export default {
        data() {
            return {
                treeData: [{
                    id: '1-0',
                    label: '一级 1',
                    children: [{
                        id: '1-1',
                        label: '二级 1-1',
                        children: [{
                            id: '1-1-1',
                            label: '三级 1-1-1'
                        }, {
                            id: '1-1-2',
                            label: '三级 1-1-2'
                        }, {
                            id: '1-1-3',
                            label: '三级 1-1-3'
                        }]
                    }]
                }, {
                    id: '2-0',
                    label: '一级 2',
                    children: [{
                        id: "2-1",
                        label: '二级 2-1',
                        children: [{
                            id: "2-1-1",
                            label: '三级 2-1-1'
                        }]
                    }, {
                        id: '2-2',
                        label: '二级 2-2',
                        children: [{
                            id: '2-2-1',
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    id: '3-0',
                    label: '一级 3',
                    children: [{
                        id: '3-1',
                        label: '二级 3-1',
                        children: [{
                            id: '3-1-1',
                            label: '三级 3-1-1'
                        }]
                    }, {
                        id: '3-2',
                        label: '二级 3-2',
                        children: [{
                            id: '3-2-1',
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
            }
        },
        methods: {
            changeTreeData(node) {
                console.log(node);
            },
        }
    }
</script>
```

:::

<div>
  <div>3. 懒加载的树形结构展示。</div>
  <yxt-tree

    title="加载列表"
    :defaultProps="props"
    :checkbox="true"
    :loadNode="loadNode"

  />
</div>

::: demo

```html
<template>
    <yxt-tree title="加载列表" :defaultProps="props" :checkbox="true" :loadNode="loadNode" />
</template>
<script>
    export default {
        data() {
            return {
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
            }
        },
        methods: {
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{
                        name: 'region'
                    }]);
                }
                if (node.level > 1) return resolve([]);
                setTimeout(() => {
                    const data = [{
                        name: 'leaf',
                        leaf: true
                    }, {
                        name: 'zone'
                    }];
                    resolve(data);
                }, 500);
            },
        }
    }
</script>
```

:::

<div>
  <div>4. 标签项结构展示。</div>
  <yxt-tree

    title="项目列表"
    :istree="false"
    :treeData="itemData"
    @clickTreeData="clickTreeData"

  />
</div>

::: demo

```html
<template>
    <yxt-tree title="项目列表" :istree="false" :treeData="itemData" @clickTreeData="clickTreeData" />
</template>
<script>
    export default {
        data() {
            return {
                itemData: [{
                        id: 1,
                        label: "项目1"
                    },
                    {
                        id: 2,
                        label: "项目2"
                    },
                    {
                        id: 3,
                        label: "项目3"
                    },
                ],
            }
        },
        methods: {
            clickTreeData(node) {
                console.log(node);
            }
        }
    }
</script>
```

:::

### 参数介绍

| 参数      | 说明          | 类型      | 可选值     | 默认值  |
| --------- | ------------- | -------- | --------- | ------ | 
| title | 组件标题，不传则不显示标题部分 | String | -- | -- |
| treeData | 展示数据 | Array | 无 | [] |
| defaultProps | 标识组件数据规范 | Object | 无 | {children: 'children', label: 'label', isLeaf: 'leaf'}|
| indent | 相邻级节点间的水平缩进，单位为像素 | Number | -- | 16 |
| iconClass | 自定义树节点的图标 | String | -- | 空 |
| checkbox | 标识tree组件是否显示复选框 | Boolean | true/false | false |
| defaultExpandAll | 是否默认展开所有子节点 | Boolean | true/false | false |
| defaultExpandedKeys | 禁止选择的节点，必须是数据id的数组 | Array | 无 | [] |
| defaultCheckedKeys | 默认选中的数据，必须是数据id的数组 | Array | 无 | [] |
| currentNodeKey | 当前选中的数据节点，必须是数据id | String | 无 | 空 |
| checkStrictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false | Boolean | true/false | false |
| showSearch | 标识tree组件是否显示搜索框 | Boolean | true/false | true |
| iconSearchColor | 搜索框按钮背景颜色 | String | black/'#00000'/'rgb(255, 255, 36)' | '#2e78ff' |
| iconSearch | 搜索框按钮图标 | String | 无 | 存在默认图标 |
| textColor | 组件中文字的颜色 | String | black/'#00000'/'rgb(255, 255, 36)' | '#586073' |
| actionColor | 选中高亮时文字的颜色 | String | black/'#00000'/'rgb(255, 255, 36)' | '#2E78FF' |
| istree | 判断组件树结构还是列表项 | Boolean | true/false | true |
| icon | 列表项未选中状态时的图标 | String, Image | -- | 存在默认图标 |
| iconAction | 列表项选中状态时的图标 | String, Image | -- | 存在默认图标 |
| loadNode | 懒加载逻辑函数 | Function | -- | -- |

### Events

| 事件名称      | 说明          | 回调参数      |
| --------- | ------------- | -------- | 
| clickTreeData | 节点被点击时的回调 | 接收一个参数表示节点本身。 | 
| changeTreeData | 存在复选框时的回调，表示所选中的节点 | 接收一个参数表示被选中的所有节点的集合。 | 
