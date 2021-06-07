<template>
    <div>
        <div class="nav-list">
            <swiper
                    :slides-per-view="1"
                    :space-between="50"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    :pagination="{ clickable: true }"

            >
                <swiper-slide v-for="item in  4">
                    <img class="nav-img"
                         @click="toCourseDetail"
                         :src="require('../../assets/icon/sucai/平行宇宙.jpg')"/>
                </swiper-slide>
            </swiper>
            <div class="plate-list container-main">
                <div class="plate-item" v-for="plate in plateList">
                    {{plate.title}}
                </div>
            </div>
        </div>

        <main>
            <div class="container-main">

                <!--热门课程-->
                <course-list-title @more="more"
                                   class="hot-title"/>
                <el-row :gutter="20" class="hot-list">
                    <el-col :span="12" v-for="item in 4" :key="item">
                        <xl-course-card class="hot-item"
                                        @click.native="toCourseDetail"
                                        :comment-show="true"/>
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
                        <l-course-card class="excellent-item"
                                       @click.native="toCourseDetail"/>
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
                    <el-col :span="12" v-for="item in 4" :key="item+'m'">
                        <xl-course-card class="activity-item"
                                        @click.native="toCourseDetail"/>
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
                        <m-course-card class="favorite-item"
                                       @click.native="toCourseDetail"/>
                    </el-col>
                </el-row>
            </div>
        </main>
    </div>
    <check-study @closeDialog="closeDialog" v-if="dialogShow"/>
</template>

<script>
  import { useRouter } from 'vue-router'
  import { ref, reactive } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Pagination, A11y } from 'swiper';
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';
  import CourseListTitle from "../../components/common/courseListTitle";
  import xlCourseCard from "../../components/courseCard/xlCourseCard";
  import LookAllCourse from "../../components/courseCard/lookAllCourse";
  import mCourseCard from "../../components/courseCard/sCourseCard";
  import lCourseCard from "../../components/courseCard/mCourseCard";
  import CheckStudy from "../../components/index/checkStudy";

  SwiperCore.use([Pagination, A11y]);

  export default {
    name: "index",
    components: {
      CheckStudy,
      LookAllCourse,
      xlCourseCard,
      CourseListTitle,
      mCourseCard,
      lCourseCard,
      Swiper,
      SwiperSlide,
    },
    setup() {
      const router = useRouter()
      const dialogShow = ref(true)      // 选择学习领域盒子
      const plateList = reactive([
        {
          title: '套餐视频'
        },
        {
          title: '全部课程'
        },
        {
          title: '学习中心'
        }
      ])
      const method = {
        more() {
          console.log('查看更多')
          router.push('/hotCourse')
        },
        closeDialog() {
          dialogShow.value = false
        },
        onSwiper(swiper) {
          console.log(swiper);
        },
        onSlideChange() {
          console.log('slide change')
        },
        toCourseDetail() {
          router.push('/courseDetail')
        }
      }
      return {
        ...method,
        dialogShow,
        plateList
      }
    }
  }
</script>

<style lang="scss" scoped>
    main {
        padding-bottom: 100px;
    }

    .nav-list {
        position: relative;
        width: 100%;
        height: 904px;
        background: #E2E2E2;

        .nav-img {
            height: 904px;
            width: 100%;
        }
    }

    .plate-list {
        z-index: 100;
        position: absolute;
        bottom: -62px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;

        .plate-item {
            font-size: 22px;
            font-weight: 400;
            color: #707070;
            width: 353px;
            height: 147px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F5F5F5;
        }
    }

    .hot-title {
        margin-top: 146px;
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

    ::v-deep .swiper-pagination {
        bottom: 138px;

        .swiper-pagination-bullet {
            width: 7px;
            height: 7px;
        }
    }
</style>
