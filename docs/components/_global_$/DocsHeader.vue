<template>
  <header
    class="page-header"
    :style="
      $route.name === 'index'
        ? 'box-shadow:none'
        : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'
    "
  >
    <div class="header-container">
      <router-link :to="{ name: 'index' }">
        <img src="@/assets/img/banner.png" width="100" />
      </router-link>
      <div class="menu-left-wrraper">
        <div :class="['menu-item', currPath === item.path ? 'activeClass' : '']" v-for="(item, index) in moudules" :key="index">
          <router-link :to="item.path">{{ item.name }} </router-link>
        </div>
        <span class="img-box">
          <img src="../../assets/img/log-avater.jpeg" />
        </span>
      </div>
    </div>
  </header>
</template>
<script>
import { autoRegistRoutes } from '@/util/autoRegistRoutes.js';
export default {
  data() {
    return {
      moudules: [],
      currPath: ''
    };
  },
  methods: {
    getConfigRoute() {
      this.moudules = autoRegistRoutes().reverse();
    }
  },
  watch: {
    $route: {
      handler: function(to) {
        if (to.path) {
          this.moudules.forEach(item => {
            if (item.path === to.path) {
              this.currPath = item.path;
            }
          });
        }
      },
      immediate: true
    }
  },
  created() {
    this.getConfigRoute();
  }
};
</script>
<style lang="less" type="text/less" scoped>
@import "../../assets/less/index";
/deep/ .router-link-active {
  color: #2e78ff;
}
.page-header {
  background-color: #fff;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
    .menu-left-wrraper {
      width: 600px;
      height: 40px;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .menu-item {
        height: 40px;
        line-height: 50px;
        margin-right: 30px;
      }
      .activeClass {
        position: relative;
      }
      .activeClass::after {
        position: relative;
        bottom: -8px;
        display: block;
        content: "";
        background: #2e78ff;
        height: 3px;
        width: 100%;
      }
      .img-box {
        width: 32px;
        height: 32px;
        padding-top: 15px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }
      }
    }
  }
}
</style>
