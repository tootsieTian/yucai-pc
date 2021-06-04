<template>
    <div class="classify-nav">
        <div class="container-main">
            <div class="title">课程分类：</div>
            <div class="classify-list">
                <div :class="{'classify-item':true,'classify-item--active':item===3}"
                     v-for="item in 4"
                     :key="4+'p'">家庭教育
                </div>
            </div>
        </div>
    </div>
    <main class="container-main">
        <div class="filter-list">
            <div class="filter-item">综合</div>
            <div class="filter-item">最多购买</div>
            <div class="filter-item">最新课程</div>
            <div class="filter-item">价格</div>
        </div>
        <el-row :gutter="24">
            <el-col v-for="item in 12"
                    :span="6"
                    :key="item+'l'">
                <m-course-card/>
            </el-col>
        </el-row>
    </main>
</template>

<script>
  import MCourseCard from "../../../components/courseCard/sCourseCard";

  export default {
    name: "index",
    components: {MCourseCard},
    setup() {

    }
  }
</script>

<style lang="scss" scoped>
    .classify-nav {
        height: 165px;
        background: #F5F5F5;
        width: 100%;

        .container-main {
            display: flex;
            align-items: center;
            height: 100%;

            .title {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #333333;
            }

            .classify-list {
                display: flex;

                .classify-item {
                    font-size: 16px;
                    padding: 0 18px;
                    font-weight: 400;
                    line-height: 48px;
                    cursor: pointer;
                    color: rgba(51, 51, 51, 0.5);
                }

                .classify-item--active {
                    background: #FFFFFF;
                    color: #333333;;
                }
            }
        }
    }

    .filter-list {
        display: flex;
        margin-top: 41px;
        margin-bottom: 36px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: rgba(51, 51, 51, 0.5);
        .filter-item{
            cursor: pointer;
        }
        .filter-item:first-child {
            padding-right: 21px;
        }

        .filter-item:not(:first-child) {
            position: relative;
            padding: 0 21px;
        }

        .filter-item:not(:first-child):before {
            content: '';
            width: 1px;
            height: 13px;
            background: #DBDBDB;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    main {
        padding-bottom: 100px;
    }

    ::v-deep .m-course-card {
        margin-bottom: 38px;
    }
</style>
