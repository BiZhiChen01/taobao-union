<template>
    <div class="onSell" v-loading="isMainLoading">
        <div class="container">
            <on-sell-list :data="onSellData" :isLoading="isLoading" :hasMore="hasMore"></on-sell-list>
        </div>
    </div>
</template>

<script>
import api from '../../services';
import { scrollToBottom } from '../../libs/utils';

import OnSellList from '../../components/OnSellContent';

export default {
    name: 'OnSell',
    components: {
        OnSellList
    },
    async mounted() {
        this.$store.commit('setHeaderTabActive', 'onSell');

        await this.getOnSellContent(this.page);

        window.addEventListener('scroll', this.scrollToBottom.bind(this, this.onMoreLoading), false);
    },
    data() {
        return {
            onSellData: [],
            page: 0,
            isMainLoading: false,
            isLoading: false,
            hasMore: true
        }
    },
    methods: {
        scrollToBottom,
        async getOnSellContent(page) {
            this.isMainLoading = true;
            const result = await api.getOnSellContent(page);
            if (result.data.code === api.SUCCESS_CODE) {
                this.onSellData = result.data.data.tbk_dg_optimus_material_response.result_list.map_data;
                this.isMainLoading = false;
            }
        },
        async onMoreLoading() {
            if (!this.isLoading && this.hasMore) {
                this.isLoading = true;
                this.page ++;
                const result = await api.getOnSellContent(this.page);
                if (result.data.data.tbk_dg_optimus_material_response === null) {
                    this.$message.error({
                        message: '没有更多内容了...',
                        center: true
                    });
                    this.hasMore = false;
                }
                this.onSellData = this.onSellData.concat(result.data.data.tbk_dg_optimus_material_response.result_list.map_data);
                this.isLoading = false;
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