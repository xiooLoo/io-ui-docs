<template>
  <!-- 传对象数组进来
    [{
      label: '',
      slotKey: ''
    }]
    Author: Aris time: 20210716
   -->
  <div>
    <div class="searchBox">
      <el-row :gutter="24">
        <el-col
          :span="colNumber"
          v-for="(item, index) in searchList"
          :key="index"
        >
          <div class="search-item">
            <div class="label">{{ item.label }}</div>
            <div class="content">
              <slot :name="item.slotKey"></slot>
            </div>
          </div>
        </el-col>
        <el-col :span="colNumber" :offset="endOffset">
          <div class="search-btn">
            <el-button type="primary">查询</el-button>
            <el-button plain>重置</el-button>
            <span @click="toggle" class="toggleBtn" v-if="moreVisible">
              {{ isFold ? "展开" : "收起"
              }}<i
                :class="[isFold ? 'el-icon-arrow-down' : 'el-icon-arrow-up']"
              ></i>
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YxtSearch',
  props: ['dataList', 'isFold'],
  components: {},
  data() {
    return {
      tableKeyList: [],
      searchList: [],
      innerWidth: 0,
      colNumber: 6
    };
  },
  computed: {
    endOffset() {
      const col = this.colNumber;
      const len = this.searchList.length;
      return col * ((24 / col) - 1 - (len % (24 / col)));
    },
    moreVisible() {
      return this.dataList.length >= 24 / this.colNumber;
    }
  },
  watch: {
    innerWidth(v) {
      this.fmtList();
      let col;
      if (this.dataList.length < 2) {
        if (v > 600) {
          col = 12;
        } else {
          col = 24;
        }
      } else if (v >= 1600) {
        col = 6;
      } else if (v < 1600 && v >= 1200) {
        col = 8;
      } else if (v < 1200 && v >= 600) {
        col = 12;
      } else {
        col = 24;
      }

      this.colNumber = col;
    }
  },
  created() {
    this.searchList = this.dataList;
    this.fmtList();
    // 获取当前窗口宽度
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {},
  methods: {
    handleResize(e) {
      this.innerWidth = e.currentTarget.innerWidth;
    },
    toggle() {
      this.isFold = !this.isFold;
      this.fmtList();
    },
    fmtList() {
      if (this.isFold) {
        this.searchList = this.dataList.slice(0, 24 / (this.colNumber - 1));
      } else {
        this.searchList = this.dataList;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>
<style scoped lang="scss">
.searchBox {
  background: #fff;
  padding: 20px 24px;
  .search-item {
    height: 50px;
    display: flex;
    align-items: center;
    .label {
      padding-right: 10px;
    }
    .content {
      flex: 1;
      /deep/ * {
        width: 100% !important;
      }
    }
  }
  .search-btn {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .toggleBtn {
      margin-left: 20px;
      color: #1890ff;
      cursor: pointer;
    }
  }
}
</style>
