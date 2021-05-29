<template>
    <div class="header">
        <div class="container">
            <header-logo></header-logo>
            <header-tab></header-tab>
            <header-search></header-search>
        </div>
    </div>
</template>

<script>
import HeaderLogo from './Logo';
import HeaderTab from './Tab';
import HeaderSearch from './Search';

export default {
    name: 'Header',
    components: {
        HeaderLogo,
        HeaderTab,
        HeaderSearch
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 70px;
    line-height: 70px;
    background-color: #fff;
    box-shadow: 0 5px 10px #d4d4d4;
}
</style>