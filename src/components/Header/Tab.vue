<template>
    <div class="header-tab float-left">
        <router-link :class="$store.state.headerTabCurrent === 'home' ? 'active' : ''" to="/">发现</router-link>
        <router-link :class="$store.state.headerTabCurrent === 'ticket' ? 'active' : ''" to="ticket">券场</router-link>
        <router-link :class="$store.state.headerTabCurrent === 'onSell' ? 'active' : ''" to="onSell">特惠</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderTab'
}
</script>

<style lang="scss" scoped>
.header-tab {
    margin-left: 100px;

    a {
        float: left;
        padding: 0 15px;
        font-size: 15px;
        font-weight: 600;
        color: #000;
    }
    .active {
        background: rgba(0,0,0,.03922);
    }
}
</style>