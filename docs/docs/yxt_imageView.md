# yxt-image-view 

### 基础用法

::: demo  可通过fit确定图片如何适应到容器框

```html
<template>
    <div class="image-view">
        <div class="image-item">
            <div class="div">fill</div>
            <yxt-image-view :src="src" fit="fill" />
        </div>
        <div class="image-item">
            <div class="div">contain</div>
            <yxt-image-view :src="src" fit="contain" />
        </div>
        <div class="image-item">
            <div class="div">cover</div>
            <yxt-image-view :src="src" fit="cover" />
        </div>
        <div class="image-item">
            <div class="div">none</div>
            <yxt-image-view :src="src" fit="none" />
        </div>
        <div class="image-item">
            <div class="div">scale-down</div>
            <yxt-image-view :src="src" fit="scale-down" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                src: 'https://wx2.sinaimg.cn/mw1024/0089jQuMly1h3lfgcytnej32yo1o0k4v.jpg',
                fit: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ],
                scrollContainer: {}
            }
        }
    }
</script>
<style>
    .image-view {
        display: flex;

    }

    .image-item {
        flex: 1;
        margin-right: 20px;
    }

    .image-item .div {
        padding: 10px 0;
        margin-left: 36%;
    }

    .image-item:last-child .div {
        margin-left: 30%;
    }

    .image-item .to-image {
        width: 300px;
        height: 200px;
    }

    .image-item:last-child {
        margin-right: 0;
    }
</style>
```

:::

### 是否预览

::: demo  可通过fit确定图片如何适应到容器框

```html
<template>
    <div class="image-lazy" ref="scrollContainer">
        <yxt-image-view v-for="(url,index) in urls" :key="index" :src="url" :preview-src-list="urls" />
    </div>
</template>
<style>
    .image-lazy {
        width: 40%;
        height: 500px;
        overflow: auto;
    }
</style>
```

:::

### Attributes

| 参数      | 说明    | 类型     |可选值   |  默认值 
|----------|-------- |---------- |--------|---------
|src   | 图片路径|string
|fit | 适配方案|string| fill/contain/cover/none/scale-down
|lazy|是否懒加载|boolean|true/false|
|scrollContainer |滚动对象|object
|previewSrcList | 预览图片集合 |array
|zIndex | 显示层级| number
