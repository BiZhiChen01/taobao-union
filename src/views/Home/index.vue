<template>
    <div class="home">
        <div class="container">
            <left-content :data="leftData"></left-content>
            <center-content :data="centerData"></center-content>
            <right-content :data="rightData"></right-content>
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
        await this.getCategoryContent(this.leftData[0].id, this.page);
        this.rightData = this.centerData.slice(0, 3);
    },
    data() {
        return {
            leftData: [],
            page: 0,
            centerData: [],
            rightData: []
        }
    },
    methods: {
        async getCategories() {
            const result = await api.getCategories();
            if (result.data.code === api.SUCCESS_CODE) {
                this.leftData = result.data.data;
            }
        },
        async getCategoryContent(materialId, page) {
            const result = await api.getCategoryContent(materialId, page);
            if (result.data.code === api.SUCCESS_CODE) {
                this.centerData = result.data.data;
            }
        }
    },
    computed: {
        materialId() {
            return this.$store.state.homeCategoryId;
        }
    },
    watch: {
        materialId(newMaterialId, oldMaterialId) {
            this.page = 0;
            this.getCategoryContent(newMaterialId, this.page);
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    margin-top: 20px;
}
</style>