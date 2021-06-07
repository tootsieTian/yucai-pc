<template>
    <div class="comment">
        <div class="comment-box">
            <div class="title-box">
                <div>评价课程</div>
                <i class="el-icon-close" @click="close()"/>
            </div>
            <div class="content-box">
                <div class="course-box">
                    <img class="title-page" :src="require('../../../assets/icon/sucai/平行宇宙.jpg')">
                    <div class="content">
                        <div class="title">新媒体社区运营涨粉裂变</div>
                        <div class="star">
                            <el-rate
                                    disabled
                                    show-score
                                    disabled-void-color="rgba(0, 0, 0, 0.2)"
                                    text-color="transparent">
                            </el-rate>
                        </div>
                    </div>
                </div>
                <el-input
                        class="comment-input"
                        type="textarea"
                        :rows="10"
                        placeholder="评价一下这门课程吧…"
                        v-model="commentCourse">
                </el-input>
                <div class="btn" @click="submitComment">提交评价</div>
            </div>
        </div>
    </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    name: "comment",
    setup(props,context) {
      const commentCourse = ref('')
      const method = {
        close(){
          context.emit('closeCommentBox')
        },
        submitComment(){
          console.log(commentCourse)
          this.close()
        }
      }
      return {
        commentCourse,
        ...method
      }
    }
  }
</script>

<style lang="scss" scoped>
    .comment {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(28, 28, 28, 0.7);
        width: 100vw;
        height: 100vh;

        .comment-box {
            z-index: 100;
            width: 834px;
            background: #FFFFFF;
            position: absolute;
            top: 200px;
            left: 50%;
            transform: translateX(-50%);

            .title-box {
                border-bottom: 1px solid #D3D3D3;
                display: flex;
                justify-content: space-between;
                padding: 33px 22px 30px 41px;
                align-items: center;

                div:first-child {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 25px;
                    color: #0B0B0B;
                }

                i {
                    width: 20px;
                    height: 20px;
                }
            }
            .content-box{
                margin: 38px 32px 65px 40px;
                .course-box{
                    display: flex;
                    .title-page{
                        width: 144px;
                        height: 88px;
                        background: #F2F2F2;
                    }
                    .content{
                        margin-left: 13px;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 22px;
                        color: #333333;
                        .star{
                            margin-top: 26px;
                            margin-left: 4px;
                        }
                    }
                }
            }
        }
        .comment-input{
            margin-top: 26px;
        }
    }
    .btn{
        width: 375px;
        height: 54px;
        background: #E5E5E5;
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
        color: #333333;
    }
</style>
