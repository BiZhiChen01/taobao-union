<template>
    <div class="home">
        Home
    </div>
</template>

<script>
import { setMinHeight } from '../../libs/utils';

export default {
    name: 'Home',
    mounted() {
        this.$store.commit('setHeaderTabActive', 'home');
        setMinHeight('.home');
    }
}
</script>

<style lang="scss" scoped>

</style>