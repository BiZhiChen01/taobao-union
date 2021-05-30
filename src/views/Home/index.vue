<template>
    <div class="home" v-loading="isMainLoading">
        <div class="container">
            <left-content :data="leftData"></left-content>
            <center-content :data="centerData" :isContentLoading="isContentLoading" :isLoading="isLoading"></center-content>
            <right-content :data="rightData"></right-content>
        </div>
    </div>
</template>

<script>
import { setMinHeight, scrollToBottom } from '../../libs/utils';
import api from '../../services';

import LeftContent from '../../components/HomeContent/Left';
import CenterContent from '../../components/HomeContent/Center';
import RightContent from '../../components/HomeContent/Right';

export default {
    name: 'Home',
    components: {
        LeftContent,
        CenterContent,
        RightContent
    },
    async mounted() {
        this.$store.commit('setHeaderTabActive', 'home');
        setMinHeight('.home');

        await this.getCategories();
        this.$store.state.homeCategoryId = this.leftData[0].id;
        await this.getCategoryContent(this.leftData[0].id, this.page);
        this.rightData = this.centerData.slice(0, 3);

        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('scroll', scrollToBottom.bind(this, this.onMoreLoading), false);

        this.onScroll();
    },
    data() {
        return {
            leftData: [],
            page: 0,
            centerData: [],
            rightData: [],
            isMainLoading: false,
            isContentLoading: false,
            isLoading: false,
            hasMore: true
        }
    },
    methods: {
        async getCategories() {
            this.isMainLoading = true;
            const result = await api.getCategories();
            if (result.data.code === api.SUCCESS_CODE) {
                this.leftData = result.data.data;
                this.isMainLoading = false;
            }
        },
        async getCategoryContent(materialId, page) {
            this.isContentLoading = true;
            const result = await api.getCategoryContent(materialId, page);
            if (result.data.code === api.SUCCESS_CODE) {
                this.centerData = result.data.data;
                this.isContentLoading = false;
            }
        },
        onScroll() {
            let oLeftBox = document.querySelector('.left-content'),
                oRightBox = document.querySelector('.right-content'),
                dy = document.documentElement.scrollTop;

            if (oLeftBox && oRightBox) {
                if (dy >= 90) {
                oLeftBox.style.top = '10px';
                oRightBox.style.top = '10px';
                } else {
                    oLeftBox.style.top = (90 - dy) + 'px';
                    oRightBox.style.top = (90 - dy) + 'px';
                }
            }
        },
        onMoreLoading() {
            if (!this.isLoading && this.hasMore) {
                this.isLoading = true;
                this.page ++;
                api.getCategoryContent(this.$store.state.homeCategoryId, this.page).then(result => {
                    if (result.data.code === api.SUCCESS_CODE) {
                        this.centerData = this.centerData.concat(result.data.data);
                    } else {
                        this.page --;
                        this.$message({
                            message: result.data.code,
                            type: 'error'
                        });
                    }
                    this.isLoading = false;
                }).catch(error => {
                    if (error.response.status === 500) {
                        this.isLoading = false;
                        this.hasMore = false;
                        this.$message({
                            message: '没有更多数据了...',
                            type: 'warning',
                            center: true
                        });
                    }
                });
            }
        }
    },
    computed: {
        materialId() {
            return this.$store.state.homeCategoryId;
        }
    },
    watch: {
        materialId(newMaterialId, oldMaterialId) {
            this.page = 0;
            this.centerData = [];
            this.getCategoryContent(newMaterialId, this.page);
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 20px;
}
</style>