<template>
    <div class="center-content float-left" v-loading="isContentLoading">
        <ul class="content-box">
            <li class="content-item clear-fix" v-for="(item, index) of data" :key="index">
                <div class="cover float-left">
                    <el-image style="width: 180px; height: 180px" :src="'https:' + item.pict_url + '_180x180xzq90.jpg_.webp'" fit="cover"></el-image>
                </div>
                <div class="info float-left">
                    <div class="title">
                        <a :href="'https:' + item.coupon_click_url" target="_blank">{{ item.title }}</a>
                    </div>
                    <div class="price">
                        <span>原价：{{ item.zk_final_price }}</span>
                        <span>券后价：{{ to2Bit(item.zk_final_price - item.coupon_amount) }}</span>
                    </div>
                    <div class="sell">
                        <span>{{ item.volume }}&nbsp;·&nbsp;人已购买</span>
                    </div>
                    <div class="buy-btn" @click="openUrl('https:' + item.coupon_click_url)">
                        <el-button type="danger">领券购买</el-button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="loading" v-show="isLoading" v-loading="isLoading">

        </div>
    </div>
</template>

<script>
import { setMinHeight, to2Bit, openUrl } from '../../libs/utils';

export default {
    name: 'CenterContent',
    props: {
        data: Array,
        isContentLoading: Boolean,
        isLoading: Boolean
    },
    mounted() {
        setMinHeight('.center-content')
    },
    methods: {
        to2Bit,
        openUrl
    }
}
</script>

<style lang="scss">
.center-content {
    width: 710px;
    margin: 0 20px 0 120px;
    
    .content-item {
        height: 180px;
        margin-bottom: 10px;
        padding: 10px;
        background-color: #fff;
        box-shadow: 0 5px 10px #d4d4d4;

        .cover {
            .el-image {
                border-radius: 5px;
            }
        }
        .info {
            position: relative;
            width: 500px;
            margin-left: 10px;

            .title {
                font-size: 20px;
                font-weight: 600;
                a {
                    &:hover {
                        text-decoration: underline;
                        color: #c9302c;
                    }
                }
            }
            .price {
                margin: 20px 0;
                font-size: 16px;
                font-weight: 600;

                span:first-child {
                    color: #999;
                    text-decoration: line-through;
                }
                span:last-child {
                    margin-left: 20px;
                    font-size: 18px;
                    color: #ff4500;
                }
            }
            .buy-btn {
                position: absolute;
                right: 0;
                top: 140px;
            }
        }
    }
    .loading {
        height: 100px;
    }
}
</style>