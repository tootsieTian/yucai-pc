<template>
    <div class="video-play">
        <div class="video-box">
            <div class="btn-list">
                <div @click="collect" ><img :src="require('../../../../assets/image/course/videoPlay/heart.png')">{{isCollect ? "已收藏"  : "收藏"  }}</div>
                <div><img :src="require('../../../../assets/image/course/videoPlay/share.png')">分享</div>
            </div>
            <div class="title-box">
                <div class="title">
                    {{courseInfo.courseName}}
                </div>
                <div class="tag-list">
                    <div class="tag-item" >{{courseInfo.courseTag}}</div>
                </div>
                <div class="subtitle">
                    <img :src="require('../../../../assets/image/course/videoPlay/playIcon.png')">
                    当前播放: -{{activeVideo.name}}
                </div>
            </div>
            <video-play class="video"
			            :videoInfo="videoInfo.playURL"
                        v-if="!tryLookEnd"/>
            <div class="video-mask"
                 v-if="tryLookEnd">
                <div class="video-play-btn"></div>
                <div class="title">试看已结束</div>
                <div class="buy-btn">立即购买</div>
            </div>
        </div>
        <div class="course-box">
            <div class="teacher-info">
                <img class="teacher-header"
                     :src="lecturer.headImgUrl"/>
                <div>
                    <div class="name">{{lecturer.name}}</div>
                    <div class="explain">{{lecturer.introduction}}</div>
                </div>
            </div>
            <div class="comment-btn" @click="commentBoxShow=true">评价课程</div>
            <div class="course-list-title">视频目录{{resourceList.length}}</div>
            <div class="course-list">
                <div :class="{'course-item':true,'course-item--active':activeCourseItem===index}"
                     v-for="(item,index) in resourceList"
                     ref="courseItem"
                     @click="courseItemClick(index)">
                    <div class="tag">
                        <div class="playing" v-if="index===activeCourseItem">播放中</div>
                        <img v-else :src="require('../../../../assets/image/course/videoPlay/video.png')">
                    </div>
                    <div class="content">
                        <div class="title">{{index+1 +'、'+ item.name}}</div>
                        <div class="subtitle">10分钟</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <comment @submit="submit" v-if="commentBoxShow" @closeCommentBox="commentBoxShow=false"/>
</template>

<script>
  import { ref, watch } from 'vue'
  import Comment from "../../../../components/courseDetail/videoPlay/comment";
  import VideoPlay from "../../../../components/common/videoPlay";
  import {useRouter,useRoute} from "vue-router"
  import{ courseDetail, getPlayInfo, collectCourse, cancelCellect,evaluateCourse } from "../../../../api/course.js"
  import {
  	ElMessage
  } from 'element-plus'

  export default {
    name: "index",
    components: { VideoPlay, Comment },
    setup() {
      const tryLookEnd = ref(false)
	  const router = useRouter()
	  const roure = useRoute()
      const commentBoxShow = ref(false)
      
	  
	  // 获取课程ID 课程类型
	  const courseId =ref('')
	  const courseType =ref("")
	  const videoId =ref("")
	  const courseInfo=ref({})
	  const videoInfo=ref({})
	  const resourceList =ref([])
	  const lecturer =ref({})
	  const isCollect=ref(false)
	  courseId.value = roure.query.courseId
	  videoId.value = roure.query.videoId
	  courseType.value = parseInt(roure.query.courseType)
	 
	  //根据id获取播放详情
	  const getCourseInfo= async ()=>{
		 const res = await courseDetail({
			 courseId: courseId.value,
			 courseType: courseType.value,
			 userId: localStorage.getItem('user_id')
		 })
		 courseInfo.value=res
		 resourceList.value=res.resourceList
		 activeVideo.value=resourceList.value[0]
		 lecturer.value=res.lecturer
		 isCollect.value=res.isCollect==1 ? true : false 
	  }
	  getCourseInfo()
	  
	  // 根据id获取视频信息
	  const getVideoInfo=async (videoId)=>{
		  const res =await getPlayInfo({ videoId: videoId })
		  videoInfo.value=res.PlayInfoList[0]
		   console.log(videoInfo.value)
	  }
	  getVideoInfo(videoId.value)
	 
	  // 切换播放信息
	  const activeVideo=ref({})
	  const courseItemClick = (index) => {
		if(videoId.value==resourceList.value[index].mediaId){
			return 	
		} 
		videoId.value=resourceList[index].mediaId
	    getVideoInfo(videoId.value)
	  }
	  
	  // 提交评价
	  const submit =(obj)=>{

		  obj.evaluateType=courseType.value
		  obj.evaluateTypeId=courseId.value
		  console.log(obj.evaluateContent)
		  if(obj.evaluateContent==''){
		  	return  ElMessage.error("评价内容不能为空")
		  }
		  const res =evaluateCourse(obj)
		  ElMessage.success("评价成功！")
	  }
	  
	  // 收藏按钮逻辑
	  const collect = async () => {
	  	if (isCollect.value) {
	  		const res = await cancelCellect({
	  			courseId: courseId.value,
	  			courseType: courseType.value,
	  			userId: localStorage.getItem('user_id')
	  		})
	  		if (!res) {
	  			isCollect.value = false
	  			ElMessage.success('取消收藏！');
	  		}
	  	} else {
	  		const res = await collectCourse({
	  			courseId: courseId.value,
	  			courseType: courseType.value,
	  			userId: localStorage.getItem('user_id')
	  		})
	  		if (res) {
	  			isCollect.value = true
	  			ElMessage.success('收藏成功！');
	  		}
	  
	  
	  	}
	  
	  
	  }
	  
	  
      watch(commentBoxShow, (oldVal, newVal) => {
        console.log(oldVal)
      })
      return {
        commentBoxShow,
        courseItemClick,
        tryLookEnd,
		videoId,
		courseType,
		courseId,
		courseInfo,
		videoInfo,
		getVideoInfo,
		getCourseInfo,
		resourceList,
		activeVideo,
		lecturer,
	    submit,
		isCollect,
		collect
      }
    }
  }
</script>

<style lang="scss" scoped>
    .video-play {
        background: #191B1F;
        flex: 1;
        padding: 68px 227px 100px 157px;
        display: flex;

        .video-box {
            flex-direction: column;
            flex: 1;
            display: flex;
            height: 844px;
            background: #1E2227;
            position: relative;

            .btn-list {
                display: flex;
                position: absolute;
                top: 20px;
                right: 27px;
                font-size: 12px;
                font-weight: 400;
                line-height: 17px;
                color: #FFFFFF;
                div{
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 2px;
                        width: 25px;
                        height: 25px;
                    }
                }
                div:first-child {
                    margin-right: 32px;
                }
            }

            .title-box {
                box-sizing: border-box;
                padding: 43px 0 27px 24px;
                background: #121417;
                height: 174px;

                .title {
                    font-size: 24px;
                    line-height: 33px;
                    color: #FFFFFF;
                    font-weight: 500;
                    margin-bottom: 13px;
                }

                .subtitle {
                    img{
                        width: 12px;
                        height: 12px;
                        margin-right: 6px;
                    }
                    display: flex;
                    align-items: center;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #FFFFFF;
                }
            }

            .tag-list {
                display: flex;
                margin-bottom: 17px;
                .tag-item {
                    margin-right: 10px;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #1371F3;
                    padding: 0 10px;
                    border-radius: 2px;
                    background: rgba(19, 113, 243, 0.1);
                }
            }

            .video, .video-mask {
                flex: 1;
            }

            .video-mask {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .video-play-btn {
                    width: 109px;
                    height: 109px;
                    cursor: pointer;
                    background: #FFFFFF;
                }

                .title {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                    color: #999999;
                    margin: 28px 0;
                }

                .buy-btn {
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                    color: #999999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 130px;
                    height: 52px;
                    background: #FFFFFF;
                }
            }
        }

        .course-box {

            height: 844px;
            display: flex;
            flex-direction: column;
            width: 336px;
            background: #303236;
            $left: 27px;
            $right: 17px;

            .teacher-info {
                margin: 29px 17px 29px 29px;
                display: flex;

                .teacher-header {
                    width: 40px;
                    height: 40px;
                    margin-right: 16px;
                    border: 1px solid #FFFFFF;
                    border-radius: 50%;
                }

                .name {
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 21px;
                    color: #FFFFFF;
                    margin-bottom: 2px;
                }

                .explain {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 17px;
                    color: rgba(255, 255, 255, 0.4);
                }
            }

            .comment-btn {
                cursor: pointer;
                margin-right: $right;
                margin-left: $left;
                height: 41px;
                background: #1371F3;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                color: #FFFFFF;
            }

            .course-list-title {
                font-size: 15px;
                margin: 35px $right 20px $left;
                font-weight: 400;
                line-height: 21px;
                color: #FFFFFF;
            }

            .course-list {
                overflow-y: scroll;
                flex: 1;
                padding-bottom: 100px;

                .course-item {
                    cursor: pointer;
                    box-sizing: border-box;
                    padding: 19px 12px 16px 22px;
                    display: flex;

                    .tag {
                        display: flex;
                        justify-content: flex-start;
                        img{
                            width: 26px;
                            height: 26px;
                        }
                        .playing{
                            border-radius: 8px 2px 8px 2px;
                            background: rgba(19, 113, 243, 1);
                            color: #FFFFFF;
                            padding: 2px 5px;
                            height: 22px;
                            font-size: 12px;
                        }
                    }

                    .content {
                        margin-left: 15px;

                        .title {
                            font-size: 15px;
                            font-weight: 400;
                            line-height: 21px;
                            margin-bottom: 16px;
                            color: #FFFFFF;
                        }

                        .subtitle {
                            font-size: 15px;
                            font-weight: 400;
                            line-height: 21px;
                            color: #999999;
                        }
                    }
                }

                .course-item--active {
                    background: #1E2227;
                }
            }
        }
		
		
    }

</style>
