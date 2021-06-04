<template>
    <div class="classify-nav">
        <div class="container-main">
            <div class="title">课程分类：</div>
            <div class="classify-list">
                <div class="order classify-box">
                    <div class="subtitle">排序</div>
                    <div class="classify-item"
                         v-for="(item, index) in orderList"
                         :key="'o'+index">
                        {{item.title}}
                    </div>
                </div>
                <div class="classify classify-box">
                    <div class="subtitle">分类</div>
                    <div class="classify-item"
                         v-for="(item, index) in classifyList"
                         :key="'c'+index">
                        {{item.title}}
                    </div>
                </div>
                <div class="type classify-box">
                    <div class="subtitle">类型</div>
                    <div class="classify-item"
                         v-for="(item, index) in typeList"
                         :key="'t'+index">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main class="container-main">
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
  import {reactive} from 'vue'

  export default {
    name: "index",
    components: {MCourseCard},
    setup() {
      const orderList = reactive([
        {
          title: '综合排序'
        },
        {
          title: '最新课程'
        },
        {
          title: '最多购买'
        },
        {
          title: '价格由高到低'
        },
        {
          title: '价格由低到高'
        }
      ])
      const classifyList = reactive([
        {
          title: '家庭教育'
        },
        {
          title: '企业管理'
        }
      ])
      const typeList = reactive([
        {
          title: '免费'
        },
        {
          title: '付费'
        }
      ])
      return {
        orderList,
        classifyList,
        typeList
      }
    }
  }
</script>

<style lang="scss" scoped>
    .classify-nav {
        height: 250px;
        background: #F5F5F5;
        width: 100%;

        .container-main {
            height: 100%;
            padding-top: 39px;
            padding-bottom: 22px;
            box-sizing: border-box;

            .title {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #333333;
                margin-bottom: 34px;
            }

            .classify-list {
                .classify-box {
                    display: flex;
                    margin-bottom: 25px;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                    color: #333333;

                    .subtitle {
                        opacity: 1;
                        margin-right: 40px;
                    }

                    .classify-item {
                        opacity: 0.5;
                        cursor: pointer;
                    }

                    .classify-item:not(:last-child) {
                        margin-right: 40px;
                    }

                    .classify-item--active {
                        opacity: 1 !important;
                    }
                }
            }
        }
    }

    main {
        padding-bottom: 100px;
        padding-top: 48px;
    }

    ::v-deep .m-course-card {
        margin-bottom: 38px;
    }
</style>
