<template>
    <div class="nav-bar">
        <div :class="curIdx === index ? 'item active' : 'item'" v-for="(item, index) of data" :key="index" @click="changeType(item.favorites_id)">
            {{ item.favorites_title }}
        </div>
        <div class="back-top float-right" @click="scrollGoTop">
            <span class="el-icon-upload2"></span>
        </div>
        <span class="line" :style="{left: lineLeft}"></span>
    </div>
</template>

<script>
import { scrollGoTop } from '../../libs/utils';

export default {
    name: 'NavBar',
    props: {
        data: Array
    },
    data() {
        return {
            curIdx: 0,
            lineLeft: 0
        }
    },
    methods: {
        scrollGoTop,
        changeType(id) {
            this.scrollGoTop();
            this.curIdx = this.data.findIndex(item => item.favorites_id === id);
            this.lineLeft = this.curIdx * 100 + 'px';
            this.$store.state.navFavoritesId = id;
            this.$store.state.navFavoritesTitle = this.data[this.curIdx].favorites_title.split('').join("<em>/</em>");
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-bar {
    position: fixed;
    width: 1140px;
    height: 60px;
    z-index: 2;
    line-height: 60px;
    background-color: #fff;
    box-shadow: 0 5px 10px #d4d4d4;

    .item {
        float: left;
        width: 100px;
        text-align: center;
        cursor: pointer;
    }
    .back-top {
        margin-right: 20px;
        text-align: center;
        
        span {
            padding: 8px 8px;
            font-size: 14px;
            border: 1px solid #7f828b;
            border-radius: 50%;
            cursor: pointer;

            &:hover {
                color: #c9302c;
                border: 1px solid #c9302c;
            }
        }
    }
    .line {
        position: absolute;
        left: 0;
        bottom: 0;
        display: inline-block;
        width: 100px;
        border-bottom: 2px solid #c9302c;
        transition: left .3s;
    }
    .active {
        color: #c9302c;
    }
}
</style>