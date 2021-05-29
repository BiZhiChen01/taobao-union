<template>
    <div class="header-search float-right">
        <div class="serrch-input float-left">
            <el-input placeholder="复制（淘宝的标题或者关键字）找优惠券!" size="small"></el-input>
        </div>
        <div class="search-btn float-left">
            <el-button type="danger" size="small">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderSearch'
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