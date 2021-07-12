<template>
    <div>
        <div class="nav-list">
            <swiper
                    :autoplay="{enabled: true, delay: 1000}"
                    :slides-per-view="1"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    :pagination="{ clickable: true }"

            >
                <swiper-slide v-for="item in  swipeList">
                    <img class="nav-img"
                         @click="toCourseDetail"
                         :src="item.img"/>
                </swiper-slide>
            </swiper>
            <div class="plate-list container-main">
                <div class="plate-item" v-for="plate in plateList">
                    <div class="f-a-j f">
                        <img style="width: 36px; margin-right: 5px;" :src="plate.icon" alt="">{{plate.title}}
                    </div>
                    <div class="img">
                        <img :src="plate.mask" alt="">
                    </div>
                </div>
            </div>
            <div class="index-mask">
                <img src="../../assets/image/index/indexMask.png" alt="">
            </div>
        </div>

        <main>
            <!--热门课程-->
            <div class="hot-course">
                <img class="bg-line"
                     :src="require('../../assets/image/index/bg-line.png')">
                <div class="container-main">
                    <course-list-title @more="more"
                                       class="hot-title"/>
                    <el-row :gutter="20" class="hot-list">
                        <el-col :span="12" v-for="item in categoryHotList" :key="item">
                            <xl-course-card class="hot-item"
                                            :item="item"
                                            :style="{background: '#F5F6F6'}"
                                            @click.native="toCourseDetail(item)"
                                            :comment-show="true"/>
                        </el-col>
                    </el-row>
                    <look-all-course
                            title="查看全部290个热门课程"
                            @lookAll="toPath('/hotCourse')"
                    />
                </div>
            </div>

            <!--精品课程-->
            <div class="good-course">
                <div class="container-main">
                    <course-list-title title="精品课程"
                                       @more="more"
                                       subtitle="精心挑选的上好课程 / 直击你的专业瓶颈 / 加速知识吸收"
                                       class="excellent-title"/>
                    <el-row :gutter="20" class="excellent-list">
                        <el-col :span="12">
                            <div class="excellent-course-l">
                                <img class="title-page" :src="require('../../assets/image/index/better.png')">
                                <div class="content-box">
                                    <div class="title f-a">
                                        100倍工作效率
                                        <div class="tagList  " style="margin-left: 10px;">
                                            <div class="smallf12">SVIP免费</div>
                                        </div>
                                    </div>
                                    <div class="subtitle-box">
                                        <div class="subtitle">7节课 ｜ 时长2:30:09 ｜390人已学习</div>
                                        <div class="price">
                                            <Price color="#ffffff"></Price>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <el-row :gutter="20">
                                <el-col :span="12" v-for="item in boutiqueList">
                                    <div class="excellent-course-m">
                                        <img class="title-page"
                                             :src="item.img">
                                        <div class="content-box">
                                            <div style="width: 100%;" class="title">
                                                <div>100倍工作效率</div>
                                                <img :src="require('../../assets/image/common/svip.png')">
                                            </div>
                                            <div class="subtitle-box">
                                                <div class="subtitle">好评率<span
                                                        style="color: rgba(254, 152, 8, 1);margin-left: 5px;">100%</span>
                                                </div>
                                                <div class="price">
                                                    <Price></Price>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <look-all-course
                            title="查看全部290个精品课程"
                            @lookAll="toPath('/betterCourse')"
                    />
                </div>
            </div>

            <!--活动专区-->
            <div class="active-area">
                <div class="index-mask2">
                    <img style="width: 783px;" src="../../assets/image/index/indexMask.png" alt="">
                </div>
                <div class="container-main">
                    <course-list-title title="活动专区"
                                       @more="more"
                                       subtitle="好价课程 / 直击你的专业瓶颈 / 加速知识吸收"
                                       class="activity-title"/>
                    <el-row :gutter="24" class="activity-list">
                        <el-col :span="12" v-for="(item,index) in activeList" :key="index+'m'">
                            <xl-course-card class="activity-item"
							:item="item"
                                            @click.native="toCourseDetail(item)"/>
                        </el-col>
                    </el-row>
                    <look-all-course
                            title="查看全部290个活动课程"
                            @lookAll="toPath('/activeCourse')"
                    />
                </div>
            </div>

            <!--猜你喜欢-->
            <div class="favorite">
                <div class="container-main">
                    <course-list-title @more="more"
                                       title="猜你喜欢"
                                       subtitle="好价课程 / 直击你的专业瓶颈 / 加速知识吸收"
                                       class="favorite-title"/>
                    <div class="explain">
                        <div>以下课程根据您的喜好推荐</div>
                        <div class="exchange">更改喜好<i class="el-icon-arrow-right"/></div>
                    </div>
                    <el-row :gutter="24" class="favorite-list">
                        <el-col :span="6" v-for="item in loveList" :key="item+'m'">
                            <m-course-card class="favorite-item"
							               :item="item"
                                           @click.native="toCourseDetail(item)"/>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </main>
    </div>
    <check-study @closeDialog="closeDialog" v-if="dialogShow"/>

</template>

<script>
  import { useRouter } from 'vue-router'
  import { ref, reactive,onMounted } from 'vue'
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
  import { getIndexHot, getIndexTabList } from "../../api/indexList";
  import {myLovelist} from "../../api/course.js"

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
      const activeList = ref([])              // 活动列表
      const boutiqueList = ref([])           // 精品列表
      const categoryHotList = ref([])       // 热门列表
	  const loveList = ref([])             // 猜你喜欢列表
      let swipeList = reactive([])
      const plateList = reactive([
        {
          title: '全部课程',
          icon: require("../../assets/image/index/all.png"),
          mask: require("../../assets/image/index/allM.png")
        },
        {
          title: '套餐课程',
          icon: require("../../assets/image/index/meal.png"),
          mask: require("../../assets/image/index/studyM.png")
        },
        {
          title: '学习中心',
          icon: require("../../assets/image/index/study.png"),
          mask: require("../../assets/image/index/studyM.png")
        }
      ])
     
      onMounted(()=>{
		   method.getIndexData()
		   method.getMylovelist()
	  })
		 
	  

      const method = {
		  //  获取猜你喜欢列表
		  getMylovelist(){
		  		  myLovelist({userId: localStorage.getItem('user_id')}).then(res=>{
		  			  loveList.value=res
		  
		  		  })
		  },
		  // 调用首页数据api
		  getIndexData(){
			
			  getIndexHot({}).then(res=>{
			   
			  		method.getValue(res, 0)
			    swipeList.push(...res.indexCarouselList)
			  })
		  },
		 
		  // 数据填充
		  getValue(res, type) {
		    activeList.value = res.activeList
		    boutiqueList.value = res.boutiqueList
		    categoryHotList.value = type === 0 ? res.indexHotList : res.categoryHotList
		    
		  },
        more() {
          console.log('查看更多')
          router.push('/hotCourse')
        },
        toPath(path) {
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
        toCourseDetail(item) {
          router.push({
			  path:'/courseDetail',
			  query: {
			    courseId: item.courseId,
			    courseType: item.courseType
			  }
		 })
        },
        closeLogin() {
          loginShow.value = false
        }
      }
      return {
        ...method,
        dialogShow,
        plateList,
        loginShow,
        swipeList,
		activeList,
		boutiqueList,
		categoryHotList,
		loveList
      }
    }
  }
</script>

<style lang="scss" scoped>
    .active-area {
        background: #EFF0F0;
        padding-top: 55px;
        padding-bottom: 62px;
        position: relative;

        .index-mask2 {
            // background-image: url;
            position: absolute;
            width: 783px;
            // height: 1305px;
            left: 0px;
            top: -306px;
        }

        .activity-title {
            margin-bottom: 75px;

        }
    }

    .hot-course {
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        padding-bottom: 60px;

        .bg-line {
            width: 800px;
            height: 1000px;
            position: absolute;
            right: -300px;
            top: -300px;
        }
    }

    .favorite {
        padding-top: 55px;
        padding-bottom: 110px;
        background: #F5F6F6;

        .favorite-title {
            margin-bottom: 14px;
        }

        .favorite-list {
            .favorite-item {
                margin-bottom: 38px;
            }
        }
    }

    .good-course {
        box-sizing: border-box;
        background: #F5F6F6;
        position: relative;
        padding-top: 55px;
        padding-bottom: 75px;

        .excellent-title {
            margin-bottom: 53px;
        }
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

        .index-mask {
            // background-image: url;
            position: absolute;
            width: 724px;
            height: 1305px;
            right: 0px;

            img {
                width: 724px;
            }
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
            cursor: pointer;
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

            .img {
                position: absolute;
                right: 10px;
                top: 0px;

            }

            .img img {
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

    .excellent-list {
        margin-bottom: 50px;
        height: 606px;

        .excellent-course-l {
            cursor: pointer;
            position: relative;
            height: 606px;
            background: #EDEDED;

            .title-page {
                width: 100%;
                height: 100%;
            }

            .content-box {
                background: linear-gradient(180deg, rgba(144, 144, 144, 0) 0%, #1A1A1A 100%);
                position: absolute;
                padding: 25px 30px 17px 30px;
                bottom: 0;
                box-sizing: border-box;
                left: 0;
                width: 100%;

                .title {
                    margin-bottom: 12px;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    color: #FFFFFF;
                    display: flex;

                    .type {
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 17px;
                        color: #999999;
                    }
                }

                .subtitle-box {
                    display: flex;
                    justify-content: space-between;

                    .subtitle {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 22px;
                        color: #FFFFFF;
                    }

                    .price {
                        font-size: 27px;
                        font-family: DIN Alternate;
                        font-weight: bold;
                        line-height: 31px;
                        color: #FFFFFF;
                    }
                }
            }
        }

        .excellent-course-m:nth-child(-n+2) {
            margin-bottom: 20px;
        }

        .excellent-course-m {
            cursor: pointer;
            height: 293px;
            background: #FFFFFF;

            .title-page {
                height: 200px;
                width: 100%;
            }

            .content-box {
                padding: 0 15px 0 15px;
                box-sizing: border-box;
                width: 100%;

                .title {
                    img {
                        width: 48px;
                        height: 19px;
                        margin-left: 11px;
                    }

                    align-items: center;
                    margin-bottom: 10px;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    color: #333333;
                    display: flex;
                }

                .subtitle-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .subtitle {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        color: #999999;
                    }

                    .price {
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


    .activity-list {
        margin-bottom: 6px;

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

        .exchange {
            margin-left: 25px;
            color: rgba(19, 113, 243, 1);
        }
    }

    ::v-deep .swiper-pagination {
        bottom: 138px;

        .swiper-pagination-bullet {
            width: 7px;
            height: 7px;
            background: #FFFFFF;
            border-radius: 50%;
            opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
            width: 31px;
            height: 7px;
            background: #FFFFFF;
            opacity: 1;
            border-radius: 0 8px 0 8px;
        }
    }
</style>
