<template>
    <div class="footer clear-fix">
        <div class="container">
            <div class="top">
                <ul>
                    <li>关于我们</li>
                    <li>联系我们</li>
                    <li>加入我们</li>
                    <li>友情链接</li>
                    <li>帮助中心</li>
                    <li>广告投放</li>
                </ul>
            </div>
            <div class="bottom clear-fix">
                <p>Copyright&nbsp;&copy;&nbsp;2021&nbsp;Chen</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
    height: 150px;
    background-color: #c9302c;

    .container {
        color: #fff;

        .top {
            width: 600px;
            margin: 0 auto;
            text-align: center;
            line-height: 100px;
            li {
                float: left;
                width: 100px;
                text-align: center;
                font-size: 14px;
            }
        }
        .bottom {
            text-align: center;
        }
    }
}
</style>