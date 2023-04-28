## YxtBissApps

#### 此组件主要用于为 `门户网站` 提供模块化小组件

::: demo  $attrs接收除props之外的其他属性

```html
<template>
  <yxt-grid-layout
    :layout.sync="layout"
    :col-num="12"
    :row-height="24"
    :is-draggable="true"
    :is-resizable="true"
    :is-mirrored="false"
    :responsive="true"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
  >
  
    <yxt-grid-item
      v-for="item in layout"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
      style="background-color: #f4f4f5"
    >
      <component v-if="item.comp" :is="item.comp" :cards="cards" :action="handleAction"></component>
      <span v-else>{{item.i}}</span>
    </yxt-grid-item>
  </yxt-grid-layout>
</template>
<script>
export default {
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 8, h: 4, i: '0', comp: 'YxtBissApps' },
        { x: 8, y: 0, w: 4, h: 12, i: '1' },
        { x: 0, y: 4, w: 4, h: 8, i: '2' },
        { x: 4, y: 4, w: 4, h: 8, i: '3' },
        { x: 0, y: 12, w: 6, h: 12, i: '4' },
        { x: 6, y: 12, w: 6, h: 12, i: '5' }
      ],
      cards: [
        {
          desc: '',
          icon: 'http://202.100.247.175:32568/easted/02b22689a2eb6fad27ec5530e8dc7e5.png',
          id: 8,
          isEnable: 1,
          name: '公共节能',
          orgCode: '',
          sort: 8,
          systemCode: '',
          url: 'http://202.100.247.175:32569/xpEnergySaving/#/hnhome'
        },
        {
          desc: '',
          icon: 'http://202.100.247.175:32568/easted/ec0c4da46f5e663b262424922338eaac.png',
          id: 7,
          isEnable: 1,
          name: '周转房',
          orgCode: '',
          sort: 7,
          systemCode: '',
          url: 'http://202.100.247.175:32569/turnover/#/'
        },
        {
          desc: '',
          icon: 'http://202.100.247.175:32568/easted/06cef4675be2cc38d8bba3d1ea1b212d.png',
          id: 6,
          isEnable: 1,
          name: '土地/公务舱',
          orgCode: '',
          sort: 6,
          systemCode: '',
          url: 'http://202.100.247.175:32569/fixedassets/#/landManage/landStatistic/index?code=004'
        },
        {
          desc: '',
          icon: 'http://202.100.247.175:32568/easted/94395979ff299ab6651ef7b39058e233.png',
          id: 5,
          isEnable: 1,
          name: '经营性资产',
          orgCode: '',
          sort: 5,
          systemCode: '',
          url: 'http://202.100.247.175:32569/operateAssets/#/'
        },
        {
          desc: '',
          icon: 'http://202.100.247.175:32568/easted/bf0731a1dfdf90e477cd0fd857ca594a.png',
          id: 4,
          isEnable: 1,
          name: '公务用车',
          orgCode: '',
          sort: 4,
          systemCode: '',
          url: 'http://202.100.247.175:32569/gcyhpt/#/home'
        },
        {
          desc: '',
          icon: 'http://202.100.247.175:32568/easted/9c2193770b5a072f5d3f626c20cacbce.png',
          id: 3,
          isEnable: 1,
          name: '办公用房台账',
          orgCode: '',
          sort: 3,
          systemCode: '',
          url: 'http://202.100.247.175:32569/officespace/#/dataShowBoard'
        },
        {
          desc: '',
          icon: 'http://202.100.247.175:32568/easted/a07de8f721479b19322f26f6f010c2d2.png',
          id: 2,
          isEnable: 1,
          name: '通知公告',
          orgCode: '',
          sort: 1,
          systemCode: '',
          url: 'https://jgsw.hainan.gov.cn/'
        },
        {
          desc: '',
          icon: 'http://202.100.247.175:32568/easted/b1f4e5bb309540aed0f1b62861b8e5dc.png',
          id: 1,
          isEnable: 1,
          name: '局主页',
          orgCode: '',
          sort: 2,
          systemCode: '',
          url: 'https://jgsw.hainan.gov.cn/'
        }
      ],
    }
  },
  methods: {
    handleAction(key, card) {
      window.open(card.url)
    },
  }
}
</script>
```
:::