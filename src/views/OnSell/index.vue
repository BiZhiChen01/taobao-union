<template>
    <div class="onSell" v-loading="isMainLoading">
        <div class="container">
            <on-sell-list :data="onSellData"></on-sell-list>
        </div>
    </div>
</template>

<script>
import api from '../../services';

import OnSellList from '../../components/OnSellContent';

export default {
    name: 'OnSell',
    components: {
        OnSellList
    },
    async mounted() {
        this.$store.commit('setHeaderTabActive', 'onSell');

        await this.getOnSellContent(this.page);
    },
    data() {
        return {
            onSellData: [],
            page: 0,
            isMainLoading: false,
            isLoading: false
        }
    },
    methods: {
        async getOnSellContent(page) {
            this.isMainLoading = true;
            const result = await api.getOnSellContent(page);
            if (result.data.code === api.SUCCESS_CODE) {
                this.onSellData = result.data.data.tbk_dg_optimus_material_response.result_list.map_data;
                this.isMainLoading = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 20px;
}
</style>