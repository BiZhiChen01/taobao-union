<template>
    <div class="home">
        <div class="container">
            <left-content :data="leftData"></left-content>
            <center-content></center-content>
            <right-content></right-content>
        </div>
    </div>
</template>

<script>
import { setMinHeight } from '../../libs/utils';
import api from '../../services';

import LeftContent from '../../components/HomeContent/Left';
import CenterContent from '../../components/HomeContent/Center';
import RightContent from '../../components/HomeContent/Right';

export default {
    name: 'Home',
    components: {
        LeftContent,
        CenterContent,
        RightContent
    },
    async mounted() {
        this.$store.commit('setHeaderTabActive', 'home');
        setMinHeight('.home');

        await this.getCategories();
    },
    data() {
        return {
            leftData: []
        }
    },
    methods: {
        async getCategories() {
            const result = await api.getCategories();
            if (result.data.code === api.SUCCESS_CODE) {
                this.leftData = result.data.data;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    margin-top: 20px;
}
</style>