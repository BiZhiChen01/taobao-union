<template>
    <div class="search" v-loading="isMainLoading">
        <div class="container">
            <search-list :data="searchData" :isLoading="isLoading" :hasMore="hasMore"></search-list>
        </div>
    </div>
</template>

<script>
import api from '../../services';
import { setMinHeight, scrollToBottom } from '../../libs/utils';

import SearchList from '../../components/OnSellContent';

export default {
    name: 'Search',
    components: {
        SearchList
    },
    async mounted() {
        this.$store.commit('setHeaderTabActive', '');
        setMinHeight('.container');

        if (this.$route.query.keyword !== undefined) {
            this.$store.state.searchKeyword = this.$route.query.keyword;
        }

        await this.getSearch(this.$route.query.keyword, this.page);

        window.addEventListener('scroll', scrollToBottom.bind(this, this.onMoreLoading), false);
    },
    data() {
        return {
            page: 0,
            searchData: [],
            isMainLoading: false,
            isLoading: false,
            hasMore: true
        }
    },
    methods: {
        async getSearch(keyword, page) {
            this.isMainLoading = true;
            const result = await api.getSearch(keyword, page);
            if (result.data.code === api.SUCCESS_CODE) {
                if (result.data.data.tbk_dg_material_optional_response === null) {
                    this.hasMore = false;
                    this.$message({
                        message: '没有查询到此商品...',
                        type: 'warning',
                        center: true
                    });
                } else {
                    this.searchData = result.data.data.tbk_dg_material_optional_response.result_list.map_data;
                }
            }
            this.isMainLoading = false;
        },
        onMoreLoading() {
            if (!this.isLoading && this.hasMore) {
                this.isLoading = true;
                this.page ++;
                api.getSearch(this.$route.query.keyword, this.page).then(result => {
                    if (result.data.code === api.SUCCESS_CODE) {
                        if (result.data.data.tbk_dg_material_optional_response === null) {
                            this.hasMore = false;
                            this.$message({
                                message: '没有更多数据了...',
                                type: 'warning',
                                center: true
                            });
                        } else {
                            this.searchData = this.searchData.concat(result.data.data.tbk_dg_material_optional_response.result_list.map_data);
                        }
                    }
                    this.isLoading = false;
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    },
    computed: {
        keyword() {
            return this.$store.state.searchKeyword;
        }
    },
    watch: {
        keyword(newKeyword, oldKeyword) {
            this.page = 0;
            this.searchData = [];
            this.getSearch(newKeyword, this.page);
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 20px;
}
</style>