<template>
    <div class="header-search float-right">
        <div class="serrch-input float-left">
            <el-input v-model="keyword" placeholder="复制（淘宝的标题或者关键字）找优惠券!" size="small"></el-input>
        </div>
        <div class="search-btn float-left">
            <el-button type="danger" size="small" @click="doSearch">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderSearch',
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        doSearch() {
            this.$store.state.searchKeyword = this.keyword;
            this.$router.push({
                name: 'search',
                query: {
                    keyword: this.keyword
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.header-search {
    .serrch-input {
        width: 300px;
    }
    .search-btn {
        margin-left: 20px;

        .el-button--danger {
            width: 80px;
            text-align: center;
        }
    }
}
</style>