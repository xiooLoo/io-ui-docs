# yxtTabs 标签
----

<script>
export default {
  data() {
    return {
      conciseTabs: [
        { id: '0', label: '全部', value: 'all', badgeValue: 0, icon: 'to-icon-date', code: true },
        { id: '1', label: '本单位', value: 'currentUnit', badgeValue: 0, icon: 'to-icon-date', code: 'bbb', disabled: true },
        { id: '2', label: '跨单位', value: 'crossUnit', badgeValue: 0, code: true }
      ],
      chooseTabs: [
        { id: '0', label: '全部', value: 'all', badgeValue: 0, icon: 'to-icon-date', code: true },
        { id: '1', label: '本单位', value: 'currentUnit', badgeValue: 5, icon: 'to-icon-date', code: 'bbb' },
        { id: '2', label: '跨单位', value: 'crossUnit', badgeValue: 0, icon: 'to-icon-date', code: true }
      ],
      customTabs: [
        { id: '0', label: '全部', value: 'all', badgeValue: 0, icon: 'to-icon-date', code: true },
        { id: '1', label: '本单位', value: 'currentUnit', badgeValue: 0, icon: 'to-icon-date', code: 'bbb' },
        { id: '2', label: '跨单位', value: 'crossUnit', badgeValue: 0, icon: 'to-icon-date', code: true }
      ],
      tabPosition: 'left',
      customTabsValue: 'currentUnit',
      tabIndex: 2
    }
  },
  methods: {
    handleTabs(params) {
      console.log('已选中Tab:', params.obj)
    },
    addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.customTabs.push({
            id: newTabName,
            label: 'New Tab',
            value: newTabName,
            code: true
        });
        this.customTabsValue = newTabName;
    },
    removeTab(targetName) {
        let tabs = this.customTabs;
        let activeName = this.customTabsValue;
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.value === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                        activeName = nextTab.value;
                    }
                }
            });
        }

        this.customTabsValue = activeName;
        this.customTabs = tabs.filter(tab => tab.value !== targetName);
    }
  }
};
</script>

### 简洁标签页

::: demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。
```html
<template>
    <yxt-tabs :arr="conciseTabs" :actions="handleTabs" />
</template>
<script>
export default {
  data() {
    return {
      conciseTabs: [
        { id: '0', label: '全部', value: 'all', badgeValue: 0, icon: 'to-icon-date', code: true },
        { id: '1', label: '本单位', value: 'currentUnit', badgeValue: 0, icon: 'to-icon-date', code: 'bbb', disabled: true },
        { id: '2', label: '跨单位', value: 'crossUnit', badgeValue: 0, code: true }
      ],
    }
  },
  methods: {
    handleTabs(params) {
      console.log('已选中Tab:', params.obj)
    }
  }
};
</script>
```
:::

### 选项卡样式（带插槽）

::: demo 
```html
<template>
    <yxt-tabs :arr="chooseTabs" :actions="handleTabs" type="card" >
        <p slot="content" slot-scope="{item}" style="padding:15px;">{{ item.label }}</p>
    </yxt-tabs>
</template>
<script>
export default {
  data() {
    return {
      chooseTabs: [
        { id: '0', label: '全部', value: 'all', badgeValue: 0, icon: 'to-icon-date', code: true },
        { id: '1', label: '本单位', value: 'currentUnit', badgeValue: 5, icon: 'to-icon-date', code: 'bbb' },
        { id: '2', label: '跨单位', value: 'crossUnit', badgeValue: 0, icon: 'to-icon-date', code: true }
      ]
    }
  },
  methods: {
    handleTabs(params) {
      console.log('已选中Tab:', params.obj)
    }
  }
};
</script>
```
:::

### 卡片化（带插槽）

::: demo 
```html
<template>
    <yxt-tabs :arr="chooseTabs" :actions="handleTabs" type="border-card" >
        <p slot="content" slot-scope="{item}">{{ item.label }}</p>
    </yxt-tabs>
</template>
<script>
export default {
  data() {
    return {
      chooseTabs: [
        { id: '0', label: '全部', value: 'all', badgeValue: 0, icon: 'to-icon-date', code: true },
        { id: '1', label: '本单位', value: 'currentUnit', badgeValue: 5, icon: 'to-icon-date', code: 'bbb' },
        { id: '2', label: '跨单位', value: 'crossUnit', badgeValue: 0, icon: 'to-icon-date', code: true }
      ]
    }
  },
  methods: {
    handleTabs(params) {
      console.log('已选中Tab:', params.obj)
    }
  }
};
</script>
```
:::

### 位置（带插槽）

可以通过 tab-position 设置标签的位置
::: demo 标签一共有四个方向的设置 tabPosition="left|right|top|bottom"
```html
<template>
    <to-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <to-radio-button label="top">top</to-radio-button>
        <to-radio-button label="right">right</to-radio-button>
        <to-radio-button label="bottom">bottom</to-radio-button>
        <to-radio-button label="left">left</to-radio-button>
    </to-radio-group>
    <yxt-tabs :arr="chooseTabs" :actions="handleTabs" :tab-position="tabPosition" type="border-card" >
        <p slot="content" slot-scope="{item}">{{ item.label }}</p>
    </yxt-tabs>
</template>
<script>
export default {
  data() {
    return {
      chooseTabs: [
        { id: '0', label: '全部', value: 'all', badgeValue: 0, icon: 'to-icon-date', code: true },
        { id: '1', label: '本单位', value: 'currentUnit', badgeValue: 5, icon: 'to-icon-date', code: 'bbb' },
        { id: '2', label: '跨单位', value: 'crossUnit', badgeValue: 0, icon: 'to-icon-date', code: true }
      ],
      tabPosition: 'left'
    }
  },
  methods: {
    handleTabs(params) {
      console.log('已选中Tab:', params.obj)
    }
  }
};
</script>
```
:::

### 自定义增加标签页触发器 & 动态增减标签页

::: demo 增减标签页按钮只能在`选项卡` | `卡片化` 样式的标签页下使用
```html
<template>
    <to-button type="primary" size="small" @click="addTab(customTabsValue)">新增Tab</to-button>
    <yxt-tabs :current="customTabsValue" :arr="customTabs" tab-position="top" type="border-card" closable @tab-remove="removeTab" >
        <p slot="content" slot-scope="{item}">{{ item.label }}</p>
    </yxt-tabs>
</template>
<script>
export default {
  data() {
    return {
      customTabs: [
        { id: '0', label: '全部', value: 'all', badgeValue: 0, icon: 'to-icon-date', code: true },
        { id: '1', label: '本单位', value: 'currentUnit', badgeValue: 0, icon: 'to-icon-date', code: 'bbb' },
        { id: '2', label: '跨单位', value: 'crossUnit', badgeValue: 0, icon: 'to-icon-date', code: true }
      ],
      customTabsValue: 'currentUnit',
      tabIndex: 2
    }
  },
  methods: {
    addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.customTabs.push({
            id: newTabName,
            label: 'New Tab',
            value: newTabName,
            code: true
        });
        this.customTabsValue = newTabName;
    },
    removeTab(targetName) {
        let tabs = this.customTabs;
        let activeName = this.customTabsValue;
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.value === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                        activeName = nextTab.value;
                    }
                }
            });
        }

        this.customTabsValue = activeName;
        this.customTabs = tabs.filter(tab => tab.value !== targetName);
    }
  }
};
</script>
```
:::

### 必传参数说明（Must Attributes）

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| arr | tabs数据源数组 | Array | -- | -- |
| badgeValue | [角标]显示值<br>`注：当badgeValue <= 0 时，不显示角标` | string, number | -- | -- |
| max | [角标]数值(最大值) | Number | -- | 0 |
| badgeType | [角标]类型 | Array | -- | -- |
| badgeIsDot | [角标]是否小圆点 | Array | -- | false |

### 必传Events

| 事件名称      | 说明          | 回调参数      
|---------- |-------------- |---------- |
| actions | tab 被选中时触发 | 被选中的标签 tab 实例 | 

### 扩展参数说明（Oth Attributes）

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值，选中选项卡的 name | string | -- | 第一个选项卡的 name |
| type | 风格类型 | string | card/border-card | -- |
| closable | 标签是否可关闭 | boolean | -- | false |
| addable | 标签是否可增加 | boolean | -- | false |
| editable | 标签是否同时可增加和关闭 | boolean | -- | false |
| tab-position | 选项卡所在位置 | string | top/right/bottom/left | top |
| stretch | 标签的宽度是否自撑开 | boolean | -- | false |
| before-leave | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(activeName, oldActiveName) | -- | -- |

### Events

| 事件名称      | 说明          | 回调参数      
|---------- |-------------- |---------- |
| tab-click | tab 被选中时触发 | 被选中的标签 tab 实例 | 
| tab-remove | 点击 tab 移除按钮后触发 | 被删除的标签的 name | 
| tab-add | 点击 tabs 的新增按钮后触发 | -- | 
| edit | 点击 tabs 的新增按钮或 tab 被关闭后触发 | (targetName, action) | 