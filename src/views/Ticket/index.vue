<template>
    <div class="ticket" v-loading="isMainLoading">
        <div class="container">
            <nav-bar :data="navData"></nav-bar>
            <ticket-list :data="ticketData" :isContentLoading="isContentLoading"></ticket-list>
        </div>
    </div>
</template>

<script>
import api from '../../services';
import { setMinHeight } from '../../libs/utils';

import NavBar from '../../components/TicketContent/NavBar';
import TicketList from '../../components/TicketContent/TicketList';

export default {
    name: 'Ticket',
    components: {
        NavBar,
        TicketList
    },
    async mounted() {
        this.$store.commit('setHeaderTabActive', 'ticket');
        setMinHeight('.ticket');

        await this.getRecommendCategory();
        this.getRecommendContent(this.navData[0].favorites_id);
        this.$store.state.navFavoritesTitle = this.navData[0].favorites_title.split('').join("<em>/</em>");

        window.addEventListener('scroll', this.onScroll, false);
        this.onScroll();
    },
    data() {
        return {
            navData: [],
            ticketData: [],
            isMainLoading: false,
            isContentLoading: false
        }
    },
    methods: {
        async getRecommendCategory() {
            this.isMainLoading = true;
            const result = await api.getRecommendCategory();
            if (result.data.code === api.SUCCESS_CODE) {
                this.navData = result.data.data;
                this.isMainLoading = false;
            }
        },
        async getRecommendContent(favoritesId) {
            this.isContentLoading = true;
            const result = await api.getRecommendContent(favoritesId);
            if (result.data.code === api.SUCCESS_CODE) {
                this.ticketData = result.data.data.tbk_dg_optimus_material_response.result_list.map_data;
                this.isContentLoading = false;
            }
        },
        onScroll() {
            const navBar = document.querySelector('.nav-bar'),
                  dy = document.documentElement.scrollTop;
            if (90 > dy) {
                navBar.style.top = (90 - dy) + 'px'
            } else {
                navBar.style.top = '10px';
            }
        }
    },
    computed: {
        favoritesId() {
            return this.$store.state.navFavoritesId;
        }
    },
    watch: {
        favoritesId(newFavoritesId, oldFavoritesId) {
            this.ticketData = [];
            this.getRecommendContent(newFavoritesId);
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 20px;
}
</style>