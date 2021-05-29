<template>
    <div>
        OnSell
    </div>
</template>

<script>
export default {
    name: 'OnSell',
    mounted() {
        this.$store.commit('setHeaderTabActive', 'onSell');
    }
}
</script>

<style lang="scss" scoped>

</style>