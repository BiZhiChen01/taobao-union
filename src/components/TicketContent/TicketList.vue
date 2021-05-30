<template>
    <div class="ticket-list">
        <div class="recommend-title" v-html="this.$store.state.navFavoritesTitle">
            
        </div>
        <div class="content-box" v-loading="isContentLoading">
            <div class="content-item float-left" v-for="(item, index) of data" :key="index">
                <div class="cover">
                    <el-image style="width: 240px; height: 240px" :src="item.pict_url + '_240x240xzq90.jpg_.webp'" fit="cover"></el-image>
                    <span class="coupon_info" v-show="item.coupon_click_url !== null">{{ item.coupon_info }}</span>
                </div>
                <h1 class="title" @click="openUrl(item.coupon_click_url !== null ? item.coupon_click_url : item.click_url)">
                    {{ item.title }}
                </h1>
                <div class="info">
                    <el-button v-if="item.coupon_click_url !== null" type="danger" @click="openUrl(item.coupon_click_url !== null ? item.coupon_click_url : item.click_url)">领券购买</el-button>
                    <span v-text="item.coupon_click_url === null ? '晚了，无优惠券了' : '原价：'+item.zk_final_price"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { setMinHeight, openUrl } from '../../libs/utils';

export default {
    name: 'TicketList',
    props: {
        data: Array,
        isContentLoading: Boolean
    },
    mounted() {
        setMinHeight('.content-box');
    },
    methods: {
        openUrl
    }
}
</script>

<style lang="scss" scoped>
.ticket-list {
    height: 100%;

    .recommend-title {
        height: 100px;
        margin-top: 90px;
        line-height: 60px;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 5px;
        text-align: center;
        color: #4d555d;
    }
    .content-box {
        .content-item {
            width: 245px;
            height: 345px;
            margin: 0 10px 20px;
            padding: 10px;
            background-color: #fff;
            box-shadow: 0 5px 10px #d4d4d4;

            .cover {
                position: relative;

                .coupon_info {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    padding: 10px 15px;
                    font-size: 14px;
                    color: #fff;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                    background-color: #c9302c;
                }
            }
            .title {
                margin: 10px 0;
                font-size: 16px;
                line-height: 22px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                cursor: pointer;
                transition: color .3s;

                &:hover {
                    color: #c9302c;
                }
            }
            .info {
                height: 40px;
                line-height: 40px;

                span {
                    margin-left: 20px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #F5A623;
                }
            }
        }
    }
}
</style>