<template>
    <!--置顶课程标题列表-->
    <div class="course-list-top" v-show="tabActive!=='course'">
        <div class="container-menu">
            <div class="left">
                <div >
					<img style="height: 47px;" src="../../assets/image/common/logoBlack.png" alt="">
				</div>
                <div class="tab-list">
                    <el-tabs v-model="tabActive"
                             @tab-click="tabClick">
                        <el-tab-pane v-for="item in tabList"
                                     :label="item.label"
                                     :name="item.name"/>
                    </el-tabs>
                </div>
            </div>
            <div class="right">
                <div @click="collect" class="collet">
                   {{isCollect?'已收藏' :'收藏' }}
                </div>
                <div class="share">
                    分享
                </div>
                <div class="join-btn">
                    加入学习
                </div>
            </div>
        </div>
    </div>
    <div class="container-main">
        <el-tabs v-model="tabActive"
                 @tab-click="tabClick">
            <el-tab-pane v-for="item in tabList"
                         :label="item.label"
                         :name="item.name"/>
        </el-tabs>
        <div class="course-video-list" v-if="courseVideoListShow">
            <div class="course-video-item"
                 v-for="(item,index) in resourceList"
                 :key="item+'p'"
                 @click="toPath(index)">
                <div class="left f-a-j">
                    <div class="title">第{{item.sort}}章</div>
                    <div class="circle">
						<img src="../../assets/image/course/video.png" style="height: 26px;" alt="">
					</div>
                    <div class="content">{{item.name}}</div>
					<div class="look f-a-j">
					    试看一分钟
					</div>
                </div>
                <div class="right">
                    
                    <div class="time">10分钟</div>
                </div>

            </div>
        </div>
        <el-row class="course-list" :gutter="27" v-if="!courseVideoListShow">
            <el-col :span="12"
                    class="course-item"
                    v-for="item in 4"
                    :key="item+'r'">
                <l-course-card/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import { ref,inject,watch,toRefs } from 'vue'
  import { useRouter } from 'vue-router'
  import LCourseCard from "../courseCard/lCourseCard";

  export default {
    name: "courseList",
    components: { LCourseCard },
	props:{
		resourceList:{
			type:Array,
			default:()=>{([])}
		},
		courseId:{
			type:String,
			default:""
		},
		courseType:{
			type:String,
			default:""
		},
		isCollect:{
			type:Boolean,
			default:false
		}
	},
    emits: ['tabClick','collect',"play"],
    setup(props, context) {
	  const {resourceList,courseId,courseType,isCollect} = toRefs(props) 
      let tabActive = ref(inject('tabActive'))
      const tabList = [
        {
          label: '课程',
          name: 'course'
        },
        {
          label: '评价',
          name: 'comment'
        },
        {
          label: '介绍',
          name: 'explain'
        },
        {
          label: '推荐',
          name: 'recommend'
        }
      ]
      const courseVideoListShow = ref(true)
      const router = useRouter()
      const tabClick = (tab) => {
        context.emit('tabClick', tab)
      }
      const toPath = (index) => {
		context.emit('play',index)
        
      }
	  // 收藏逻辑
	  const collect=()=>{
		  context.emit("collect")
	  }
      return {
        tabActive,
        tabClick,
        toPath,
        courseVideoListShow,
        tabList,
		resourceList,
		courseId,
		courseType,
		collect,
		isCollect
      }
    }
  }
</script>

<style lang="scss" scoped>
    .container-main {
        box-sizing: border-box;
        padding-top: 8px;
        padding-bottom: 40px;
        background: #FFFFFF;
        box-shadow: 0 3px 16px rgba(0, 0, 0, 0.04);
    }

    ::v-deep .el-tabs {
        padding: 0 40px;

        .el-tabs__header {
            margin: 0;
        }

        .el-tabs__nav-scroll {
            display: flex;
            justify-content: center;

        }

        .el-tabs__nav {
            height: 74px;
            display: flex;
            align-items: center;

            .el-tabs__item {
                padding: 0 33px;
                font-size: 16px;
                font-weight: 500;
                color: #333333;
            }

            .el-tabs__active-bar {
                height: 4px;
                background: #B9B9B9;
            }
        }
    }

    .course-video-list {
        padding-top: 45px;

        .course-video-item {
            cursor: pointer;
            padding: 15px 40px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;

            .right, .left {
                display: flex;
                align-items: center;
            }

            .title {
                font-size: 17px;
                font-weight: 400;
                line-height: 24px;
                margin-right: 80px;
            }

            .circle {
                
                margin-right: 10px;
            }

            .content {
                font-size: 17px;
                font-family: PingFang SC;
                font-weight: 400;
                line-height: 24px;
                color: #333333;
            }

            .look {
                font-size: 13px;
                font-weight: 400;
                color: #FFFFFF;
      
                height: 22px;
                background: linear-gradient(180deg, #F3B14F 0%, #F09D3A 100%);
                opacity: 1;
                border-radius: 11px;
                padding: 0 5px;
                margin-right: 14px;
				margin-left: 20px;
            }

            .time {
                font-size: 15px;
                font-weight: 400;
                line-height: 21px;
                color: #666666;
            }

        }

        .course-video-item:after {
            content: '';
            position: absolute;
            left: 0;
            width: 6px;
            top: 50%;
            transform: translateY(-50%);
            height: 19px;
            background: rgba(19, 113, 243, 1);
        }
    }

    .course-list {
        padding: 32px 40px 0 40px;

        .course-item {
            margin-bottom: 20px;
        }
    }

    .course-list-top {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        height: 104px;
        background: #EDEDED;
        .container-menu{
            height: 100%;
            display: flex;
            justify-content: space-between;
            background: #EDEDED;
            .left, .right{
                display: flex;
                align-items: center;
            }
            .join-btn{
                width: 203px;
                height: 58px;
                background:rgba(19, 113, 243, 1) ;
				color: #FFFFFF;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 19px;
                font-weight: 400;
                line-height: 26px;
				border-radius: 8px;
            }
            .collet,.share{
                margin-right: 26px;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                color: #333333;
            }
        }
    }
	::v-deep.el-tabs .el-tabs__nav .el-tabs__active-bar{
		background:  rgba(19, 113, 243, 1)!important;
	}
</style>
