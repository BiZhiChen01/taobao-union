<template>
    <div class="right-content float-left">
        <el-carousel>
            <el-carousel-item v-for="(item, index) in data" :key="index">
                <a :href="'https:' + item.coupon_click_url" target="_blank">
                    <el-image style="width: 290px height: 290px" :src="'https:' + item.pict_url" fit="cover"></el-image>
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'RightContent',
    props: {
        data: Array
    }
}
</script>

<style lang="scss">
.right-content {
    position: fixed;
    width: 290px;
    height: 290px;
    margin: 0 5px 0 850px;
    box-shadow: 0 5px 10px #d4d4d4;
}
</style>