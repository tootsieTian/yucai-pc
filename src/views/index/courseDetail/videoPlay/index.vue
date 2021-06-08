<template>
    <div class="video-play">
        <div class="video-box">
            <div class="btn-list">
                <div>收藏</div>
                <div>分享</div>
            </div>
            <div class="title-box">
                <div class="title">
                    21堂课告别社交恐惧
                </div>
                <div class="subtitle">
                    7节课 ｜ 时长2:30:09
                </div>
                <div class="tag-list">
                    <div class="tag-item" v-for="item in 3" :key="item+'i'">电商</div>
                </div>
            </div>
            <video-play class="video"/>
        </div>
        <div class="course-box">
            <div class="teacher-info">
                <img class="teacher-header"
                     :src="require('../../../../assets/icon/sucai/平行宇宙.jpg')"/>
                <div>
                    <div class="name">米卡</div>
                    <div class="explain">从事新媒体运营10年。</div>
                </div>
            </div>
            <div class="comment-btn" @click="commentBoxShow=true">评价课程</div>
            <div class="course-list-title">视频目录(9)</div>
            <div class="course-list">
                <div :class="{'course-item':true,'course-item--active':activeCourseItem===index}"
                     v-for="(item,index) in 7"
                     ref="courseItem"
                     @click="courseItemClick(index)">
                    <img class="title-page"
                         :src="require('../../../../assets/icon/sucai/平行宇宙.jpg')"/>
                    <div class="content">
                        <div class="title">1、新媒体运营</div>
                        <div class="subtitle">10分钟</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <comment v-if="commentBoxShow" @closeCommentBox="commentBoxShow=false"/>
</template>

<script>
  import { ref,watch } from 'vue'
  import Comment from "../../../../components/courseDetail/videoPlay/comment";
  import VideoPlay from "../../../../components/common/videoPlay";

  export default {
    name: "index",
    components: { VideoPlay, Comment },
    setup() {
      const courseItem = ref(null)
      const commentBoxShow = ref(false)
      const activeCourseItem = ref(0)
      const courseItemClick = (index) => {
        activeCourseItem.value = index
      }
      watch(commentBoxShow, (oldVal,newVal) => {
        console.log(oldVal)
      })
      return {
        courseItem,
        activeCourseItem,
        commentBoxShow,
        courseItemClick
      }
    }
  }
</script>

<style lang="scss" scoped>
    .video-play {
        background: #3E3E3E;
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

                div:first-child {
                    margin-right: 32px;
                }
            }

            .title-box {
                box-sizing: border-box;
                padding: 35px 0 32px 50px;
                background: #121212;
                height: 174px;

                .title {
                    font-size: 30px;
                    font-weight: 500;
                    line-height: 42px;
                    color: #FFFFFF;
                    margin-bottom: 13px;
                }

                .subtitle {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                    color: #999999;
                    margin-bottom: 10px;
                }
            }

            .tag-list {
                display: flex;

                .tag-item {
                    margin-right: 8px;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #868686;
                    padding: 0 10px;
                    background: rgba(193, 193, 193, 0.1);
                    border-radius: 2px;
                }
            }

            .video{
                flex: 1;
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
                margin-right: $right;
                margin-left: $left;
                height: 41px;
                background: #FFFFFF;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                color: #2C2C2C;
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
                    padding: 9px 12px 14px 22px;
                    display: flex;

                    img {
                        width: 141px;
                        height: 89px;
                    }

                    .content {
                        margin-left: 10px;

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
