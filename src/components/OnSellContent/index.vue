<template>
    <div class="on-sell-list">
        <div class="content-box">
            <div class="content-item float-left" v-for="(item, index) of data" :key="index" @click="openUrl(item.coupon_click_url ? 'https:'+item.coupon_click_url : (item.coupon_share_url ? 'https:'+item.coupon_share_url : item.item_url))">
                <div class="cover">
                    <el-image style="width: 263px; height: 263px" :src="item.pict_url.indexOf('https:') ? 'https:'+item.pict_url : item.pict_url" fit="cover"></el-image>
                    <span class="coupon-amount" v-show="item.coupon_amount">省&nbsp;{{ item.coupon_amount }}&nbsp;元</span>
                </div>
                <div class="price">
                    <span>￥{{ item.zk_final_price }}</span>
                    <span>券后价：{{ to2Bit(item.zk_final_price - item.coupon_amount) }}</span>
                </div>
                <div class="sell">
                    {{ item.volume }}&nbsp;·&nbsp;人已购买
                </div>
                <div class="title">
                    {{ item.title }}
                </div>
            </div>
            <div class="loading clear-fix" v-show="hasMore" v-loading="isLoading">

            </div>
        </div>
    </div>
</template>

<script>
import { setMinHeight, to2Bit, openUrl } from '../../libs/utils';

export default {
    name: 'OnSellHeight',
    props: {
        data: Array,
        isLoading: Boolean,
        hasMore: Boolean
    },
    mounted() {
        setMinHeight('.on-sell-list');
    },
    methods: {
        to2Bit,
        openUrl
    }
}
</script>

<style lang="scss" scoped>
.on-sell-list {
    .content-box {
        .content-item {
            width: 263px;
            margin: 5px;
            padding: 5px;
            border: 1px solid #dfdfdf;
            cursor: pointer;

            .cover {
                position: relative;

                 .coupon-amount {
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 6px 18px;
                    font-size: 14px;
                    text-align: center;
                    background: #c9302c;
                    color: #fff;
                }
            }
            .price {
                margin: 15px 0;
                font-size: 18px;
                color: #f40;

                span:first-child {
                    text-decoration: line-through;
                }
                span:last-child {
                    margin-left: 20px;
                    font-size: 20px;
                }
            }
            .sell {
                color: #7f828b;
            }
            .title {
                margin-top: 10px;
                line-height: 20px;
                font-size: 16px;
                font-weight: 600;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            &:hover {
                border: 1px solid #c9302c;
            }
        }
        .loading {
            height: 150px;
        }
    }
}
</style>