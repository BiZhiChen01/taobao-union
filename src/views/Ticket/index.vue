<template>
    <div>
        Ticket
    </div>
</template>

<script>
export default {
    name: 'Ticket',
    mounted() {
        this.$store.commit('setHeaderTabActive', 'ticket');
    }
}
</script>

<style lang="scss" scoped>

</style>