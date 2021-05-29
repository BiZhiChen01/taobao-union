<template>
    <div class="left-content float-left">
        <div class="content-list">
            <div class="tab-item" v-for="(item, index) of data" :key="index">
                <div :class="curIdx === index ? 'tab-item active' : 'tab-item'" @click="changType(item.id)">
                    {{ item.title }}
                </div>
            </div>
        </div>
        <div class="back-top" @click="goToTop">
            <span class="el-icon-upload2"></span>
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
        },
        goToTop() {
            window.scroll(0, 0);
        }
    }
}
</script>

<style lang="scss">
.left-content {
    position: fixed;

    .content-list {
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
    .back-top {
        margin-top: 30px;
        text-align: center;
        
        span {
            padding: 12px 12px;
            font-size: 16px;
            border: 1px solid #7f828b;
            border-radius: 50%;
            cursor: pointer;

            &:hover {
                color: #c9302c;
                border: 1px solid #c9302c;
            }
        }
    }
}
</style>