<template>
  <div class="wrapper">
    <div class="title" v-if="title">{{ title }}</div>
    <div class="box">
      <div class="search" v-if="!(treeData)?false:showSearch">
        <el-input
          v-model="searchValue"
          :placeholder="placeholder"
          class="input"
        />
        <div class="icon" :style="`background:${iconSearchColor};`">
          <img :src="iconSearch" alt="" />
        </div>
      </div>
      <div class="tree-list" ref="treeList">
        <el-tree
          v-if="istree"
          node-key="id"
          :data="treeData"
          :show-checkbox="checkbox"
          :filter-node-method="filterNode"
          :props="defaultProps"
          :default-expand-all="defaultExpandAll"
          :lazy="!!loadNode"
          :load="loadNode"
          :check-strictly="checkStrictly"
          :default-expanded-keys="defaultExpandedKeys"
          :default-checked-keys="defaultCheckedKeys"
          :current-node-key="currentNodeKey"
          :indent="indent"
          :icon-class="iconClass"
          :check-on-click-node="true"
          :highlight-current="true"
          ref="tree"
          @check="changeTreeData"
          @node-click="clickTreeData"
        >
        </el-tree>
        <ul v-else ref="cardTree" class="cardTree" @click="liClick($event)"></ul>
        <li ref="templateLi" class="templateLi" id="templateLi">
              <div class="iconBox">
                 <img :src="icon" alt="">
                 <img :src="iconAction" alt="">
              </div>
              <div class="title">
                 <p></p>
              </div>
           </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseTree',
  props: {
    title: {
      type: String,
      default: ''
    }, // 标题
    checkbox: {
      type: Boolean,
      default: false
    }, // 单选还是多选
    defaultExpandAll: {
      type: Boolean,
      default: false
    }, // 是否展开所有子节点
    checkStrictly: {
      type: Boolean,
      default: false
    }, // 是否严格的遵循父子不互相关联的做法
    defaultExpandedKeys: {
      type: Array,
      default() {
        return [];
      }
    }, // 禁止选择的节点
    defaultCheckedKeys: {
      type: Array,
      default() {
        return [];
      }
    }, // 默认选中的节点
    currentNodeKey: {
      type: String,
      default: ''
    }, // 当前选中的节点
    indent: {
      type: Number,
      default: 16
    }, // 相邻级节点间的水平缩进
    iconClass: {
      type: String,
      default: ''
    }, // 自定义树节点的图标
    showSearch: {
      type: Boolean,
      default: true
    }, // 是否出现搜索框
    iconSearch: {
      type: String,
      default: require('./icon/icon_search.png')
    },
    iconSearchColor: {
      type: String,
      default: '#2e78ff'
    },
    placeholder: {
      type: String,
      default: '请输入关键词'
    },
    treeData: {
      type: Array
    }, // 树结构需要传入的数据
    textColor: {
      type: String,
      default: '#586073'
    }, // 组件文本颜色
    actionColor: {
      type: String,
      default: '#2E78FF'
    }, // 选中高亮时文字的颜色
    actionBkGround: {
      type: String,
      default: 'rgba(46, 120, 255, 0.1)'
    },
    istree: {
      type: Boolean,
      default: true
    }, // 是否需要展示树结构
    icon: {
      type: String,
      default: require('./icon/compent1.png')
    }, // 非树结构时 标签未选中的icon
    iconAction: {
      type: String,
      default: require('./icon/compent2.png')
    }, // 非树结构时 标签选中的icon
    defaultProps: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'label',
          isLeaf: 'leaf'
        };
      }
    }, // 树结构的数据结构要求
    loadNode: {
      type: Function
    }
  },
  data() {
    return {
      searchValue: ''
    };
  },
  watch: {
    searchValue(val) {
      if (this.istree) this.$refs.tree.filter(val);
      else this.filterLi(val);
    }
  },
  mounted() {
    this.createLi();
    this.changeTextColor();
  },
  updated() {
    this.changeTextColor();
  },
  methods: {
    // 有多个选项时
    changeTreeData(v, node) {
      this.$emit('changeTreeData', { v,
        node });
    },
    async clickTreeData(v, node) {
      await this.$nextTick(() => {
        this.changeTextColor();
      });
      // 单选点击选中时字体颜色变化
      if (!(v.children) && !(this.checkbox)) {
        let treeList = this.$refs.treeList;
        let treeNode = treeList.getElementsByClassName('el-tree-node__label');
        for (let i = 0; i < treeNode.length; i++) treeNode[i].style.color = this.textColor;
        let event = window.event || arguments.callee.caller.arguments[0];
        let target = event.srcElement || event.target;
        let span = target.getElementsByClassName('el-tree-node__label')[0];
        if (!span) target.style.color = this.actionColor;
        else span.style.color = this.actionColor;
      }
      // 单选点击选中时需要做的事情
      this.$emit('clickTreeData', { v,
        node });
    },
    changeTextColor() {
      if (this.istree) {
        let treeList = this.$refs.treeList;
        let treeNode = treeList.getElementsByClassName('el-tree-node__label');
        for (let i = 0; i < treeNode.length; i++) treeNode[i].style.color = this.textColor;
      } else {
        let ul = this.$refs.cardTree;
        let lis = ul.getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
          let title = lis[i].getElementsByClassName('title')[0].getElementsByTagName('p')[0];
          title.style.color = this.textColor;
        }
      }
    },
    // 点击每个标签项时
    liClick(e) {
      let target = e.srcElement || e.target;
      if (target.tagName === 'P') {
        let name = target.innerHTML;
        let cardTree = this.$refs.cardTree;
        let items = cardTree.getElementsByTagName('li');
        this.treeData.forEach((item, index) => {
          if (item.label === name) {
            this.$emit('clickTreeData', item);
            for (let i = 0; i < items.length; i++) {
              items[i].className = 'templateLi';
              items[i].getElementsByClassName('title')[0].getElementsByTagName('p')[0].style.color = this.textColor;
            }
            target.parentNode.parentNode.className = 'templateLi iconAction';
            let title = items[index].getElementsByClassName('title')[0].getElementsByTagName('p')[0];
            title.style.color = this.actionColor;
          }
        });
      }
    },
    // 生成标签项
    async createLi(liArr = this.treeData) {
      if (!this.istree && liArr) {
        let ul = this.$refs.cardTree;
        let li = this.$refs.templateLi;
        // 生成新节点
        liArr.forEach((item, index) => {
          let newLi = li.cloneNode(true);
          if (index === 0) newLi.className = 'templateLi iconAction';
          let cloneLi = newLi.getElementsByClassName('title')[0].getElementsByTagName('p')[0];
          cloneLi.innerHTML = item.label;
          newLi.id = '';
          ul.appendChild(newLi);
        });
      }
      await this.$nextTick(() => {
        this.changeTextColor();
      });
    },
    // 树结构关节字过滤
    filterNode(value, data) {
      if (!value) return true;
      return data[this.defaultProps.label].indexOf(value) !== -1;
    },
    // 标签页关键字过滤
    filterLi(val) {
      let newArr = [];
      newArr = this.treeData.filter((item => {
        return item.label.indexOf(val) !== -1;
      }));
      let ul = this.$refs.cardTree;
      ul.innerHTML = '';
      this.createLi(newArr);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
}

p {
  margin: 0;
  padding: 0;
}

#templateLi {
  display: none;
}

.templateLi {
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  & > div {
    height: 100%;
    line-height: 32px;
    font-size: 14px;
    color: #586073;
  }

  & > .iconBox {
    & > img {
      height: 13px;
      margin-left: 8px;
    }

    & > img:nth-of-type(1) {
      display: inline-block;
    }

    & > img:nth-of-type(2) {
      display: none;
    }
  }

  & > .title {
    width: 0;
    flex: 1;
    text-indent: 5px;

    & > p {
      width: 100%;
      height: 100%;
      line-height: 32px;
    }
  }
}

.iconAction {
  background: rgba(46, 120, 255, 0.1) !important;

  & > .iconBox {
    & > img:nth-of-type(1) {
      display: none !important;
    }

    & > img:nth-of-type(2) {
      display: inline-block !important;
    }
  }

  & > .title {
    color: #2e78ff !important;
  }
}

.wrapper {
  background: #fff;
  width: auto;
  padding: 0 16px 24px 16px;
  flex-shrink: 0;
  border-radius: 4px;
  color: #14203b;

  > .title {
    padding: 16px 0;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #ebecee;
  }

  > .box {
    padding: 0 24px 0;
    overflow: hidden;

    .search {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 16px;

      .input {
        height: 32px;
      }

      .icon {
        position: absolute;
        right: 0;
        top: 0;
        width: 42px;
        height: 39px;
        background: #2e78ff;
        border-radius: 0 4px 4px 0;
        cursor: pointer;

        img {
          width: 13px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .tree-list {
      margin-top: 16px;
      // height: 600px;
      // max-height: 600px;
      background: #fff;
      overflow: auto;

      & > ul {
        min-height: 32px;
      }
    }
  }
}

/deep/ .el-tree-node__content {
  margin: 3px 0 !important;
}
</style>
