# YxtMessage 短提示与Loading

----

::: demo

```html
<div class="demo-block">
    <to-button type="primary" @click="toShowMessage('msg')">点击打开 Message提示</to-button>
    <to-divider></to-divider>
    <to-button type="primary" @click="toShowMessage('loading')">点击打开Loading 提示</to-button>
    <to-button type="normal" @click="toShowMessage('unloading')">点击关闭Loading 提示</to-button>
    <to-divider></to-divider>
    <to-button type="primary" @click="toShowMessage('notification')">点击打开Notification 提示</to-button>
    <to-button type="normal" @click="toShowMessage('closeNotification')">点击关闭Notification 提示</to-button>
</div>
<script>
    export default {
        name: 'YxtMessage',
        data() {
            return {}
        },
        methods: {
            toShowMessage(tag) {
                let h = this.$createElement;
                if (tag === 'msg') {
                    this.$yxtmessage.createElement({
                        type: 'success',
                        message: h('p', null, [
                            h('span', null, 'render函数自定义 YxtMessage'),
                            h('i', {
                                style: 'color: teal'
                            }, '【this.$yxtmessage.createElement】')
                        ])
                    });
                } else if (tag === 'loading') {
                    this.$yxtmessage.showLoading({
                        text: '普通模式使用 YxtMessage【this.$yxtmessage.showLoading()】，\n5s后调用【this.$yxtmessage.hideLoading()】关闭 YxtMessage'
                    });
                    setTimeout(() => {
                        this.$yxtmessage.hideLoading();
                    }, 5000);
                } else if (tag === 'notification') {
                    this.$yxtmessage.createNotification({
                        message: h('p', null, [
                            h('span', null, 'render函数自定义 Notification'),
                            h('i', {
                                style: 'color: teal'
                            }, '【this.$yxtmessage.createNotification】')
                        ])
                    });
                    this.timer = setInterval(() => {
                        this.$yxtmessage.createNotification();
                    }, 2000);
                    setTimeout(() => {
                        this.$notify.closeAll()
                    }, 6000);
                } else if (tag === 'closeNotification') {
                    this.$notify.closeAll()
                    clearInterval(this.timer)
                } else {
                    this.$yxtmessage.hideLoading();
                    this.$yxtmessage.createElement({
                        message: '已关闭',
                        type: 'success'
                    })
                }
            }
        }
    }
</script>
```

:::
