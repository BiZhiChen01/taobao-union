<template>
    <div class="left-content float-left">
        <div class="tab-item" v-for="(item, index) of data" :key="index">
            <div :class="curIdx === index ? 'tab-item active' : 'tab-item'" @click="changType(item.id)">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftContent',
    props: {
        data: Array
    },
    data() {
        return {
            curIdx: 0
        }
    },
    methods: {
        changType(id) {
            this.curIdx = this.data.findIndex(item => item.id === id);
            this.$store.state.homeCategoryId = id;
        }
    }
}
</script>

<style lang="scss">
.left-content {
    background-color: #fff;
    box-shadow: 0 5px 10px #d4d4d4;

    .tab-item {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;

        &:hover {
            background-color: #c9302c;
            color: #fff;
        }
    }
    .active {
        background-color: #c9302c;
        color: #fff;
    }
}
</style>