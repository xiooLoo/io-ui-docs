<template>
  <div class="main-skeleton">
    <BaseSkeleton height="80px"></BaseSkeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <BaseSkeleton height="300px"></BaseSkeleton>
        </div>
        <BaseSkeleton height="45px"></BaseSkeleton>
      </div>
      <div class="skeleton-bottom">
        <BaseSkeleton height="45px"></BaseSkeleton>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DocsMainSkeleton',
  data() {
    return {
      msg: 'hello vue'
    };
  }
};
</script>
<style lang="less" type="text/less" scoped>
.skeleton-container {
  width: 960px;
  margin: 0 auto;
  text-align: center;
  padding: 100px 0;
}

.skeleton-bottom {
  width: 960px;
  margin: 0 auto;
  text-align: center;
}

.skeleton {
  margin: 0 auto;
  width: 300px;
  margin-bottom: 56px;
}
</style>
