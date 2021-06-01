<template>
    <div>
        <div class="nav-list">
        </div>
        <main>
            <div class="container-1200">

                <!--热门课程-->
                <course-list-title @more="more"
                                   class="hot-title"/>
                <el-row :gutter="20" class="hot-list">
                    <el-col :span="12" v-for="item in 4" :key="item">
                        <xl-course-card class="hot-item"/>
                    </el-col>
                </el-row>
                <look-all-course
                        title="查看全部290个热门课程"
                        @lookAll="more"
                />

                <!--精品课程-->
                <course-list-title title="精品课程"
                                   @more="more"
                                   subtitle="精心挑选的上好课程 / 直击你的专业瓶颈 / 加速知识吸收"
                                   class="excellent-title"/>
                <el-row :gutter="39" class="excellent-list">
                    <el-col :span="8" v-for="item in 9" :key="item+'s'">
                        <l-course-card class="excellent-item"/>
                    </el-col>
                </el-row>
                <look-all-course
                        title="查看全部290个精品课程"
                        @lookAll="more"
                />

                <!--活动专区-->
                <course-list-title title="活动专区"
                                   @more="more"
                                   subtitle="好价课程 / 直击你的专业瓶颈 / 加速知识吸收"
                                   class="activity-title"/>
                <el-row :gutter="24" class="activity-list">
                    <el-col :span="6" v-for="item in 4" :key="item+'m'">
                        <m-course-card class="activity-item"
                                       type="拼团"/>
                    </el-col>
                </el-row>
                <look-all-course
                        title="查看全部290个活动课程"
                        @lookAll="more"
                />

                <!--猜你喜欢-->
                <course-list-title @more="more"
                                   title="猜你喜欢"
                                   subtitle="好价课程 / 直击你的专业瓶颈 / 加速知识吸收"
                                   class="favorite-title"/>
                <div class="explain">
                    <div>以下课程根据您的喜好推荐</div>
                    <div>更改喜好<i class="el-icon-arrow-right"/></div>
                </div>
                <el-row :gutter="24" class="favorite-list">
                    <el-col :span="6" v-for="item in 12" :key="item+'m'">
                        <m-course-card class="favorite-item"/>
                    </el-col>
                </el-row>
            </div>
        </main>
    </div>
</template>

<script>
  import CourseListTitle from "../components/common/courseListTitle";
  import xlCourseCard from "../components/courseCard/xlCourseCard";
  import LookAllCourse from "../components/courseCard/lookAllCourse";
  import mCourseCard from "../components/courseCard/mCourseCard";
  import lCourseCard from "../components/courseCard/lCourseCard";
  import {useRouter} from 'vue-router'

  export default {
    name: "index",
    components: {
      LookAllCourse,
      xlCourseCard,
      CourseListTitle,
      mCourseCard,
      lCourseCard
    },
    setup() {
      const router = useRouter()
      const method = {
        more() {
          console.log('查看更多')
          router.push('/hotCourse')
        }
      }
      return {
        ...method
      }
    }
  }
</script>

<style lang="scss" scoped>
    main {
        padding-bottom: 100px;
    }

    .nav-list {
        width: 100%;
        height: 904px;
        background: #E2E2E2;
    }

    .hot-title {
        margin-top: 76px;
        margin-bottom: 87px;
    }

    .hot-list {
        .hot-item {
            margin-bottom: 52px;
        }
    }

    .excellent-title {
        margin-top: 94px;
        margin-bottom: 53px;
    }

    .excellent-list {
        .excellent-item {
            margin-bottom: 44px;
        }
    }

    .activity-title {
        margin-top: 94px;
        margin-bottom: 73px;
    }

    .activity-list {
        margin-bottom: 22px;

        .activity-item {
            margin-bottom: 44px;
        }
    }

    .explain {
        display: flex;
        align-items: center;
        padding-left: 20px;
        box-sizing: border-box;
        height: 37px;
        background: #F7F7F7;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #999999;
        margin-bottom: 48px;
    }

    .favorite-title {
        margin-top: 94px;
        margin-bottom: 14px;
    }

    .favorite-list {
        .favorite-item {
            margin-bottom: 38px;
        }
    }
</style>
