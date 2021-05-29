<template>
    <div class="search" v-loading="isMainLoading">
        <div class="container">
            <search-list :data="searchData" :loading="isMainLoading" :hasMore="hasMore"></search-list>
        </div>
    </div>
</template>

<script>
import api from '../../services';
import { setMinHeight } from '../../libs/utils';

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
    },
    data() {
        return {
            page: 0,
            searchData: [],
            isMainLoading: false,
            hasMore: true
        }
    },
    methods: {
        async getSearch(keyword, page) {
            const result = await api.getSearch(keyword, page);
            if (result.data.code === api.SUCCESS_CODE) {
                this.searchData = result.data.data.tbk_dg_material_optional_response.result_list.map_data;
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