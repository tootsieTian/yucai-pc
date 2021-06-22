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
                      <div class="f-a-j f">
						  <img  style="width: 36px; margin-right: 5px;" :src="plate.icon" alt="">{{plate.title}}
					  </div> 
					<div class="img" >
						<img :src="plate.mask" alt="">
					</div>
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
                <el-row :gutter="20" class="excellent-list">
                    <el-col :span="12">
                        <div class="excellent-course-l">
                            <img class="title-page" :src="require('../../assets/icon/sucai/平行宇宙.jpg')">
                            <div class="content-box">
                                <div class="title f-a">
                                    100倍工作效率
                                    <div  class="tagList  " style="margin-left: 10px;" > <div class="smallf12" >SVIP免费</div></div>
                                </div>
                                <div class="subtitle-box">
                                    <div class="subtitle">7节课 ｜ 时长2:30:09 ｜390人已学习</div>
                                    <div class="price"><Price :color="'#ffffff'" ></Price></div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <el-row :gutter="20">
                            <el-col :span="12"  v-for="item in 4">
                                <div class="excellent-course-m">
                                    <img class="title-page" :src="require('../../assets/icon/sucai/平行宇宙.jpg')">
                                    <div class="content-box">
                                        <div style="width: 100%;" class="title f-s">
                                            <div>100倍工作效率</div>
                                            <div class="tagList"><div class="smallf12" >SVIP免费</div></div>
                                        </div>
                                        <div class="subtitle-box">
                                            <div class="subtitle">好评率<span style="color: rgba(254, 152, 8, 1);margin-left: 5px;" >100%</span></div>
                                            <div class="price"><Price ></Price></div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
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
                        @lookAll="toPath('/activeCourse')"
                />

                <!--猜你喜欢-->
                <course-list-title @more="more"
                                   title="猜你喜欢"
                                   subtitle="好价课程 / 直击你的专业瓶颈 / 加速知识吸收"
                                   class="favorite-title"/>
                <div class="explain">
                    <div>以下课程根据您的喜好推荐</div>
                    <div class="exchange" >更改喜好<i class="el-icon-arrow-right"/></div>
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
  import Price from "../../components/common/price.vue"

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
	  Price
    },
    setup() {
      const router = useRouter()
      const dialogShow = ref(false)      // 选择学习领域盒子
	  const loginShow = ref(false)
      const plateList = reactive([
        {
          title: '全部课程',
		  icon:require("../../assets/image/index/all.png"),
		  mask:require("../../assets/image/index/allM.png")
        },
        {
          title: '套餐课程',
		  icon:require("../../assets/image/index/meal.png"),
		  mask:require("../../assets/image/index/studyM.png")
        },
        {
          title: '学习中心',
		  icon:require("../../assets/image/index/study.png"),
		  mask:require("../../assets/image/index/studyM.png")
        }
      ])
      const method = {
        more() {
          console.log('查看更多')
          router.push('/hotCourse')
        },
        toPath(path){
          router.push(path)
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
        },
		closeLogin(){
		loginShow.value=false
		}
      }
      return {
        ...method,
        dialogShow,
        plateList,
		loginShow
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
        background-image: url(../../assets/image/index/all.png);
        .nav-img {
            height: 904px;
            width: 100%;
        }
    }

    .plate-list {
        z-index: 2;
        position: absolute;
        bottom: -62px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
      
        .plate-item {
            font-size: 30px;
            font-weight: 500;
            color: #333333;
            width: 353px;
            height: 147px;
            display: flex;
			border-radius: 31px 0px 31px 31px;
            justify-content: center;
            align-items: center;
            background: #F5F5F5;
			position: relative;
			.img{
				position: absolute;
				right: 10px;
				top: 0px;
				
			}
			.img img{
				height: 147px;
			}
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
        margin-bottom: 35px;
        .excellent-course-l{
            position: relative;
            height: 590px;
            background: #EDEDED;
            .title-page{
                width: 100%;
                height: 100%;
            }
            .content-box{
                background: rgba(0,0,0,0);
                position: absolute;
                padding: 25px 30px 17px 30px;
                bottom: 0;
                box-sizing: border-box;
                left: 0;
                width: 100%;
                .title{
                    margin-bottom: 12px;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    color: #FFFFFF;
                    display: flex;
                    .type{
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 17px;
                        color: #999999;
                    }
                }
                .subtitle-box{
                    display: flex;
                    justify-content: space-between;
                    .subtitle{
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 22px;
                        color: #FFFFFF;
                    }
                    .price{
                        font-size: 27px;
                        font-family: DIN Alternate;
                        font-weight: bold;
                        line-height: 31px;
                        color: #FFFFFF;
                    }
                }
            }
        }
        .excellent-course-m:nth-child(-n+2){
            margin-bottom: 20px;
        }
        .excellent-course-m{
            height: 285px;
            .title-page{
                height: 200px;
                width: 100%;
            }
            .content-box{
                padding-top: 21px;
                padding-bottom: 2px;
                box-sizing: border-box;
                width: 100%;
                .title{
                    margin-bottom: 12px;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    color: #333333;
                    display: flex;
                    .type{
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 17px;
                        color: #999999
                    }
                }
                .subtitle-box{
                    display: flex;
                    justify-content: space-between;
                    .subtitle{
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        color: #999999;
                    }
                    .price{
                        font-size: 21px;
                        font-family: DIN Alternate;
                        font-weight: bold;
                        line-height: 25px;
                        color: #333333;
                    }
                }
            }

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
		padding-top: 8px;
		padding-bottom: 9px;
        box-sizing: border-box;
        height: 37px;
        background: rgba(19, 113, 243, 0.1);
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 48px;
		.exchange{
			margin-left: 25px;
			color: rgba(19, 113, 243, 1);
		}
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
