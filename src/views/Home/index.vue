<template>
    <div>
        Home
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted() {
        this.$store.commit('setHeaderTabActive', 'home');
    }
}
</script>

<style lang="scss" scoped>

</style>